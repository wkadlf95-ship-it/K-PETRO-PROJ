// 대국민포털 메인 화면 mock data. 실제 API 연동 전까지 화면 구성을 위해 사용합니다.
export type ToneKey = "mint" | "yellow" | "lavender" | "blue" | "stone" | "coral";

export const summaryCards: {
  title: string;
  description: string;
  value: string;
  subValue: string;
  metrics: { label: string; value: string }[];
  trend: { direction: "up" | "down" | "flat"; text: string };
  path: string;
  tone: ToneKey;
}[] = [
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

export const quickServices: {
  title: string;
  description: string;
  path: string;
  icon: "disclosure" | "report" | "law" | "price" | "map" | "quality" | "stats" | "siren";
  tone: ToneKey;
}[] = [
  { title: "정보공개·공공데이터 안내", description: "공개 대상 정보와 개방 데이터 이용방법", path: "/disclosure/open/list", icon: "disclosure", tone: "mint" },
  { title: "동향·정책 리포트", description: "석유시장 동향과 정책 변화 리포트", path: "/oil/briefing/today", icon: "report", tone: "lavender" },
  { title: "법정 공표·정보공개청구", description: "법정 공표자료 확인 및 온라인 청구", path: "/disclosure/open/list", icon: "law", tone: "blue" },
  { title: "가격 조회", description: "유종별·기간별 평균 가격 조회", path: "/oil/price/type", icon: "price", tone: "yellow" },
  { title: "가격 지도", description: "지도에서 지역별 가격 수준 비교", path: "/oil/price/type", icon: "map", tone: "mint" },
  { title: "품질검사 결과 공개", description: "공개 가능한 검사 결과와 품질기준", path: "/oil/quality/result", icon: "quality", tone: "blue" },
  { title: "석유 유통 통계 인포그래픽", description: "유종·지역별 통계를 시각자료로 제공", path: "/oil/distribution/type", icon: "stats", tone: "stone" },
  { title: "신고안내·접수", description: "가짜석유·정량미달 등 불법행위 신고", path: "/oil/report/guide", icon: "siren", tone: "coral" },
];

export const priceTrend = {
  updatedAt: "2026.08.14 기준",
  labels: ["8/10", "8/11", "8/12", "8/13", "8/14"],
  series: [
    { name: "휘발유", color: "var(--chart-1)", values: [1685, 1692, 1688, 1679, 1685] },
    { name: "경유", color: "var(--chart-2)", values: [1548, 1551, 1545, 1542, 1548] },
  ],
};

export const distributionShare: { name: string; value: number; color: string }[] = [
  { name: "경유", value: 41, color: "var(--chart-1)" },
  { name: "휘발유", value: 32, color: "var(--chart-2)" },
  { name: "LPG", value: 12, color: "var(--chart-3)" },
  { name: "등유", value: 8, color: "var(--chart-4)" },
  { name: "기타", value: 7, color: "var(--chart-5)" },
];

export const crudeTransport = {
  updatedAt: "주 1회 공개",
  stats: [
    { label: "입항예정 선박 수", value: "12", unit: "척" },
    { label: "확보예정 물량", value: "1,240", unit: "천 배럴" },
  ],
  origins: [
    { country: "사우디아라비아", share: 46 },
    { country: "미국", share: 31 },
    { country: "쿠웨이트", share: 23 },
  ],
};

export const anomalySummary = {
  openCount: 3,
  items: [
    { title: "유통량 급변동 요약", level: "확인 중", note: "특정 권역 월간 유통량 편차 확대" },
    { title: "품질검사 부적합 집중 구간", level: "조치 진행", note: "동일 유종 부적합 비율 상승 구간" },
    { title: "수급보고 지연 요약", level: "조치 완료", note: "보고 지연 사례 집계 후 안내" },
  ],
  restrictions: ["개별 사업자 상세정보", "개별 선박 실시간 위치", "내부 판단 근거"],
};

export const disclosureCards: { title: string; description: string; links: string[]; path: string }[] = [
  {
    title: "정보공개·공공데이터",
    description: "국민 누구나 활용할 수 있는 사전공표 정보와 개방 데이터를 제공합니다.",
    links: ["사전정보 공표목록", "공공데이터 목록", "오픈API 이용안내"],
    path: "/disclosure/opendata/catalog",
  },
  {
    title: "법정 공표·정보공개청구",
    description: "법령에 따른 공표자료를 확인하고 필요한 정보를 온라인으로 청구합니다.",
    links: ["법정 공표자료", "정보공개청구 신청", "청구 처리현황"],
    path: "/disclosure/open/list",
  },
  {
    title: "경영공시·감사정보",
    description: "기관 경영 현황과 감사 결과를 투명하게 공개합니다.",
    links: ["경영공시 자료", "내부감사 결과", "청렴·윤리 활동"],
    path: "/disclosure/open/list",
  },
];

export const briefingItems = [
  { title: "국제유가 동향", summary: "주요 산유국 동향과 국제유가 등락 요인을 정리했습니다." },
  { title: "국내 유가 동향", summary: "주간 전국 평균 판매가격 흐름과 지역별 편차 요약." },
  { title: "유류세 및 정책 변화", summary: "유류세 조정 일정과 관련 고시 변경 사항 안내." },
  { title: "석유제품 수급 동향", summary: "정제·수입·소비 흐름과 재고 수준을 집계 기준으로 제공." },
];

export const reportServices: {
  title: string;
  description: string;
  action: string;
  path: string;
  icon: "siren" | "search" | "award" | "flask";
  tone: ToneKey;
}[] = [
  { title: "신고안내·접수", description: "가짜석유, 정량미달 등 불법행위를 온라인으로 신고합니다.", action: "신고하기", path: "/oil/report/guide", icon: "siren", tone: "coral" },
  { title: "신고 처리결과 조회", description: "접수번호로 신고 처리 단계와 결과를 확인합니다.", action: "결과 조회", path: "/oil/report/guide", icon: "search", tone: "blue" },
  { title: "포상금 안내", description: "포상 대상과 지급 기준, 신청 절차를 안내합니다.", action: "제도 확인", path: "/oil/report/guide", icon: "award", tone: "yellow" },
  { title: "연료 품질확인 서비스 신청", description: "차량 연료의 품질확인 서비스를 신청합니다.", action: "서비스 신청", path: "/oil/quality/result", icon: "flask", tone: "mint" },
];

export const personalizationItems: {
  title: string;
  description: string;
  action: string;
  icon: "star" | "mail" | "bell";
}[] = [
  { title: "관심정보 관리", description: "관심 유종과 지역을 등록하면 첫 화면에서 먼저 확인할 수 있습니다.", action: "관심정보 설정", icon: "star" },
  { title: "뉴스레터 구독관리", description: "석유 브리핑과 정책 리포트를 이메일로 정기 수신합니다.", action: "구독 관리", icon: "mail" },
  { title: "알림 수신설정", description: "가격·품질·공지 알림의 수신 여부와 주기를 설정합니다.", action: "알림 설정", icon: "bell" },
];

// Hero 배너 슬라이드: 공지사항과 석유 브리핑을 광고형 배너로 순환 노출합니다.
export const heroSlides: {
  category: string;
  title: string;
  summary: string;
  date: string;
  path: string;
  image: string;
}[] = [
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

