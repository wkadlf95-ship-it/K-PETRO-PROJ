import { Minus, TrendingDown, TrendingUp } from "../../icons";
import { priceByProduct, priceByRegion, priceNotices } from "../../data/portletMock";
import { priceTrend } from "../../data/statsMock";
import { PriceTrendChart } from "../../components/charts/PriceTrendChart";

/** 증감 표시. 색만으로 알리지 않고 ▲▼ 기호와 낱말을 함께 둔다. */
export function Delta({ value }: { value: number }) {
  const dir = value > 0 ? "up" : value < 0 ? "down" : "flat";
  const Icon = dir === "up" ? TrendingUp : dir === "down" ? TrendingDown : Minus;
  const word = dir === "up" ? "상승" : dir === "down" ? "하락" : "보합";
  return (
    <span className={`pt-delta pt-delta--${dir}`}>
      <Icon size={13} aria-hidden="true" />
      {value === 0 ? "0" : `${value > 0 ? "+" : ""}${value}`}원 {word}
    </span>
  );
}

/** 막대 길이는 portlet.css 의 [data-pct] 규칙이 정한다(5% 단위). */
const bucket = (pct: number) => Math.round(Math.min(100, Math.max(0, pct)) / 5) * 5;

export function PriceByProductWidget() {
  return (
    <table className="pt-table">
      <caption className="sr-only">유종별 전국 평균가격</caption>
      <thead>
        <tr>
          <th scope="col">유종</th><th scope="col">평균</th>
          <th scope="col">최고</th><th scope="col">최저</th><th scope="col">전일 대비</th>
        </tr>
      </thead>
      <tbody>
        {priceByProduct.map((row) => (
          <tr key={row.product}>
            <th scope="row">{row.product}</th>
            <td>{row.avg}</td>
            <td>{row.high}</td>
            <td>{row.low}</td>
            <td><Delta value={row.delta} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** 그림은 표의 요약이지 유일한 전달 수단이 아니다. 같은 값을 표로도 낸다. */
export function PriceTrendWidget() {
  return (
    <>
      <PriceTrendChart />
      <table className="pt-table pt-table--compact">
        <caption className="sr-only">최근 5일 유종별 평균가격</caption>
        <thead>
          <tr>
            <th scope="col">유종</th>
            {priceTrend.labels.map((d) => <th scope="col" key={d}>{d}</th>)}
          </tr>
        </thead>
        <tbody>
          {priceTrend.series.map((s) => (
            <tr key={s.name}>
              <th scope="row">{s.name}</th>
              {s.values.map((v, i) => <td key={priceTrend.labels[i]}>{v.toLocaleString()}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function PriceByRegionWidget() {
  const max = Math.max(...priceByRegion.map((r) => r.price));
  const min = Math.min(...priceByRegion.map((r) => r.price));
  return (
    <table className="pt-table pt-table--bars">
      <caption className="sr-only">지역별 평균가격 비교</caption>
      <thead>
        <tr><th scope="col">지역</th><th scope="col">평균가격</th><th scope="col">비교</th></tr>
      </thead>
      <tbody>
        {priceByRegion.map((row) => (
          <tr key={row.region}>
            <th scope="row">{row.region}</th>
            <td>{row.price.toLocaleString()}원</td>
            <td>
              <span className="pt-bar" data-pct={bucket(((row.price - min) / (max - min || 1)) * 90 + 10) } aria-hidden="true" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PriceDeltaWidget() {
  return (
    <ul className="pt-delta__list">
      {priceByRegion.map((row) => (
        <li key={row.region}>
          <span>{row.region}</span>
          <strong>{row.price.toLocaleString()}원</strong>
          <Delta value={row.delta} />
        </li>
      ))}
    </ul>
  );
}

export function PriceNoticeWidget() {
  return (
    <ul className="pt-notice__list">
      {priceNotices.map((n) => (
        <li key={n.title}>
          <time>{n.date}</time>
          <span>{n.title}</span>
        </li>
      ))}
    </ul>
  );
}
