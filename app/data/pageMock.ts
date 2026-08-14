export type BoardRow = {
  no: number;
  title: string;
  dept: string;
  date: string;
  views: number;
  file: boolean;
};

const BOARD_SUFFIXES = ["안내", "공고", "결과 공개", "변경 알림", "시행 안내", "모집 공고", "개정 예고", "운영 계획"];
const BOARD_DEPTS = ["기획조정처", "품질관리처", "유통관리처", "고객지원팀", "정보화팀", "미래기술연구소"];

/** 게시판 제목을 seed로 삼아 결정적으로 목록을 생성합니다. */
export function buildBoardRows(seed: string, total = 47): BoardRow[] {
  return Array.from({ length: total }, (_, i) => {
    const no = total - i;
    const month = ((no * 3) % 12) + 1;
    const day = ((no * 7) % 28) + 1;
    return {
      no,
      title: `${seed} ${BOARD_SUFFIXES[no % BOARD_SUFFIXES.length]} (${String(month).padStart(2, "0")}월)`,
      dept: BOARD_DEPTS[no % BOARD_DEPTS.length],
      date: `2026.${String(month).padStart(2, "0")}.${String(day).padStart(2, "0")}`,
      views: 120 + ((no * 37) % 1800),
      file: no % 3 === 0,
    };
  });
}

export const faqCategories = ["전체", "품질검사", "신고·포상", "공공데이터", "사업자"];

export const faqItems: { cat: string; q: string; a: string }[] = [
  { cat: "품질검사", q: "품질검사 결과는 어디에서 확인할 수 있나요?", a: "정보공개 > 공공데이터 개방 > 연료품질정보에서 공개 가능한 검사 결과를 조회할 수 있습니다." },
  { cat: "품질검사", q: "연료 품질 확인서비스는 어떻게 신청하나요?", a: "고객서비스 > 서비스 정보 > 연료 품질 확인서비스에서 온라인으로 신청할 수 있으며, 접수 후 담당자가 연락드립니다." },
  { cat: "신고·포상", q: "가짜석유를 발견하면 어떻게 신고하나요?", a: "고객서비스 > 민원·신고하기 > 가짜석유·정량미달 소비자 신고에서 접수할 수 있습니다. 신고자 정보는 법령에 따라 보호됩니다." },
  { cat: "신고·포상", q: "포상금은 얼마나 지급되나요?", a: "위반 유형과 적발 규모에 따라 관련 고시가 정한 기준에 따라 차등 지급됩니다." },
  { cat: "공공데이터", q: "Open API 인증키는 어떻게 발급받나요?", a: "정보공개 > 공공데이터 개방 > Open API에서 이용 신청 후 발급받을 수 있습니다." },
  { cat: "사업자", q: "수급거래상황 보고는 어디서 하나요?", a: "석유제품 수급보고시스템(oilreport.or.kr)에서 전산으로 보고할 수 있습니다." },
];

export const historyGroups: { year: string; items: { year: string; text: string }[] }[] = [
  {
    year: "2020s",
    items: [
      { year: "2026", text: "대국민 석유정보 통합포털 개편" },
      { year: "2024", text: "수소유통 전담기관 지정" },
      { year: "2022", text: "미래기술연구소 확대 개편" },
    ],
  },
  {
    year: "2010s",
    items: [
      { year: "2018", text: "석유제품 수급보고시스템 고도화" },
      { year: "2015", text: "국제공인시험기관 인정 확대" },
      { year: "2013", text: "한국석유관리원으로 명칭 변경" },
    ],
  },
  {
    year: "2000s",
    items: [
      { year: "2008", text: "전국 지역본부 체계 정비" },
      { year: "2003", text: "석유품질 검사 전산화" },
    ],
  },
  {
    year: "1980s",
    items: [{ year: "1983", text: "한국석유품질검사소 설립" }],
  },
];

export const orgUnits: { name: string; teams: string[] }[] = [
  { name: "기획조정본부", teams: ["기획예산처", "경영지원처", "인재개발팀"] },
  { name: "품질관리본부", teams: ["품질기획처", "품질검사처", "시험분석센터"] },
  { name: "유통관리본부", teams: ["유통기획처", "유통검사처", "수급관리팀"] },
  { name: "미래기술연구소", teams: ["연구기획팀", "대체연료연구팀", "수소기술팀"] },
];

export type LocationInfo = { name: string; addr: string; tel: string; train: string; bus: string };

export const locations: Record<string, LocationInfo> = {
  hq: { name: "본사", addr: "충청북도 음성군 맹동면 두레로 51", tel: "043-240-7900", train: "KTX 오송역 → 버스 환승 약 40분", bus: "음성 혁신도시 방면 시내버스 이용" },
  lab: { name: "미래기술연구소", addr: "경기도 성남시 분당구 판교로 지역", tel: "031-000-0000", train: "신분당선 판교역 하차 도보 15분", bus: "판교테크노밸리 순환버스 이용" },
  regional: { name: "지역본부", addr: "전국 10개 지역본부 운영", tel: "1588-5166", train: "지역본부별 상이", bus: "지역본부별 상이" },
};

export const searchRegions = ["전체", "서울", "부산", "대구", "인천", "광주", "대전", "경기", "충북"];
export const searchProducts = ["전체", "휘발유", "경유", "등유", "LPG"];

export type InspectionRow = { id: string; region: string; product: string; date: string; result: "적합" | "부적합" };

export function buildInspectionRows(total = 8): InspectionRow[] {
  return Array.from({ length: total }, (_, i) => ({
    id: `KP-2026-${String(1200 + i)}`,
    region: searchRegions[(i % (searchRegions.length - 1)) + 1],
    product: searchProducts[(i % (searchProducts.length - 1)) + 1],
    date: `2026.08.${String(14 - i).padStart(2, "0")}`,
    result: i % 7 === 0 ? "부적합" : "적합",
  }));
}

// 지도 API 연동 전, 지도형 화면(가격지도·주유플래너·재난정보)에 쓰는 핀 자리표시 데이터입니다.
export type MapPin = { label: string; note?: string };
export type MapPreset = { caption: string; pins: MapPin[]; legend?: { label: string; tone: "low" | "mid" | "high" }[] };

export const mapPresets: Record<string, MapPreset> = {
  map: {
    caption: "오피넷 Open API·GIS 데이터 연계 지도 화면 (시안)",
    pins: [
      { label: "수도권", note: "1,672원" }, { label: "강원권", note: "1,701원" }, { label: "충청권", note: "1,658원" },
      { label: "전라권", note: "1,649원" }, { label: "경상권", note: "1,684원" }, { label: "제주권", note: "1,712원" },
    ],
    legend: [{ label: "저가 지역", tone: "low" }, { label: "평균 지역", tone: "mid" }, { label: "고가 지역", tone: "high" }],
  },
  planner: {
    caption: "경로 기반 저가 주유소 안내 지도 화면 (시안)",
    pins: [{ label: "출발지" }, { label: "경유 주유소" }, { label: "경유 주유소" }, { label: "목적지" }],
  },
  disaster: {
    caption: "재난정보 연계기관 API 기반 위치 지도 화면 (시안)",
    pins: [{ label: "재난상황 A" }, { label: "재난상황 B" }, { label: "재난상황 C" }],
  },
};

export const MAP_PIN_POSITIONS = [
  { top: "22%", left: "28%" }, { top: "44%", left: "56%" }, { top: "64%", left: "20%" },
  { top: "34%", left: "74%" }, { top: "72%", left: "48%" }, { top: "16%", left: "58%" },
];
