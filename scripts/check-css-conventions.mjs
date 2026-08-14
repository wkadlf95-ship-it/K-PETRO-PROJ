/**
 * CSS 아키텍처 규약 검사.
 * docs/css-아키텍처.md 의 규칙을 빌드마다 강제한다.
 *
 *   node scripts/check-css-conventions.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const STYLES = join(ROOT, 'styles');
const APP = join(ROOT, 'app');

const failures = [];
const fail = (file, msg) => failures.push(`${relative(ROOT, file).replace(/\\/g, '/')}: ${msg}`);

function walk(dir, ext) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, ext));
    else if (ext.some((e) => name.endsWith(e))) out.push(p);
  }
  return out;
}

const cssFiles = walk(STYLES, ['.css']);
const tsxFiles = walk(APP, ['.tsx', '.ts']);

/* 1. 색상 리터럴은 tokens.css 에만 */
for (const file of cssFiles) {
  if (file.endsWith('tokens.css')) continue;
  const src = readFileSync(file, 'utf8');
  src.split('\n').forEach((line, i) => {
    const hex = line.match(/#[0-9a-fA-F]{3,8}\b/g);
    if (hex) fail(file, `${i + 1}행 색상 리터럴 ${hex.join(', ')} — tokens.css 의 var(--토큰)을 쓸 것`);
    // rgba 는 반투명 그림자·오버레이만 허용
    const rgba = line.match(/rgba?\([^)]*\)/g);
    if (rgba && !/box-shadow|drop-shadow|linear-gradient|radial-gradient|repeating-linear/.test(line)) {
      fail(file, `${i + 1}행 ${rgba.join(', ')} — 그림자·오버레이 외의 rgba 는 토큰으로 뺄 것`);
    }
  });
}

/* 2. outline 제거는 대체 표시와 함께 */
for (const file of cssFiles) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (/outline:\s*(none|0)\b/.test(line) && !/box-shadow|outline-offset/.test(line)) {
      fail(file, `${i + 1}행 outline 제거에 대체 표시가 없음`);
    }
  });
}

/* 3. 폼 컨트롤 경계에 장식용 --bd 금지 (WCAG 1.4.11 은 --bd-ui) */
for (const file of cssFiles) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const isFormRule = /^\s*[.#][^{]*\b(input|select|textarea)\b[^{]*\{/.test(line);
    if (isFormRule && /border:[^;]*var\(--bd\)/.test(line)) {
      fail(file, `${i + 1}행 폼 컨트롤 경계에 --bd 사용 — --bd-ui 를 쓸 것`);
    }
  });
}

/* 4. JSX 인라인 style 금지 (색·간격이 CSS 밖으로 새는 것을 막는다).
      차트처럼 계산값을 넘겨야 하는 곳은 허용 목록에 둔다. */
const STYLE_ALLOW = ['charts/', 'HeroBannerSlider.tsx', 'HeroSection.tsx', 'PublicStatsSection.tsx'];
for (const file of tsxFiles) {
  if (STYLE_ALLOW.some((a) => file.replace(/\\/g, '/').includes(a))) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (/style=\{\{/.test(line)) fail(file, `${i + 1}행 인라인 style — CSS 파일로 옮길 것`);
  });
}

/* 5. 건너뛰기 링크 존재 */
if (!readFileSync(join(APP, 'App.tsx'), 'utf8').includes('skip-link')) {
  fail(join(APP, 'App.tsx'), '건너뛰기 링크(.skip-link)가 없음');
}

/* 6. BEM 표기: 블록은 단어-단어, 자식은 __, 변형은 --, 상태는 is- 로 시작.
      하이픈 3단 이상인데 __/-- 가 없으면 자식을 하이픈으로 붙인 것으로 본다.
      아래는 여러 단어로 이루어진 정당한 블록명이라 예외로 둔다. */
const MULTIWORD_BLOCKS = new Set([
  'all-menu-card', 'all-menu-featured', 'all-menu-section-title',
  'chart-grid-line', 'geo-data-view', 'service-menu-grid',
]);
for (const file of cssFiles) {
  if (file.endsWith('tokens.css')) continue;
  const src = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const seen = new Set();
  for (const m of src.matchAll(/\.([a-z][a-z0-9-]+)/g)) {
    const cls = m[1];
    if (seen.has(cls) || cls.includes('__') || cls.includes('--')) continue;
    if (cls.startsWith('is-') || cls.startsWith('col-') || MULTIWORD_BLOCKS.has(cls)) continue;
    if (cls.split('-').length >= 3) {
      seen.add(cls);
      fail(file, `.${cls} — 자식은 __, 변형은 -- 로 표기할 것 (블록이면 허용목록에 추가)`);
    }
  }
}

/* 7. 로드 순서 (뒤 파일이 앞을 덮으므로 순서가 규약이다) */
const EXPECTED = ['fonts.css', 'tokens.css', 'base.css', 'layout.css', 'components.css', 'pages/home.css', 'pages/institution.css', 'pages/sitemap.css'];
const imported = [...readFileSync(join(STYLES, 'index.css'), 'utf8').matchAll(/@import\s+'\.\/([^']+)'/g)].map((m) => m[1]);
if (imported.join(',') !== EXPECTED.join(',')) {
  fail(join(STYLES, 'index.css'), `로드 순서가 규약과 다름\n    기대: ${EXPECTED.join(' → ')}\n    실제: ${imported.join(' → ')}`);
}

if (failures.length) {
  console.error(`CSS 규약 위반 ${failures.length}건\n`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
console.log('CSS 규약 검사 통과');
