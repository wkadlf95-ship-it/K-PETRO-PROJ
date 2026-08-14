export type PageDefinition = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  tabs: string[];
  stats: { label: string; value: string; note: string }[];
  services: { title: string; description: string; action: string }[];
  notice: string;
};

export const pageDefinitions: PageDefinition[] = [
  {
    path: "/disclosure", eyebrow: "OPEN INFORMATION", title: "정보공개", description: "국민의 알 권리를 보장하기 위한 기관 정보와 공개 가능한 석유 데이터를 제공합니다.",
    tabs: ["정보공개 안내", "법정 공표", "정보공개청구", "경영공시", "감사정보"],
    stats: [{ label: "사전정보 공표", value: "126건", note: "정기 업데이트" }, { label: "공공데이터", value: "38종", note: "파일·오픈API" }, { label: "평균 처리기간", value: "7.2일", note: "정보공개청구 기준" }],
    services: [{ title: "정보공개 목록", description: "분야별 사전공표 정보를 한 번에 확인합니다.", action: "목록 보기" }, { title: "정보공개청구", description: "공개를 원하는 기관 정보를 온라인으로 청구합니다.", action: "청구하기" }, { title: "경영공시·감사정보", description: "경영 현황과 감사 결과를 투명하게 공개합니다.", action: "확인하기" }],
    notice: "개별 사업자 정보와 내부 판단 근거 등 비공개 대상 정보는 제공되지 않습니다.",
  },
  {
    path: "/price", eyebrow: "PRICE INFORMATION", title: "가격정보", description: "유종별·지역별 석유제품 가격 흐름을 쉽고 빠르게 비교합니다.",
    tabs: ["오늘의 가격", "가격 추이", "지역별 가격", "가격 지도"],
    stats: [{ label: "휘발유 평균", value: "1,685원/L", note: "전일 대비 2원 하락" }, { label: "경유 평균", value: "1,548원/L", note: "전일 대비 1원 상승" }, { label: "LPG 평균", value: "982원/L", note: "전일과 동일" }],
    services: [{ title: "유종별 가격 추이", description: "기간과 유종을 선택해 평균 가격 변화를 확인합니다.", action: "추이 조회" }, { title: "지역별 가격 비교", description: "시·도 및 시·군·구 단위 평균 가격을 비교합니다.", action: "지역 선택" }, { title: "가격 지도", description: "지도에서 지역별 가격 수준을 색상으로 확인합니다.", action: "지도 열기" }],
    notice: "표시 가격은 공개 집계 자료를 활용한 시안용 예시 데이터입니다.",
  },
  {
    path: "/quality", eyebrow: "QUALITY INFORMATION", title: "품질정보", description: "석유제품 품질검사 결과와 품질기준을 공개 범위 안에서 제공합니다.",
    tabs: ["검사결과 공개", "품질 기준", "품질확인 서비스", "검사 통계"],
    stats: [{ label: "최근 공개 검사", value: "1,248건", note: "최근 30일" }, { label: "적합률", value: "98.7%", note: "공개 대상 기준" }, { label: "검사 지역", value: "17개 시·도", note: "전국 집계" }],
    services: [{ title: "품질검사 결과 조회", description: "기간·지역·제품별 공개 검사 결과를 찾습니다.", action: "결과 조회" }, { title: "석유제품 품질기준", description: "제품별 법정 품질기준과 관련 자료를 확인합니다.", action: "기준 확인" }, { title: "연료 품질확인 신청", description: "차량 연료의 품질확인 서비스를 신청합니다.", action: "서비스 신청" }],
    notice: "검사 대상자의 개인정보와 조사 중인 세부 내용은 공개하지 않습니다.",
  },
  {
    path: "/distribution", eyebrow: "DISTRIBUTION STATISTICS", title: "유통통계", description: "석유제품 유통량과 원유수송 현황을 집계 통계 중심으로 살펴봅니다.",
    tabs: ["유통량 통계", "지역별 통계", "원유수송", "이상징후 요약"],
    stats: [{ label: "월간 유통량", value: "8,420천 kL", note: "전월 대비 +2.1%" }, { label: "입항 예정", value: "12척", note: "공개 집계 기준" }, { label: "확보 예정", value: "1,240천 배럴", note: "원유수송 공개통계" }],
    services: [{ title: "유종별 유통 통계", description: "휘발유·경유·등유·LPG 유통 비중을 확인합니다.", action: "통계 보기" }, { title: "원유수송 공개통계", description: "입항 예정과 확보 예정 물량을 집계 형태로 제공합니다.", action: "현황 보기" }, { title: "이상징후 요약", description: "공개 가능한 이상징후 건수와 조치 현황을 제공합니다.", action: "요약 보기" }],
    notice: "개별 선박 실시간 위치, 개별 사업자 상세정보, 내부 판단 근거는 공개하지 않습니다.",
  },
  {
    path: "/report", eyebrow: "REPORT & REWARD", title: "신고/포상", description: "불법 석유 유통행위를 안전하게 신고하고 처리현황과 포상 제도를 확인합니다.",
    tabs: ["신고 안내", "온라인 신고", "처리결과 조회", "포상금 안내"],
    stats: [{ label: "신고 접수", value: "24건", note: "이번 달" }, { label: "처리 완료", value: "18건", note: "이번 달" }, { label: "상담 운영", value: "평일 09–18시", note: "고객센터 기준" }],
    services: [{ title: "불법행위 신고", description: "가짜석유·정량미달 등 불법행위를 신고합니다.", action: "신고하기" }, { title: "처리결과 조회", description: "접수번호로 신고 처리 단계를 확인합니다.", action: "결과 조회" }, { title: "신고포상금 안내", description: "포상 대상과 지급 기준, 절차를 안내합니다.", action: "제도 확인" }],
    notice: "신고자 정보는 관련 법령과 내부 절차에 따라 안전하게 보호됩니다.",
  },
  {
    path: "/public-data", eyebrow: "OPEN DATA", title: "공공데이터", description: "석유 관련 공공데이터를 파일과 오픈API 형태로 검색하고 활용합니다.",
    tabs: ["데이터 목록", "오픈API", "활용 사례", "제공 신청"],
    stats: [{ label: "개방 데이터", value: "38종", note: "파일·API 합계" }, { label: "이번 달 다운로드", value: "2,864회", note: "시안용 데이터" }, { label: "신규 데이터", value: "3종", note: "최근 90일" }],
    services: [{ title: "공공데이터 찾기", description: "주제와 제공 형식으로 개방 데이터를 검색합니다.", action: "데이터 검색" }, { title: "오픈API 이용안내", description: "인증키와 호출 방법, 데이터 명세를 확인합니다.", action: "API 안내" }, { title: "데이터 제공 신청", description: "필요한 공공데이터의 추가 개방을 요청합니다.", action: "신청하기" }],
    notice: "데이터별 이용조건과 갱신주기를 확인한 뒤 활용해 주세요.",
  },
  {
    path: "/briefing", eyebrow: "NEWS & BRIEFING", title: "브리핑", description: "국제유가, 국내 수급, 정책 변화를 이해하기 쉽게 정리해 제공합니다.",
    tabs: ["오늘의 브리핑", "동향 리포트", "공지사항", "보도자료"],
    stats: [{ label: "오늘의 브리핑", value: "4건", note: "2026.08.14" }, { label: "정책 리포트", value: "12건", note: "이번 달" }, { label: "새 공지", value: "3건", note: "최근 7일" }],
    services: [{ title: "국제유가 동향", description: "주요 국제유가 지표와 변동 요인을 요약합니다.", action: "브리핑 보기" }, { title: "국내 유가·수급 동향", description: "국내 가격과 석유제품 수급 흐름을 정리합니다.", action: "동향 보기" }, { title: "정책·제도 소식", description: "유류세와 석유 관련 정책 변화를 안내합니다.", action: "소식 보기" }],
    notice: "브리핑의 수치와 날짜는 화면 구성을 위한 예시 데이터입니다.",
  },
  {
    path: "/support", eyebrow: "CUSTOMER SUPPORT", title: "고객지원", description: "민원, 자주 묻는 질문, 사업자 지원 서비스를 한곳에서 안내합니다.",
    tabs: ["민원 신청", "자주 묻는 질문", "사업자 지원", "고객센터"],
    stats: [{ label: "상담전화", value: "1588-5166", note: "평일 09–18시" }, { label: "자주 묻는 질문", value: "64건", note: "분야별 안내" }, { label: "온라인 민원", value: "24시간", note: "상시 접수" }],
    services: [{ title: "온라인 민원", description: "석유정보와 기관 업무 관련 민원을 신청합니다.", action: "민원 신청" }, { title: "자주 묻는 질문", description: "분야별로 자주 접수되는 질문과 답변을 찾습니다.", action: "FAQ 보기" }, { title: "사업자 지원", description: "검사·보고·교육 등 사업자 대상 업무를 안내합니다.", action: "지원 보기" }],
    notice: "긴급한 불법 유통 신고는 신고/포상 메뉴를 이용해 주세요.",
  },
  {
    path: "/about", eyebrow: "ABOUT K-PETRO", title: "K-PETRO 소개", description: "건전한 석유 유통질서와 국민 안전을 지키는 한국석유관리원을 소개합니다.",
    tabs: ["기관 소개", "인사말", "조직 안내", "찾아오시는 길"],
    stats: [{ label: "설립", value: "1983년", note: "석유 품질·유통 전문기관" }, { label: "지역본부", value: "10개", note: "전국 네트워크" }, { label: "핵심가치", value: "공정·신뢰", note: "국민 중심 서비스" }],
    services: [{ title: "기관 소개", description: "설립 목적과 주요 역할을 안내합니다.", action: "자세히 보기" }, { title: "조직·직원 안내", description: "담당 업무와 연락처를 확인합니다.", action: "조직 보기" }, { title: "지역본부 안내", description: "가까운 지역본부 위치와 교통편을 찾습니다.", action: "위치 보기" }],
    notice: "기관 소개 세부 콘텐츠는 대표 홈페이지와 연계할 예정입니다.",
  },
  {
    path: "/esg", eyebrow: "ESG MANAGEMENT", title: "ESG경영", description: "환경과 사회적 책임, 투명한 경영을 위한 K-PETRO의 활동을 공개합니다.",
    tabs: ["ESG 전략", "환경경영", "사회책임", "윤리·인권경영"],
    stats: [{ label: "ESG 과제", value: "18개", note: "연간 추진과제" }, { label: "사회공헌", value: "32회", note: "연간 활동" }, { label: "윤리교육", value: "100%", note: "임직원 이수율" }],
    services: [{ title: "ESG 전략체계", description: "비전과 추진목표, 핵심과제를 소개합니다.", action: "전략 보기" }, { title: "지속가능경영 활동", description: "환경·사회 분야의 주요 성과를 확인합니다.", action: "성과 보기" }, { title: "윤리·인권경영", description: "윤리규범과 인권경영 정책을 안내합니다.", action: "정책 보기" }],
    notice: "공시 자료와 최신 실적은 추후 대표 홈페이지 데이터와 연계합니다.",
  },
  {
    path: "/business", eyebrow: "OUR BUSINESS", title: "주요업무", description: "석유제품 품질관리부터 유통관리, 연구개발까지 주요 업무를 안내합니다.",
    tabs: ["품질관리", "유통관리", "시험·연구", "미래에너지"],
    stats: [{ label: "품질관리", value: "전국 단위", note: "검사·시험" }, { label: "유통관리", value: "상시 운영", note: "시장 모니터링" }, { label: "시험 역량", value: "전문기관", note: "연구·표준화" }],
    services: [{ title: "석유 품질관리", description: "석유제품 검사와 품질관리 업무를 소개합니다.", action: "업무 보기" }, { title: "석유 유통관리", description: "불법 유통 예방과 시장관리 체계를 안내합니다.", action: "업무 보기" }, { title: "시험·연구 및 미래에너지", description: "시험분석과 친환경 미래에너지 사업을 소개합니다.", action: "업무 보기" }],
    notice: "사업자용 신고·검사 시스템은 자주 찾는 정보에서 바로 이동할 수 있습니다.",
  },
];

