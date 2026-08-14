import type { ToneKey } from "./types";

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

export const briefingItems: { title: string; summary: string }[] = [
  { title: "국제유가 동향", summary: "주요 산유국 동향과 국제유가 등락 요인을 정리했습니다." },
  { title: "국내 유가 동향", summary: "주간 전국 평균 판매가격 흐름과 지역별 편차 요약." },
  { title: "유류세 및 정책 변화", summary: "유류세 조정 일정과 관련 고시 변경 사항 안내." },
  { title: "석유제품 수급 동향", summary: "정제·수입·소비 흐름과 재고 수준을 집계 기준으로 제공." },
];

export type ReportIcon = "siren" | "search" | "award" | "flask";

export const reportServices: {
  title: string; description: string; action: string; path: string; icon: ReportIcon; tone: ToneKey;
}[] = [
  { title: "신고안내·접수", description: "가짜석유, 정량미달 등 불법행위를 온라인으로 신고합니다.", action: "신고하기", path: "/oil/report/guide", icon: "siren", tone: "coral" },
  { title: "신고 처리결과 조회", description: "접수번호로 신고 처리 단계와 결과를 확인합니다.", action: "결과 조회", path: "/oil/report/guide", icon: "search", tone: "blue" },
  { title: "포상금 안내", description: "포상 대상과 지급 기준, 신청 절차를 안내합니다.", action: "제도 확인", path: "/oil/report/guide", icon: "award", tone: "yellow" },
  { title: "연료 품질확인 서비스 신청", description: "차량 연료의 품질확인 서비스를 신청합니다.", action: "서비스 신청", path: "/oil/quality/result", icon: "flask", tone: "mint" },
];

export type PersonalIcon = "star" | "mail" | "bell";

export const personalizationItems: { title: string; description: string; action: string; icon: PersonalIcon }[] = [
  { title: "관심정보 관리", description: "관심 유종과 지역을 등록하면 첫 화면에서 먼저 확인할 수 있습니다.", action: "관심정보 설정", icon: "star" },
  { title: "뉴스레터 구독관리", description: "석유 브리핑과 정책 리포트를 이메일로 정기 수신합니다.", action: "구독 관리", icon: "mail" },
  { title: "알림 수신설정", description: "가격·품질·공지 알림의 수신 여부와 주기를 설정합니다.", action: "알림 설정", icon: "bell" },
];

export const footerSitemapColumns: { title: string; path: string; links: string[] }[] = [
  { title: "기관소개", path: "/about/ceo/greeting", links: ["기관 소개", "주요업무", "ESG경영"] },
  { title: "공개정보", path: "/disclosure/open/list", links: ["정보공개", "법정 공표", "공공데이터 개방"] },
  { title: "석유정보", path: "/oil/price/type", links: ["가격정보", "품질정보", "유통통계"] },
  { title: "고객서비스", path: "/service/report/guide", links: ["민원·신고", "자료실", "사업자 지원"] },
];

export const relatedSites: { label: string; href: string }[] = [
  { label: "수급보고시스템 바로가기", href: "https://www.oilreport.or.kr/" },
  { label: "수소유통정보시스템 바로가기", href: "#hydrogen" },
  { label: "관련 사이트", href: "#related" },
];
