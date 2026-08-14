/**
 * 위젯 배치 저장.
 *
 * 격자는 2열 고정이다. 서버가 col 을 0~1 로 깎아 저장하기 때문에,
 * 화면을 3열 이상으로 그리면 저장할 때마다 배치가 조금씩 어긋난다.
 *
 * 백엔드 연동 전까지 localStorage 를 쓴다. 서버가 붙으면
 * 기본 배치는 page_default_layout, 사용자별 배치는 /api/dashboard 로 옮긴다.
 */
export const COLS = 2;
export const ROWS = 20; // portlet.css 의 [data-row] 규칙 개수와 반드시 일치해야 한다

export type Placement = {
  key: string;
  col: number; // 0 | 1
  row: number; // 0 ~ ROWS-1
  span?: 1 | 2; // 2 면 두 열을 모두 차지한다
};

const STORAGE_PREFIX = "KPETRO_PORTLET_";

/** 서버의 page_default_layout 에 대응하는 기본 배치 */
export const defaultPriceLayout: Placement[] = [
  { key: "price-by-product", col: 0, row: 0 },
  { key: "price-trend", col: 1, row: 0 },
  { key: "price-by-region", col: 0, row: 1 },
  { key: "price-delta", col: 1, row: 1 },
  { key: "price-notice", col: 0, row: 2, span: 2 },
];

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

/** 저장된 값이 격자 범위를 벗어나면 잘라낸다. 열 수가 바뀌어도 배치가 깨지지 않는다. */
function normalize(list: Placement[]): Placement[] {
  return list.map((p) => ({
    key: p.key,
    col: clamp(Math.trunc(p.col), 0, COLS - 1),
    row: clamp(Math.trunc(p.row), 0, ROWS - 1),
    ...(p.span === 2 ? { span: 2 as const } : {}),
  }));
}

export function loadLayout(pageKey: string, fallback: Placement[]): Placement[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + pageKey);
    if (!raw) return normalize(fallback);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return normalize(fallback);
    return normalize(parsed);
  } catch {
    return normalize(fallback);
  }
}

export function saveLayout(pageKey: string, layout: Placement[]) {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + pageKey, JSON.stringify(layout));
  } catch {
    // 저장 실패는 화면 동작을 막지 않는다 (시크릿 모드 등)
  }
}

export function clearLayout(pageKey: string) {
  try {
    window.localStorage.removeItem(STORAGE_PREFIX + pageKey);
  } catch {
    // 무시
  }
}
