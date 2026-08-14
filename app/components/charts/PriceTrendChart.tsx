import { priceTrend } from "../../data/statsMock";

const WIDTH = 320;
const HEIGHT = 118;
const PAD_X = 6;
const PAD_Y = 12;
const GRID_ROWS = 4;

function buildPoints(values: number[], min: number, max: number) {
  const span = max - min || 1;
  const stepX = (WIDTH - PAD_X * 2) / (values.length - 1);
  return values.map((value, index) => ({
    x: PAD_X + stepX * index,
    y: PAD_Y + (HEIGHT - PAD_Y * 2) * (1 - (value - min) / span),
  }));
}

function toPath(points: { x: number; y: number }[]) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

export function PriceTrendChart() {
  const all = priceTrend.series.flatMap((series) => series.values);
  const min = Math.min(...all) - 8;
  const max = Math.max(...all) + 8;

  return (
    <div className="chart-frame">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="최근 5일 휘발유·경유 평균가격 추이"
        preserveAspectRatio="none"
      >
        {Array.from({ length: GRID_ROWS }, (_, row) => {
          const y = PAD_Y + ((HEIGHT - PAD_Y * 2) / (GRID_ROWS - 1)) * row;
          return <line key={row} x1={0} x2={WIDTH} y1={y} y2={y} className="chart-grid-line" />;
        })}
        {priceTrend.series.map((series) => {
          const points = buildPoints(series.values, min, max);
          return (
            <g key={series.name}>
              <path d={toPath(points)} fill="none" stroke={series.color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
              {points.map((point) => (
                <circle key={point.x} cx={point.x} cy={point.y} r={3} fill="#fff" stroke={series.color} strokeWidth={2} />
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
