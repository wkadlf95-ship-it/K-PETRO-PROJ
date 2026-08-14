import { ArrowRight, ChartPie, Fuel, Minus, Siren, TrendingDown, TrendingUp, type LucideIcon } from "lucide-react";
import { summaryCards } from "../../data/homeMock";
import { RouteLink } from "../common/RouteLink";

const cardIcons: Record<string, LucideIcon> = {
  가격정보: Fuel,
  품질정보: ChartPie,
  유통현황: ChartPie,
  "신고/포상": Siren,
};

const trendIcons = { up: TrendingUp, down: TrendingDown, flat: Minus };

export function SummaryCards() {
  return (
    <section className="summary" aria-labelledby="summary-title">
      <div className="portal-container home-section">
        <div className="section-heading">
          <div>
            <span>KEY INFORMATION</span>
            <h2 id="summary-title">핵심 석유정보 요약</h2>
          </div>
          <p>공개 가능한 주요 지표를 분야별로 요약해 제공합니다.</p>
        </div>
        <div className="summary__grid">
          {summaryCards.map((card) => {
            const Icon = cardIcons[card.title] ?? Fuel;
            const TrendIcon = trendIcons[card.trend.direction];
            return (
              <RouteLink to={card.path} className="summary-card" key={card.title}>
                <div className="summary-card__top">
                  <span className={`summary-card__icon summary-card__icon--${card.tone}`}><Icon size={20} strokeWidth={1.9} /></span>
                  <strong>{card.title}</strong>
                  <ArrowRight size={16} className="summary-card__arrow" aria-hidden="true" />
                </div>
                <p className="summary-card__desc">{card.description}</p>
                <div className="summary-card__value">
                  <em>{card.subValue}</em>
                  <strong>{card.value}</strong>
                  <span className={`summary-card__trend is-${card.trend.direction}`}>
                    <TrendIcon size={13} aria-hidden="true" /> {card.trend.text}
                  </span>
                </div>
                <dl className="summary-card__metrics">
                  {card.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
