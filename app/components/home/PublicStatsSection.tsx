import { ArrowRight, Info, Ship, TriangleAlert } from "lucide-react";
import { anomalySummary, crudeTransport, distributionShare, priceTrend } from "../../data/portalMock";
import { RouteLink } from "../common/RouteLink";

const CHART_W = 320;
const CHART_H = 118;
const PAD_X = 6;
const PAD_Y = 12;

function buildPoints(values: number[], min: number, max: number) {
  const span = max - min || 1;
  const stepX = (CHART_W - PAD_X * 2) / (values.length - 1);
  return values.map((value, index) => {
    const x = PAD_X + stepX * index;
    const y = PAD_Y + (CHART_H - PAD_Y * 2) * (1 - (value - min) / span);
    return { x, y, value };
  });
}

function PriceTrendChart() {
  const all = priceTrend.series.flatMap((series) => series.values);
  const min = Math.min(...all) - 8;
  const max = Math.max(...all) + 8;

  return (
    <div className="chart-frame">
      <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} role="img" aria-label="최근 5일 휘발유·경유 평균가격 추이" preserveAspectRatio="none">
        {[0, 1, 2, 3].map((row) => (
          <line key={row} x1={0} x2={CHART_W} y1={PAD_Y + ((CHART_H - PAD_Y * 2) / 3) * row} y2={PAD_Y + ((CHART_H - PAD_Y * 2) / 3) * row} className="chart-grid-line" />
        ))}
        {priceTrend.series.map((series) => {
          const points = buildPoints(series.values, min, max);
          const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
          return (
            <g key={series.name}>
              <path d={path} fill="none" stroke={series.color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
              {points.map((point) => (
                <circle key={`${series.name}-${point.x}`} cx={point.x} cy={point.y} r={3} fill="#fff" stroke={series.color} strokeWidth={2} />
              ))}
            </g>
          );
        })}
      </svg>
      <div className="chart-axis">
        {priceTrend.labels.map((label) => <span key={label}>{label}</span>)}
      </div>
      <ul className="chart-legend">
        {priceTrend.series.map((series) => (
          <li key={series.name}>
            <i style={{ background: series.color }} aria-hidden="true" />
            {series.name}
            <strong>{series.values[series.values.length - 1].toLocaleString()}원/L</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DistributionDonut() {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="donut-frame">
      <svg viewBox="0 0 140 140" role="img" aria-label="유종별 유통량 비중">
        <g transform="rotate(-90 70 70)">
          <circle cx={70} cy={70} r={radius} fill="none" stroke="var(--line)" strokeWidth={17} />
          {distributionShare.map((item) => {
            const length = (item.value / 100) * circumference;
            const dash = `${length} ${circumference - length}`;
            const element = (
              <circle
                key={item.name}
                cx={70}
                cy={70}
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={17}
                strokeDasharray={dash}
                strokeDashoffset={-offset}
              />
            );
            offset += length;
            return element;
          })}
        </g>
        <text x={70} y={66} className="donut-value">8,420</text>
        <text x={70} y={82} className="donut-unit">천 kL / 월</text>
      </svg>
      <ul className="donut-legend">
        {distributionShare.map((item) => (
          <li key={item.name}>
            <i style={{ background: item.color }} aria-hidden="true" />
            <span>{item.name}</span>
            <strong>{item.value}%</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PublicStatsSection() {
  return (
    <section className="public-stats-wrap" aria-labelledby="public-stats-title">
      <div className="portal-container home-section">
        <div className="section-heading">
          <div>
            <span>OPEN STATISTICS</span>
            <h2 id="public-stats-title">공개 가능한 석유정보 통계</h2>
          </div>
          <p>집계 통계 중심으로 제공하며, 비공개 대상 정보는 포함하지 않습니다.</p>
        </div>

        <div className="stats-grid">
          <article className="stats-card stats-card-wide">
            <header className="stats-card-head">
              <div>
                <h3>가격 추이 요약</h3>
                <p>최근 5일 유종별 전국 평균 판매가격</p>
              </div>
              <span className="stats-badge">{priceTrend.updatedAt}</span>
            </header>
            <PriceTrendChart />
            <RouteLink to="/oil/price/type" className="stats-more">가격정보 자세히 보기 <ArrowRight size={15} /></RouteLink>
          </article>

          <article className="stats-card">
            <header className="stats-card-head">
              <div>
                <h3>유통량 통계 요약</h3>
                <p>유종별 월간 유통 비중</p>
              </div>
            </header>
            <DistributionDonut />
            <RouteLink to="/oil/distribution/type" className="stats-more">유통통계 보기 <ArrowRight size={15} /></RouteLink>
          </article>

          <article className="stats-card">
            <header className="stats-card-head">
              <div>
                <h3><Ship size={17} aria-hidden="true" /> 원유수송 공개통계</h3>
                <p>집계 기준 공개 항목만 제공</p>
              </div>
              <span className="stats-badge">{crudeTransport.updatedAt}</span>
            </header>
            <dl className="transport-stats">
              {crudeTransport.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}<em>{stat.unit}</em></dd>
                </div>
              ))}
            </dl>
            <div className="transport-origins">
              <strong>주요 도입국</strong>
              {crudeTransport.origins.map((origin) => (
                <div className="origin-row" key={origin.country}>
                  <span>{origin.country}</span>
                  <div className="origin-bar" aria-hidden="true"><i style={{ width: `${origin.share}%` }} /></div>
                  <em>{origin.share}%</em>
                </div>
              ))}
            </div>
            <RouteLink to="/oil/distribution/type" className="stats-more">원유수송 통계 보기 <ArrowRight size={15} /></RouteLink>
          </article>

          <article className="stats-card">
            <header className="stats-card-head">
              <div>
                <h3><TriangleAlert size={17} aria-hidden="true" /> 이상징후 요약 공개</h3>
                <p>공개 가능 요약 {anomalySummary.openCount}건</p>
              </div>
            </header>
            <ul className="anomaly-list">
              {anomalySummary.items.map((item) => (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.note}</p>
                  </div>
                  <span className="anomaly-level">{item.level}</span>
                </li>
              ))}
            </ul>
            <p className="anomaly-restrict">
              <Info size={14} aria-hidden="true" />
              <span>{anomalySummary.restrictions.join(" · ")}는 공개하지 않습니다.</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
