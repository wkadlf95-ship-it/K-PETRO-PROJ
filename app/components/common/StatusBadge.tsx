const TONE_BY_KEYWORD: { match: string; tone: "urgent" | "review" | "later" }[] = [
  { match: "필수", tone: "urgent" },
  { match: "검토", tone: "review" },
  { match: "후순위", tone: "later" },
  { match: "보류", tone: "later" },
];

function toneFor(status: string) {
  return TONE_BY_KEYWORD.find((item) => status.includes(item.match))?.tone ?? "review";
}

// 요구사항 관리대장 기준 "협의중·필수" 같은 문자열을 배지로 표시합니다.
// 기존 대표홈페이지 콘텐츠(status 없음)에는 노출되지 않고, 이번에 신규
// 제안한 화면에만 붙어 "여기는 아직 확정 전"임을 보여줍니다.
// compact: 사이트맵·전체메뉴처럼 항목이 많은 목록에서 점 하나로만 표시합니다.
export function StatusBadge({ status, compact = false }: { status: string; compact?: boolean }) {
  if (compact) {
    return <i className={`status-dot status-${toneFor(status)}`} title={`신규 제안 · ${status}`} aria-label={`신규 제안 · ${status}`} />;
  }
  return <span className={`status-badge status-${toneFor(status)}`}>신규 제안 · {status}</span>;
}
