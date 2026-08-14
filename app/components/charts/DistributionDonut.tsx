import { distributionShare, distributionTotal } from "../../data/statsMock";

const RADIUS = 52;
const STROKE = 17;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function DistributionDonut() {
  // 각 조각의 시작 위치를 누적 길이로 계산합니다.
  let offset = 0;
  const arcs = distributionShare.map((item) => {
    const length = (item.value / 100) * CIRCUMFERENCE;
    const arc = { ...item, length, offset };
    offset += length;
    return arc;
  });

  return (
    <div className="donut-frame">
      <svg viewBox="0 0 140 140" role="img" aria-label="유종별 유통량 비중">
        <g transform="rotate(-90 70 70)">
          <circle cx={70} cy={70} r={RADIUS} fill="none" stroke="var(--line)" strokeWidth={STROKE} />
          {arcs.map((arc) => (
            <circle
              key={arc.name}
              cx={70}
              cy={70}
              r={RADIUS}
              fill="none"
              stroke={arc.color}
              strokeWidth={STROKE}
              strokeDasharray={`${arc.length} ${CIRCUMFERENCE - arc.length}`}
              strokeDashoffset={-arc.offset}
            />
          ))}
        </g>
        <text x={70} y={66} className="donut-value">{distributionTotal.value}</text>
        <text x={70} y={82} className="donut-unit">{distributionTotal.unit}</text>
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
