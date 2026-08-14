import { useMemo, useState } from "react";

const AVERAGE_PRICE = 1685;

export function CalculatorView({ title }: { title: string }) {
  const [efficiency, setEfficiency] = useState("12.5");
  const [distance, setDistance] = useState("1200");

  const monthlyCost = useMemo(() => {
    const eff = Number(efficiency);
    const dist = Number(distance);
    if (!eff || !dist) return null;
    return Math.round((dist / eff) * AVERAGE_PRICE);
  }, [efficiency, distance]);

  return (
    <div className="calculator-view">
      <p className="content-lead">
        차종 연비와 월 주행거리를 입력하면 예상 월 주유비를 계산합니다. 실제 저장·알림 기능 제공 여부는 협의가 필요합니다.
      </p>

      <form className="calculator-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          <span>연비 (km/L)</span>
          <input
            value={efficiency}
            onChange={(event) => setEfficiency(event.target.value)}
            inputMode="decimal"
            placeholder="예: 12.5"
          />
        </label>
        <label>
          <span>월 주행거리 (km)</span>
          <input
            value={distance}
            onChange={(event) => setDistance(event.target.value)}
            inputMode="numeric"
            placeholder="예: 1200"
          />
        </label>
        <div className="calculator-result">
          <span>{title}</span>
          <strong>{monthlyCost ? `${monthlyCost.toLocaleString()}원` : "-"}</strong>
        </div>
      </form>

      <p className="content-note">
        휘발유 평균가 시안 {AVERAGE_PRICE.toLocaleString()}원/L 기준의 참고용 계산입니다.
        실제 적용 시 유종 선택, 오피넷 가격 연계, 개인정보 저장 여부를 별도 확정해야 합니다.
      </p>
    </div>
  );
}
