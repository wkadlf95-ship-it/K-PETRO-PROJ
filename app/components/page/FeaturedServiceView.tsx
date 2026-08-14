import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Fuel,
  Info,
  MapPinned,
  Medal,
  Search,
  ShieldCheck,
  Siren,
  TrendingDown,
} from "lucide-react";
import { RouteLink } from "../common/RouteLink";

type FeaturedKind = "price" | "quality" | "report" | "briefing";

const pageMeta: Record<FeaturedKind, {
  eyebrow: string;
  title: string;
  description: string;
  notice: string;
}> = {
  price: {
    eyebrow: "PRICE INFORMATION",
    title: "유가·가격정보 조회",
    description: "오피넷 등 공개 가능한 가격 데이터를 기준으로 유종별·지역별 가격 흐름을 한 화면에서 확인하는 서비스입니다.",
    notice: "가격 데이터는 공개 API 연계 범위 확정 후 실시간/일 단위 갱신 기준을 분리합니다.",
  },
  quality: {
    eyebrow: "QUALITY DISCLOSURE",
    title: "품질검사 결과 조회",
    description: "석유관리원이 공개 가능한 품질검사 결과를 사업장·지역·검사유형 기준으로 조회할 수 있도록 구성합니다.",
    notice: "개별 검사 세부값은 현행 공개 범위를 기준으로 제공하고, 비공개 항목은 집계형으로 표출합니다.",
  },
  report: {
    eyebrow: "REPORT & REWARD",
    title: "불법석유 신고·포상 안내",
    description: "가짜석유, 정량미달, 시장 교란 의심 사례를 국민이 쉽게 확인하고 신고 절차와 포상 기준을 안내받는 화면입니다.",
    notice: "신고 접수·처리결과 공개 범위는 현행 민원/신고 운영 기준과 연계 범위를 확인한 뒤 확정합니다.",
  },
  briefing: {
    eyebrow: "OIL BRIEFING",
    title: "석유 브리핑·통계 상세",
    description: "국제유가, 국내 가격, 수급·유통 동향, 공개통계를 요약해 국민이 이해하기 쉬운 브리핑 형태로 제공합니다.",
    notice: "브리핑 문구와 갱신 주기는 콘텐츠 운영부서 확인 후 확정합니다.",
  },
};

const priceRows = [
  ["휘발유", "1,685원/L", "전일 대비 -2원", "하락"],
  ["경유", "1,548원/L", "전일 대비 -1원", "하락"],
  ["LPG", "982원/L", "전일 대비 0원", "보합"],
];

const qualityRows = [
  ["서울", "일반주유소", "적합", "2026.08.12"],
  ["경기", "셀프주유소", "적합", "2026.08.11"],
  ["인천", "대리점", "확인 필요", "2026.08.10"],
];

const briefingRows = [
  ["국제유가", "중동 리스크 완화로 단기 변동폭 축소", "확인 중"],
  ["국내가격", "휘발유·경유 평균가격 소폭 하락", "공개 가능"],
  ["수급동향", "입항 예정 물량과 유통가능량 중심 모니터링 필요", "협의 필요"],
];

function PageHero({ kind }: { kind: FeaturedKind }) {
  const meta = pageMeta[kind];
  return (
    <section className={`featured__hero featured-hero-${kind}`}>
      <div>
        <span>{meta.eyebrow}</span>
        <h3>{meta.title}</h3>
        <p>{meta.description}</p>
      </div>
      <div className="featured__hero-panel">
        <strong>서비스 설계 기준</strong>
        <p>{meta.notice}</p>
      </div>
    </section>
  );
}

function FilterPanel({ type }: { type: "price" | "quality" }) {
  return (
    <section className="featured__panel">
      <div className="featured__panel-head">
        <h3>조회 조건</h3>
        <p>화면명세 작성 시 검색조건·출력정보·예외처리 기준으로 전환할 수 있는 구조입니다.</p>
      </div>
      <div className="featured__filter-grid">
        <label>
          <span>지역</span>
          <select defaultValue="">
            <option value="">전체</option>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option>
            <option>부산</option>
          </select>
        </label>
        <label>
          <span>{type === "price" ? "유종" : "검사유형"}</span>
          <select defaultValue="">
            <option value="">전체</option>
            {type === "price" ? (
              <>
                <option>휘발유</option>
                <option>경유</option>
                <option>LPG</option>
              </>
            ) : (
              <>
                <option>품질검사</option>
                <option>유통검사</option>
                <option>소비자 신고 검사</option>
              </>
            )}
          </select>
        </label>
        <label>
          <span>기간</span>
          <input type="text" defaultValue="최근 30일" />
        </label>
        <button type="button"><Search size={16} /> 조회</button>
      </div>
    </section>
  );
}

function PricePage() {
  return (
    <div className="featured__service">
      <PageHero kind="price" />
      <div className="featured__summary-grid">
        <article><Fuel size={22} /><span>휘발유 평균</span><strong>1,685원/L</strong><em>전일 대비 -2원</em></article>
        <article><TrendingDown size={22} /><span>경유 평균</span><strong>1,548원/L</strong><em>전일 대비 -1원</em></article>
        <article><MapPinned size={22} /><span>지역 최저가</span><strong>1,632원/L</strong><em>서울 기준 예시</em></article>
      </div>
      <FilterPanel type="price" />
      <section className="featured__grid--two">
        <article className="featured__panel">
          <div className="featured__panel-head">
            <h3>유종별 가격 현황</h3>
            <p>오피넷 연계 가능 항목 중심의 가격 조회 테이블입니다.</p>
          </div>
          <table className="featured__table">
            <thead><tr><th>유종</th><th>평균가격</th><th>변동</th><th>상태</th></tr></thead>
            <tbody>{priceRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </article>
        <article className="featured__panel">
          <div className="featured__panel-head">
            <h3>가격 추이 차트 영역</h3>
            <p>실제 구현 시 기간별 라인차트와 지역 비교 필터를 배치합니다.</p>
          </div>
          {/* 막대 높이는 components.css 의 .mock-chart i:nth-child(n) 이 정한다 */}
          <div className="mock-chart" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
          </div>
        </article>
      </section>
    </div>
  );
}

function QualityPage() {
  return (
    <div className="featured__service">
      <PageHero kind="quality" />
      <div className="featured__summary-grid">
        <article><ShieldCheck size={22} /><span>최근 검사 적합률</span><strong>98.7%</strong><em>공개 가능 범위 기준</em></article>
        <article><ClipboardCheck size={22} /><span>최근 검사 건수</span><strong>1,248건</strong><em>예시 데이터</em></article>
        <article><Info size={22} /><span>공개 기준</span><strong>현행 유지</strong><em>세부값은 협의 필요</em></article>
      </div>
      <FilterPanel type="quality" />
      <section className="featured__panel">
        <div className="featured__panel-head">
          <h3>품질검사 결과 목록</h3>
          <p>사업장 상세 민감정보는 현행 공개 기준에 맞춰 비식별/요약 정보 중심으로 표출합니다.</p>
        </div>
        <table className="featured__table">
          <thead><tr><th>지역</th><th>대상</th><th>검사결과</th><th>검사일</th></tr></thead>
          <tbody>
            {qualityRows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => <td key={cell}><span className={index === 2 ? "soft-badge" : ""}>{cell}</span></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function ReportPage() {
  return (
    <div className="featured__service">
      <PageHero kind="report" />
      <section className="report-flow">
        {[
          ["01", "신고유형 선택", "가짜석유, 정량미달, 가격·시장 교란 의심 유형을 선택합니다."],
          ["02", "신고내용 작성", "사업장 정보, 위치, 증빙자료, 신고 내용을 입력합니다."],
          ["03", "담당부서 검토", "관할·검사 필요 여부를 확인하고 내부 업무로 배분합니다."],
          ["04", "결과 안내", "공개 가능한 범위 내에서 처리상태와 포상 안내를 제공합니다."],
        ].map(([no, title, desc]) => (
          <article key={no}>
            <span>{no}</span>
            <strong>{title}</strong>
            <p>{desc}</p>
          </article>
        ))}
      </section>
      <section className="featured__grid--two">
        <article className="featured__panel">
          <div className="featured__panel-head">
            <h3>신고 대상 안내</h3>
            <p>국민이 신고 가능 여부를 빠르게 판단할 수 있도록 사례 중심으로 배치합니다.</p>
          </div>
          <ul className="featured__list">
            <li><Siren size={17} /> 가짜석유 의심 제품 판매</li>
            <li><AlertTriangle size={17} /> 정량미달 의심 주유</li>
            <li><Bell size={17} /> 사재기·고가판매 등 시장 교란 의심</li>
          </ul>
        </article>
        <article className="featured__panel reward-card">
          <Medal size={34} />
          <h3>신고 포상 안내</h3>
          <p>포상 대상, 지급 기준, 처리 절차는 현행 운영 기준을 유지하되 신규 포털에서는 한 화면에서 확인 가능하도록 정리합니다.</p>
          <RouteLink to="/service/report/consumer">신고 접수 화면으로 이동 <ArrowRight size={15} /></RouteLink>
        </article>
      </section>
    </div>
  );
}

function BriefingPage() {
  return (
    <div className="featured__service">
      <PageHero kind="briefing" />
      <section className="briefing-layout">
        <article className="briefing-main">
          <span>2026.08.14 기준</span>
          <h3>오늘의 석유 브리핑</h3>
          <ol>
            <li>국제유가는 지정학적 리스크와 환율 변동에 따라 단기 변동성이 유지됩니다.</li>
            <li>국내 유종별 평균가격은 전일 대비 소폭 하락 흐름을 보입니다.</li>
            <li>수급 관련 정보는 공개 가능한 집계 기준으로 제공하고, 세부 민감정보는 내부 관제에서 관리합니다.</li>
          </ol>
        </article>
        <aside className="featured__panel">
          <div className="featured__panel-head">
            <h3>제공 데이터</h3>
            <p>브리핑에 포함될 수 있는 공개형 데이터 후보입니다.</p>
          </div>
          <ul className="featured__list compact">
            <li><BarChart3 size={16} /> 국제유가·환율 요약</li>
            <li><Fuel size={16} /> 국내 유종별 가격</li>
            <li><FileText size={16} /> 정책·공지 요약</li>
            <li><Download size={16} /> 통계 다운로드</li>
          </ul>
        </aside>
      </section>
      <section className="featured__panel">
        <div className="featured__panel-head">
          <h3>통계 상세 후보</h3>
          <p>대국민 공개 가능 범위가 확정된 항목부터 순차 적용합니다.</p>
        </div>
        <table className="featured__table">
          <thead><tr><th>구분</th><th>요약 내용</th><th>공개 상태</th></tr></thead>
          <tbody>{briefingRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </section>
    </div>
  );
}

export function getFeaturedServiceKind(path: string): FeaturedKind | null {
  // 가격 화면은 포틀릿(PricePortletPage)이 담당하므로 여기서 가로채지 않는다
  if (path === "/oil/quality/result") return "quality";
  if (path === "/oil/report/guide") return "report";
  if (path === "/oil/briefing/today") return "briefing";
  return null;
}

export function FeaturedServiceView({ kind }: { kind: FeaturedKind }) {
  if (kind === "price") return <PricePage />;
  if (kind === "quality") return <QualityPage />;
  if (kind === "report") return <ReportPage />;
  return <BriefingPage />;
}
