import { ArrowRight, Info, Ship, TriangleAlert } from "lucide-react";
import { anomalySummary, crudeTransport, priceTrend } from "../../data/statsMock";
import { DistributionDonut } from "../charts/DistributionDonut";
import { PriceTrendChart } from "../charts/PriceTrendChart";
import { RouteLink } from "../common/RouteLink";

function StatsCard({
  title, note, badge, wide, more, children,
}: {
  title: React.ReactNode;
  note: string;
  badge?: string;
  wide?: boolean;
  more?: { label: string; path: string };
  children: React.ReactNode;
}) {
  return (
    <article className={`stats-card${wide ? " stats-card-wide" : ""}`}>
      <header className="stats-card__head">
        <div>
          <h3>{title}</h3>
          <p>{note}</p>
        </div>
        {badge && <span className="stats-card__badge">{badge}</span>}
      </header>
      {children}
      {more && (
        <RouteLink to={more.path} className="stats-card__more">{more.label} <ArrowRight size={15} /></RouteLink>
      )}
    </article>
  );
}

function CrudeTransportCard() {
  return (
    <StatsCard
      title={<><Ship size={17} aria-hidden="true" /> 원유수송 공개통계</>}
      note="집계 기준 공개 항목만 제공"
      badge={crudeTransport.updatedAt}
      more={{ label: "원유수송 통계 보기", path: "/oil/distribution/crude" }}
    >
      <dl className="transport__stats">
        {crudeTransport.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}<em>{stat.unit}</em></dd>
          </div>
        ))}
      </dl>
      <div className="transport__origins">
        <strong>주요 도입국</strong>
        {crudeTransport.origins.map((origin) => (
          <div className="origin__row" key={origin.country}>
            <span>{origin.country}</span>
            <div className="origin__bar" aria-hidden="true"><i style={{ width: `${origin.share}%` }} /></div>
            <em>{origin.share}%</em>
          </div>
        ))}
      </div>
    </StatsCard>
  );
}

function AnomalyCard() {
  return (
    <StatsCard
      title={<><TriangleAlert size={17} aria-hidden="true" /> 이상징후 요약 공개</>}
      note={`공개 가능 요약 ${anomalySummary.openCount}건`}
    >
      <ul className="anomaly__list">
        {anomalySummary.items.map((item) => (
          <li key={item.title}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.note}</p>
            </div>
            <span className="anomaly__level">{item.level}</span>
          </li>
        ))}
      </ul>
      <p className="anomaly__restrict">
        <Info size={14} aria-hidden="true" />
        <span>{anomalySummary.restrictions.join(" · ")}는 공개하지 않습니다.</span>
      </p>
    </StatsCard>
  );
}

export function PublicStatsSection() {
  return (
    <section className="public-stats" aria-labelledby="public-stats-title">
      <div className="portal-container home-section">
        <div className="section-heading">
          <div>
            <span>OPEN STATISTICS</span>
            <h2 id="public-stats-title">공개 석유통계</h2>
          </div>
          <p>집계 통계 중심으로 제공하며, 비공개 대상 정보는 포함하지 않습니다.</p>
        </div>

        <div className="stats__grid">
          <StatsCard
            wide
            title="가격 추이"
            note="수신 데이터 기준 최근 5일 전국 평균 판매가격"
            badge={priceTrend.updatedAt}
            more={{ label: "가격정보 자세히 보기", path: "/oil/price/type" }}
          >
            <PriceTrendChart data={priceTrend} />
          </StatsCard>

          <StatsCard
            title="유통 현황"
            note="유종별 월간 유통 비중을 차트로 제공"
            more={{ label: "유통 현황 보기", path: "/oil/distribution/type" }}
          >
            <DistributionDonut />
          </StatsCard>

          <CrudeTransportCard />
          <AnomalyCard />
        </div>
      </div>
    </section>
  );
}
