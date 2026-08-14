// 한국석유관리원 대표홈페이지 전체 메뉴 트리.
// kind가 페이지 유형을 결정하고, PageRenderer가 유형별 화면을 그립니다.
export type PageKind = "content" | "board" | "form" | "search" | "faq" | "timeline" | "org" | "location" | "external" | "geo" | "calculator";

export type MenuNode = {
  label: string;
  slug: string;
  kind?: PageKind;
  href?: string;
  desc?: string;
  children?: MenuNode[];
};

export const siteTree: MenuNode[] = [
  {
    label: "K-PETRO 소개",
    slug: "about",
    desc: "건전한 석유 유통질서와 국민 안전을 지키는 한국석유관리원을 소개합니다.",
    children: [
      {
        label: "CEO 인사말", slug: "ceo", children: [
          { label: "CEO 인사말", slug: "greeting", kind: "content" },
          { label: "경영방침", slug: "policy", kind: "content" },
        ],
      },
      {
        label: "일반현황", slug: "overview", children: [
          { label: "설립배경", slug: "background", kind: "content" },
          { label: "연혁", slug: "history", kind: "timeline" },
          { label: "경영전략", slug: "strategy", kind: "content" },
          { label: "수상·인정·지정 현황", slug: "awards", kind: "board" },
        ],
      },
      {
        label: "채용정보", slug: "recruit", children: [
          { label: "인재상", slug: "talent", kind: "content" },
          { label: "채용안내", slug: "guide", kind: "content" },
          { label: "채용공고", slug: "notice", kind: "board" },
        ],
      },
      {
        label: "부서안내", slug: "org", children: [
          { label: "조직도", slug: "chart", kind: "org" },
        ],
      },
      {
        label: "오시는길", slug: "location", children: [
          { label: "본사", slug: "hq", kind: "location" },
          { label: "미래기술연구소", slug: "lab", kind: "location" },
          { label: "지역본부", slug: "regional", kind: "location" },
        ],
      },
      {
        label: "CI·캐릭터", slug: "ci", children: [
          { label: "CI 소개", slug: "intro", kind: "content" },
          { label: "CI 활용규정", slug: "rule", kind: "content" },
          { label: "캐릭터 소개", slug: "character", kind: "content" },
        ],
      },
    ],
  },
  {
    label: "고객서비스",
    slug: "service",
    desc: "민원과 신고, 사업자 지원, 고객서비스 제도를 한곳에서 안내합니다.",
    children: [
      {
        label: "민원·신고하기", slug: "report", children: [
          { label: "민원·신고하기 안내", slug: "guide", kind: "content" },
          { label: "묻고답하기", slug: "qna", kind: "board" },
          { label: "가짜석유·정량미달 소비자 신고", slug: "consumer", kind: "form" },
          { label: "헬프라인(익명신고)", slug: "helpline", kind: "content" },
          { label: "자주하는 질문", slug: "faq", kind: "faq" },
          { label: "소극행정·예산낭비 등 민원", slug: "epeople", kind: "external", href: "https://www.epeople.go.kr" },
          { label: "부패·공익신고", slug: "clean", kind: "external", href: "https://ncp.clean.go.kr" },
        ],
      },
      {
        label: "서비스 정보", slug: "info", children: [
          { label: "소비자연료 무상 품질점검", slug: "freecheck", kind: "content" },
          { label: "생활공감 정책", slug: "life", kind: "content" },
          { label: "품질관리 협약주유소", slug: "station", kind: "search" },
          { label: "연료 품질 확인서비스", slug: "fuelcheck", kind: "form" },
          { label: "불법석유제품 취급업소 현황", slug: "illegal", kind: "external", href: "http://www.opinet.co.kr/dlarSelect.do" },
          { label: "오일톡톡", slug: "oiltalk", kind: "external", href: "https://www.kpetro.or.kr/smart/" },
        ],
      },
      {
        label: "사업자 지원", slug: "business", children: [
          { label: "사업자 지원 안내", slug: "guide", kind: "content" },
          { label: "석유정제업 등의 등록·신고", slug: "register", kind: "form" },
          { label: "윤활유 품질검사 신청", slug: "lube", kind: "form" },
          { label: "검사결과 확인", slug: "result", kind: "search" },
          { label: "대외기술지원 교육", slug: "edu", kind: "content" },
          { label: "석유제품 수급거래상황 보고", slug: "oilreport", kind: "external", href: "https://www.oilreport.or.kr/" },
        ],
      },
      {
        label: "고객서비스 제도", slug: "charter", children: [
          { label: "고객서비스 헌장", slug: "charter", kind: "content" },
          { label: "서비스 이행기준", slug: "standard", kind: "content" },
          { label: "핵심서비스 이행실적", slug: "record", kind: "board" },
          { label: "기업성장응답센터", slug: "growth", kind: "content" },
          { label: "서식 다운로드", slug: "forms", kind: "board" },
          { label: "고객제안", slug: "suggest", kind: "form" },
          { label: "시설개방", slug: "facility", kind: "content" },
        ],
      },
      {
        label: "이벤트·설문", slug: "event", children: [
          { label: "설문조사", slug: "poll", kind: "form" },
          { label: "가짜석유 신고 묻고답하기", slug: "fakeqna", kind: "board" },
        ],
      },
    ],
  },
  {
    label: "알림·홍보",
    slug: "news",
    desc: "기관 소식과 보도자료, 공지사항을 신속하게 전달합니다.",
    children: [
      {
        label: "알립니다", slug: "notice", children: [
          { label: "공지사항", slug: "notice", kind: "board" },
          { label: "행사", slug: "event", kind: "board" },
          { label: "입찰·계약", slug: "bid", kind: "board" },
          { label: "업무데이터 정기 공개", slug: "data", kind: "board" },
        ],
      },
      {
        label: "홍보광장", slug: "pr", children: [
          { label: "보도자료", slug: "press", kind: "board" },
          { label: "SNS", slug: "sns", kind: "content" },
        ],
      },
      {
        label: "정보알림", slug: "media", children: [
          { label: "사보", slug: "magazine", kind: "board" },
          { label: "홍보자료", slug: "material", kind: "board" },
          { label: "홍보영상", slug: "video", kind: "board" },
        ],
      },
      {
        label: "사회공헌", slug: "csr", children: [
          { label: "오일천사봉사단", slug: "volunteer", kind: "content" },
          { label: "사회공헌활동 소식", slug: "news", kind: "board" },
        ],
      },
    ],
  },
  {
    label: "정보공개",
    slug: "disclosure",
    desc: "국민의 알 권리를 보장하기 위해 기관 정보를 투명하게 공개합니다.",
    children: [
      {
        label: "정보공개", slug: "open", children: [
          { label: "정보목록", slug: "list", kind: "board" },
          { label: "정보공개 안내", slug: "guide", kind: "content" },
          { label: "정보공개청구", slug: "request", kind: "form" },
          { label: "사업실명제", slug: "realname", kind: "board" },
        ],
      },
      {
        label: "사전정보공표목록", slug: "prior", children: [
          { label: "전체 목록", slug: "all", kind: "board" },
          { label: "국민생활", slug: "life", kind: "board" },
          { label: "예산·재산", slug: "budget", kind: "board" },
          { label: "행정감시", slug: "audit", kind: "board" },
          { label: "즐겨찾는 정보", slug: "favorite", kind: "board" },
        ],
      },
      {
        label: "경영·자율공시", slug: "management", children: [
          { label: "경영공시", slug: "public", kind: "content" },
          { label: "징계처분 결과", slug: "discipline", kind: "board" },
          { label: "소송현황", slug: "lawsuit", kind: "board" },
        ],
      },
      {
        label: "자료실", slug: "archive", children: [
          { label: "관련자료", slug: "related", kind: "board" },
          { label: "표준활동", slug: "standard", kind: "board" },
          { label: "KS표준 제·개정 예고", slug: "ks", kind: "board" },
          { label: "기타 자료", slug: "etc", kind: "board" },
        ],
      },
      {
        label: "공공데이터 개방", slug: "opendata", children: [
          { label: "공공데이터 목록", slug: "catalog", kind: "search" },
          { label: "이용안내", slug: "guide", kind: "content" },
          { label: "Open API", slug: "api", kind: "content" },
          { label: "연료품질정보", slug: "fuel", kind: "search" },
          { label: "불법행위 공표현황", slug: "illegal", kind: "board" },
        ],
      },
    ],
  },
  {
    label: "ESG경영",
    slug: "esg",
    desc: "환경과 사회적 책임, 투명한 지배구조를 위한 활동을 공개합니다.",
    children: [
      {
        label: "ESG경영", slug: "overview", children: [
          { label: "ESG경영 추진체계", slug: "system", kind: "content" },
          { label: "ESG경영 추진실적", slug: "record", kind: "content" },
          { label: "ESG경영 추진성과", slug: "result", kind: "content" },
        ],
      },
      {
        label: "E (환경)", slug: "e", children: [
          { label: "환경경영", slug: "env", kind: "content" },
          { label: "석유제품 품질관리", slug: "quality", kind: "content" },
          { label: "신재생에너지 보급확대", slug: "renewable", kind: "content" },
        ],
      },
      {
        label: "S (사회)", slug: "s", children: [
          { label: "안전보건경영", slug: "safety", kind: "content" },
          { label: "인권경영", slug: "human", kind: "content" },
          { label: "동반성장", slug: "growth", kind: "content" },
          { label: "사회공헌", slug: "csr", kind: "content" },
          { label: "기술혁신 지원", slug: "tech", kind: "content" },
        ],
      },
      {
        label: "G (지배구조)", slug: "g", children: [
          { label: "기업지배구조", slug: "governance", kind: "content" },
          { label: "감사정보 공개", slug: "audit", kind: "board" },
          { label: "윤리경영", slug: "ethics", kind: "content" },
        ],
      },
    ],
  },
  {
    label: "주요업무",
    slug: "business",
    desc: "석유제품 품질관리부터 유통관리, 시험·연구까지 주요 업무를 안내합니다.",
    children: [
      {
        label: "검사업무", slug: "inspection", children: [
          { label: "품질검사 체계", slug: "system", kind: "content" },
          { label: "품질기준", slug: "standard", kind: "content" },
          { label: "본부별 관할구역", slug: "area", kind: "content" },
        ],
      },
      {
        label: "시험업무", slug: "test", children: [
          { label: "시험항목 의의", slug: "item", kind: "content" },
          { label: "숙련도 비교시험", slug: "proficiency", kind: "content" },
          { label: "일반 의뢰시험", slug: "general", kind: "form" },
          { label: "법정 공인시험", slug: "official", kind: "content" },
        ],
      },
      {
        label: "연구업무", slug: "research", children: [
          { label: "주요 연구과제", slug: "project", kind: "content" },
          { label: "연구실적", slug: "record", kind: "board" },
        ],
      },
      {
        label: "기술·정보", slug: "tech", children: [
          { label: "기술교류협력", slug: "coop", kind: "content" },
          { label: "표준정보", slug: "standard", kind: "content" },
          { label: "석유기술정보", slug: "oil", kind: "board" },
        ],
      },
      {
        label: "유통관리", slug: "distribution", children: [
          { label: "유통검사 체계", slug: "system", kind: "content" },
          { label: "석유수입부과금 환급사무", slug: "refund", kind: "content" },
        ],
      },
      {
        label: "수급·거래 상황보고", slug: "supply", children: [
          { label: "수급·거래 상황보고", slug: "report", kind: "content" },
          { label: "전산보고 지원사업", slug: "support", kind: "content" },
          { label: "전산보고의 장점", slug: "benefit", kind: "content" },
        ],
      },
      {
        label: "수소유통전담기관", slug: "hydrogen", children: [
          { label: "수소유통전담기관", slug: "intro", kind: "content" },
        ],
      },
    ],
  },
  {
    label: "석유정보",
    slug: "oil",
    desc: "국민에게 공개되는 가격·품질·유통·공공데이터를 통합 제공합니다.",
    children: [
      {
        label: "가격정보", slug: "price", children: [
          { label: "유종별 가격", slug: "type", kind: "search" },
          { label: "지역별 가격", slug: "region", kind: "search" },
          { label: "가격 추이", slug: "trend", kind: "content" },
          { label: "지역별 가격 지도", slug: "map", kind: "geo" },
          { label: "관심 유종 알림", slug: "alert", kind: "form" },
          { label: "내 차 월 주유비 계산기", slug: "calculator", kind: "calculator" },
          { label: "AI 유가 예측 안내", slug: "ai", kind: "content" },
          { label: "장거리 주유 플래너", slug: "planner", kind: "geo" },
        ],
      },
      {
        label: "품질정보", slug: "quality", children: [
          { label: "품질검사 결과 조회", slug: "result", kind: "search" },
          { label: "연료 품질확인 서비스 신청", slug: "check", kind: "form" },
          { label: "주유소 신뢰지수", slug: "trust", kind: "search" },
          { label: "품질 기준 안내", slug: "standard", kind: "content" },
        ],
      },
      {
        label: "유통·수급 통계", slug: "distribution", children: [
          { label: "유종별 유통 현황", slug: "type", kind: "content" },
          { label: "지역별 유통 현황", slug: "region", kind: "content" },
          { label: "원유수송 공개통계", slug: "crude", kind: "content" },
          { label: "수급 브리핑", slug: "supply", kind: "content" },
          { label: "이상징후 요약 공개", slug: "anomaly", kind: "content" },
        ],
      },
      {
        label: "신고·포상", slug: "report", children: [
          { label: "신고/포상 안내", slug: "guide", kind: "form" },
          { label: "신고 처리결과 조회", slug: "status", kind: "search" },
          { label: "포상 기준 안내", slug: "reward", kind: "content" },
        ],
      },
      {
        label: "브리핑", slug: "briefing", children: [
          { label: "오늘의 석유 브리핑", slug: "today", kind: "board" },
          { label: "동향 리포트", slug: "report", kind: "board" },
          { label: "정책 알림", slug: "policy", kind: "board" },
          { label: "통계 상세", slug: "stats", kind: "content" },
        ],
      },
      {
        label: "공공데이터", slug: "data", children: [
          { label: "정보공개", slug: "disclosure", kind: "content" },
          { label: "공공데이터 목록", slug: "catalog", kind: "search" },
          { label: "Open API", slug: "api", kind: "content" },
        ],
      },
      {
        label: "이용지원", slug: "support", children: [
          { label: "통합검색", slug: "search", kind: "search" },
          { label: "챗봇", slug: "chatbot", kind: "content" },
          { label: "뉴스레터 구독관리", slug: "newsletter", kind: "form" },
          { label: "알림 수신설정", slug: "notifications", kind: "form" },
          { label: "마이페이지", slug: "mypage", kind: "content" },
        ],
      },
    ],
  },
];
