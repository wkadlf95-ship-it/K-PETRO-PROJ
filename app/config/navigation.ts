export type PortalRoute = {
  label: string;
  path: string;
  enabled: boolean;
  children?: { label: string; path: string; enabled: boolean }[];
};

// 메뉴를 하나씩 정리할 때 enabled만 false로 바꾸면 화면에서 숨겨집니다.
export const institutionLinks = [
  { label: "K-PETRO 소개", path: "/about", enabled: true },
  { label: "고객서비스", path: "/support", enabled: true },
  { label: "알림·홍보", path: "/briefing", enabled: true },
  { label: "정보공개", path: "/disclosure", enabled: true },
  { label: "ESG경영", path: "/esg", enabled: true },
  { label: "주요업무", path: "/business", enabled: true },
];

export const primaryNavigation: PortalRoute[] = [
  {
    label: "정보공개",
    path: "/disclosure",
    enabled: true,
    children: [
      { label: "정보공개 안내", path: "/disclosure", enabled: true },
      { label: "법정 공표", path: "/disclosure", enabled: true },
      { label: "정보공개청구", path: "/disclosure", enabled: true },
    ],
  },
  {
    label: "가격정보",
    path: "/price",
    enabled: true,
    children: [
      { label: "유종별 가격", path: "/price", enabled: true },
      { label: "지역별 가격", path: "/price", enabled: true },
      { label: "가격 지도", path: "/price", enabled: true },
    ],
  },
  {
    label: "품질정보",
    path: "/quality",
    enabled: true,
    children: [
      { label: "품질검사 결과", path: "/quality", enabled: true },
      { label: "품질 기준", path: "/quality", enabled: true },
      { label: "연료 품질확인", path: "/quality", enabled: true },
    ],
  },
  {
    label: "유통통계",
    path: "/distribution",
    enabled: true,
    children: [
      { label: "유종별 통계", path: "/distribution", enabled: true },
      { label: "지역별 통계", path: "/distribution", enabled: true },
      { label: "원유수송 통계", path: "/distribution", enabled: true },
    ],
  },
  {
    label: "신고/포상",
    path: "/report",
    enabled: true,
    children: [
      { label: "신고 안내·접수", path: "/report", enabled: true },
      { label: "처리결과 조회", path: "/report", enabled: true },
      { label: "포상금 안내", path: "/report", enabled: true },
    ],
  },
  { label: "공공데이터", path: "/public-data", enabled: true },
  { label: "브리핑", path: "/briefing", enabled: true },
  { label: "고객지원", path: "/support", enabled: true },
];

