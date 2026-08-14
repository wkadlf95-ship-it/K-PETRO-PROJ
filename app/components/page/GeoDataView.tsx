import { geoDataPresets } from "../../data/pageMock";

export function GeoDataView({ slug, title }: { slug: string; title: string }) {
  const preset = geoDataPresets[slug] ?? { caption: `${title} 목록 (시안)`, columns: ["항목", "내용"], rows: [] };

  return (
    <div className="geo-data-view">
      <table className="data-table">
        <caption className="sr-only">{title} 목록</caption>
        <thead><tr>{preset.columns.map((col) => <th key={col} scope="col">{col}</th>)}</tr></thead>
        <tbody>
          {preset.rows.length === 0 && <tr><td colSpan={preset.columns.length} className="board-empty">등록된 데이터가 없습니다.</td></tr>}
          {preset.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="content-note">{preset.caption}</p>
    </div>
  );
}
