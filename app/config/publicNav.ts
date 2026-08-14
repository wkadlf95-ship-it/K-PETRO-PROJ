export type PublicNavItem = {
  label: string;
  path: string;
  desc: string;
  children?: { label: string; path: string; badge?: string }[];
};

export const publicNavItems: PublicNavItem[] = [
  {
    label: "가격정보",
    path: "/oil/price/type",
    desc: "유종별·지역별 가격과 이용자 맞춤 가격 서비스",
    children: [
      { label: "유종별 가격", path: "/oil/price/type" },
      { label: "지역별 가격", path: "/oil/price/region" },
      { label: "가격 추이", path: "/oil/price/trend" },
      { label: "가격 지도", path: "/oil/price/map" },
      { label: "관심 유종 알림", path: "/oil/price/alert", badge: "검토" },
      { label: "내 차 월 주유비 계산기", path: "/oil/price/calculator", badge: "후보" },
      { label: "AI 유가 예측 안내", path: "/oil/price/ai", badge: "후보" },
      { label: "장거리 주유 플래너", path: "/oil/price/planner", badge: "후보" },
    ],
  },
  {
    label: "품질정보",
    path: "/oil/quality/result",
    desc: "품질검사 결과와 국민 체감형 품질 서비스",
    children: [
      { label: "품질검사 결과 조회", path: "/oil/quality/result" },
      { label: "연료 품질확인 서비스 신청", path: "/oil/quality/check", badge: "검토" },
      { label: "주유소 신뢰지수", path: "/oil/quality/trust", badge: "후보" },
      { label: "품질 기준 안내", path: "/oil/quality/standard" },
    ],
  },
  {
    label: "유통·수급 통계",
    path: "/oil/distribution/type",
    desc: "공개 유통·수급·원유수송 통계",
    children: [
      { label: "유종별 유통 현황", path: "/oil/distribution/type" },
      { label: "지역별 유통 현황", path: "/oil/distribution/region" },
      { label: "원유수송 공개통계", path: "/oil/distribution/crude", badge: "신규" },
      { label: "수급 브리핑", path: "/oil/distribution/supply" },
      { label: "이상징후 요약 공개", path: "/oil/distribution/anomaly", badge: "검토" },
    ],
  },
  {
    label: "신고·포상",
    path: "/oil/report/guide",
    desc: "불법석유 신고, 처리결과, 포상 안내",
    children: [
      { label: "신고/포상 안내", path: "/oil/report/guide" },
      { label: "신고 접수", path: "/service/report/consumer" },
      { label: "신고 처리결과 조회", path: "/oil/report/status", badge: "검토" },
      { label: "포상 기준 안내", path: "/oil/report/reward" },
      { label: "자주하는 질문", path: "/service/report/faq" },
    ],
  },
  {
    label: "브리핑",
    path: "/oil/briefing/today",
    desc: "오늘의 유가·수급·정책 요약",
    children: [
      { label: "오늘의 석유 브리핑", path: "/oil/briefing/today" },
      { label: "동향 리포트", path: "/oil/briefing/report" },
      { label: "정책 알림", path: "/oil/briefing/policy" },
      { label: "통계 상세", path: "/oil/briefing/stats" },
    ],
  },
  {
    label: "공공데이터",
    path: "/oil/data/catalog",
    desc: "정보공개와 공개 데이터 이용",
    children: [
      { label: "정보공개", path: "/oil/data/disclosure" },
      { label: "공공데이터 목록", path: "/oil/data/catalog" },
      { label: "Open API", path: "/oil/data/api", badge: "후순위" },
    ],
  },
  {
    label: "이용지원",
    path: "/oil/support/search",
    desc: "검색, 챗봇, 알림, 개인화 지원",
    children: [
      { label: "통합검색", path: "/oil/support/search" },
      { label: "챗봇", path: "/oil/support/chatbot" },
      { label: "뉴스레터 구독관리", path: "/oil/support/newsletter", badge: "검토" },
      { label: "알림 수신설정", path: "/oil/support/notifications", badge: "검토" },
      { label: "마이페이지", path: "/oil/support/mypage", badge: "검토" },
    ],
  },
];

export const featuredPublicMenus = [
  { label: "가격정보", desc: "유종별·지역별 가격 조회", path: "/oil/price/type" },
  { label: "품질검사 결과", desc: "공개 가능한 검사결과 확인", path: "/oil/quality/result" },
  { label: "원유수송 공개통계", desc: "집계 기준 원유수송 현황", path: "/oil/distribution/crude" },
  { label: "신고·포상", desc: "신고 절차와 포상 기준 안내", path: "/oil/report/guide" },
  { label: "오늘의 브리핑", desc: "가격·수급·정책 요약", path: "/oil/briefing/today" },
];
