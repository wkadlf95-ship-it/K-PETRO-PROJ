import type { ToneKey, TrendDirection } from "./types";

export type SummaryCard = {
  title: string;
  description: string;
  value: string;
  subValue: string;
  metrics: { label: string; value: string }[];
  trend: { direction: TrendDirection; text: string };
  path: string;
  tone: ToneKey;
};

export const summaryCards: SummaryCard[] = [
  {
    title: "가격정보",
    description: "유종별 가격 추이와 지역별 가격정보 제공",
    value: "1,685원/L",
    subValue: "휘발유 평균",
    metrics: [
      { label: "경유 평균", value: "1,548원/L" },
      { label: "LPG 평균", value: "982원/L" },
    ],
    trend: { direction: "down", text: "전일 대비 2원 하락" },
    path: "/oil/price/type",
    tone: "mint",
  },
  {
    title: "품질정보",
    description: "품질검사 결과 공개 가능 항목 조회",
    value: "98.7%",
    subValue: "최근 검사 적합률",
    metrics: [
      { label: "공개 검사건수", value: "1,248건" },
      { label: "검사 지역", value: "17개 시·도" },
    ],
    trend: { direction: "up", text: "전월 대비 0.3%p 상승" },
    path: "/oil/quality/result",
    tone: "blue",
  },
  {
    title: "유통통계",
    description: "유종별·지역별 석유 유통 통계 제공",
    value: "8,420천 kL",
    subValue: "월간 유통량",
    metrics: [
      { label: "집계 기준", value: "2026년 7월" },
      { label: "공개 항목", value: "유종·지역별" },
    ],
    trend: { direction: "up", text: "전월 대비 +2.1%" },
    path: "/oil/distribution/type",
    tone: "lavender",
  },
  {
    title: "신고/포상",
    description: "불법행위 신고 및 포상금 안내",
    value: "24건",
    subValue: "이번 달 신고 접수",
    metrics: [
      { label: "처리 완료", value: "18건" },
      { label: "처리 중", value: "6건" },
    ],
    trend: { direction: "flat", text: "처리율 75.0%" },
    path: "/oil/report/guide",
    tone: "yellow",
  },
];

export type QuickServiceIcon =
  | "disclosure" | "report" | "law" | "price" | "map" | "quality" | "stats" | "siren";

export type QuickService = {
  title: string;
  description: string;
  path: string;
  icon: QuickServiceIcon;
  tone: ToneKey;
};

export const quickServices: QuickService[] = [
  { title: "정보공개·공공데이터 안내", description: "공개 대상 정보와 개방 데이터 이용방법", path: "/disclosure/open/list", icon: "disclosure", tone: "mint" },
  { title: "동향·정책 리포트", description: "석유시장 동향과 정책 변화 리포트", path: "/oil/briefing/today", icon: "report", tone: "lavender" },
  { title: "법정 공표·정보공개청구", description: "법정 공표자료 확인 및 온라인 청구", path: "/disclosure/open/list", icon: "law", tone: "blue" },
  { title: "가격 조회", description: "유종별·기간별 평균 가격 조회", path: "/oil/price/type", icon: "price", tone: "yellow" },
  { title: "가격 지도", description: "지도에서 지역별 가격 수준 비교", path: "/oil/price/type", icon: "map", tone: "mint" },
  { title: "품질검사 결과 공개", description: "공개 가능한 검사 결과와 품질기준", path: "/oil/quality/result", icon: "quality", tone: "blue" },
  { title: "석유 유통 통계 인포그래픽", description: "유종·지역별 통계를 시각자료로 제공", path: "/oil/distribution/type", icon: "stats", tone: "stone" },
  { title: "신고안내·접수", description: "가짜석유·정량미달 등 불법행위 신고", path: "/oil/report/guide", icon: "siren", tone: "coral" },
];

export type HeroSlide = {
  category: string;
  title: string;
  summary: string;
  date: string;
  path: string;
  image: string;
};

/** Hero 배너 슬라이드: 공지사항과 석유 브리핑을 광고형 배너로 순환 노출합니다. */
export const heroSlides: HeroSlide[] = [
  {
    category: "품질정보",
    title: "석유제품 품질검사 결과 공개 안내",
    summary: "최근 30일 품질검사 1,248건 중 공개 가능 항목을 조회할 수 있습니다.",
    date: "2026.08.14",
    path: "/oil/quality/result",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=85",
  },
  {
    category: "공공데이터",
    title: "공공데이터 제공항목 변경 안내",
    summary: "개방 데이터 38종의 제공 항목과 갱신주기가 일부 변경되었습니다.",
    date: "2026.08.11",
    path: "/disclosure/opendata/catalog",
    image: "https://images.unsplash.com/photo-1558298248-e70b2375af4a?auto=format&fit=crop&w=1800&q=85",
  },
  {
    category: "오늘의 브리핑",
    title: "국제유가 동향 브리핑",
    summary: "주요 산유국 감산 기조와 국제유가 등락 요인을 3분 안에 정리했습니다.",
    date: "2026.08.14",
    path: "/oil/briefing/today",
    image: "https://images.unsplash.com/photo-1602499211425-b2b286df70fa?auto=format&fit=crop&w=1800&q=85",
  },
  {
    category: "신고/포상",
    title: "신고포상금 제도 안내",
    summary: "가짜석유·정량미달 신고 시 지급되는 포상 기준과 절차를 확인하세요.",
    date: "2026.08.07",
    path: "/oil/report/guide",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1800&q=85",
  },
];
