import { useMemo, useState } from "react";
import { Search } from "../../icons";
import { buildInspectionRows, searchProducts, searchRegions } from "../../data/pageMock";

export function SearchView({ title }: { title: string }) {
  const [region, setRegion] = useState("전체");
  const [product, setProduct] = useState("전체");
  const [submitted, setSubmitted] = useState(false);

  const rows = useMemo(() => buildInspectionRows(), []);
  const filtered = rows.filter(
    (row) => (region === "전체" || row.region === region) && (product === "전체" || row.product === product),
  );

  return (
    <div className="search-view">
      <form className="search-panel" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="search-field">
          <label htmlFor="sv-region">지역</label>
          <select id="sv-region" value={region} onChange={(e) => setRegion(e.target.value)}>
            {searchRegions.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="search-field">
          <label htmlFor="sv-product">유종</label>
          <select id="sv-product" value={product} onChange={(e) => setProduct(e.target.value)}>
            {searchProducts.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="search-field">
          <label htmlFor="sv-date">조회기간</label>
          <input id="sv-date" type="month" defaultValue="2026-08" />
        </div>
        <button type="submit"><Search size={15} /> 조회</button>
      </form>

      <p className="search__count">
        {submitted ? "조회" : "기본"} 결과 <strong>{filtered.length}</strong>건 · {title}
      </p>

      <table className="data-table">
        <caption className="sr-only">{title} 조회 결과</caption>
        <thead>
          <tr>
            <th scope="col">관리번호</th><th scope="col">지역</th><th scope="col">유종</th>
            <th scope="col">검사일</th><th scope="col">결과</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && <tr><td colSpan={5} className="board__empty">조건에 맞는 결과가 없습니다.</td></tr>}
          {filtered.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.region}</td>
              <td>{row.product}</td>
              <td>{row.date}</td>
              <td><span className={`result-badge ${row.result === "적합" ? "is-pass" : "is-fail"}`}>{row.result}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="content__note">개별 사업자 상세정보는 공개하지 않으며, 공개 가능한 집계 항목만 제공합니다.</p>
    </div>
  );
}
