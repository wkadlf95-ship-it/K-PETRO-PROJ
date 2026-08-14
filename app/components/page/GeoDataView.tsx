import { geoDataPresets } from "../../data/pageMock";

export function GeoDataView({ slug, title }: { slug: string; title: string }) {
  const preset = geoDataPresets[slug] ?? {
    caption: `${title} 목록형 데이터 화면입니다. 실제 지도 연계 여부는 추후 협의가 필요합니다.`,
    columns: ["항목", "내용"],
    rows: [],
  };

  return (
    <div className="geo-data-view">
      <p className="content__lead">
        위치·지역 기준으로 활용 가능한 데이터를 우선 표와 목록 형태로 제공합니다.
        지도 API 연계가 확정되면 동일 데이터를 지도 화면에 연결할 수 있습니다.
      </p>

      <table className="data-table">
        <caption className="sr-only">{title} 목록</caption>
        <thead>
          <tr>{preset.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr>
        </thead>
        <tbody>
          {preset.rows.length === 0 && (
            <tr><td colSpan={preset.columns.length} className="board__empty">등록된 데이터가 없습니다.</td></tr>
          )}
          {preset.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="content__note">{preset.caption}</p>
    </div>
  );
}
