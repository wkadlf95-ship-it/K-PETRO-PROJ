import { useState } from "react";
import { Filter } from "lucide-react";
import { priceFilters, priceKpis } from "../data/portletMock";
import { Delta } from "./widgets/priceWidgets";
import { defaultPriceLayout } from "./layoutStore";
import { PortletGrid } from "./PortletGrid";

/**
 * 가격 화면. 사용자가 위젯을 끌어 옮길 수 있다.
 *
 * 요약 카드와 조건 상자는 격자 밖에 있다. 위젯으로 두면
 *  - 사용자가 그 상자를 빼는 순간 시세가 화면에서 사라지고
 *  - 조건도 상자마다 따로 놀아 한 화면에서 서로 다른 유종을 보게 된다.
 */
export function PricePortletPage({ pageKey }: { pageKey: string }) {
  const [product, setProduct] = useState(priceFilters.products[0]);
  const [region, setRegion] = useState(priceFilters.regions[0]);
  const [period, setPeriod] = useState(priceFilters.periods[0]);

  return (
    <div className="pt-page">
      {/* 격자 밖: 요약 카드 */}
      <ul className="pt-kpi">
        {priceKpis.map((k) => (
          <li key={k.label}>
            <span className="pt-kpi__label">{k.label}</span>
            <strong className="pt-kpi__value">{k.value}<em>{k.unit}</em></strong>
            <Delta value={k.delta} />
          </li>
        ))}
      </ul>

      {/* 격자 밖: 조건 상자 — 화면 전체에 하나만 둔다 */}
      <form className="pt-filter" onSubmit={(e) => e.preventDefault()}>
        <p className="pt-filter__title"><Filter size={15} aria-hidden="true" /> 조회 조건</p>
        <div className="pt-filter__field">
          <label htmlFor="pt-product">유종</label>
          <select id="pt-product" value={product} onChange={(e) => setProduct(e.target.value)}>
            {priceFilters.products.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="pt-filter__field">
          <label htmlFor="pt-region">지역</label>
          <select id="pt-region" value={region} onChange={(e) => setRegion(e.target.value)}>
            {priceFilters.regions.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="pt-filter__field">
          <label htmlFor="pt-period">기간</label>
          <select id="pt-period" value={period} onChange={(e) => setPeriod(e.target.value)}>
            {priceFilters.periods.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <p className="pt-filter__note">{region} · {product} · {period} 기준으로 아래 위젯이 함께 갱신됩니다.</p>
      </form>

      <PortletGrid pageKey={pageKey} defaultLayout={defaultPriceLayout} />
    </div>
  );
}
