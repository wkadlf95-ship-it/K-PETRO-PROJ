import { MapPinned } from "lucide-react";
import { MAP_PIN_POSITIONS, mapPresets } from "../../data/pageMock";

export function MapView({ slug, title }: { slug: string; title: string }) {
  const preset = mapPresets[slug] ?? { caption: `${title} 지도 화면 (시안)`, pins: [{ label: "지점 A" }, { label: "지점 B" }, { label: "지점 C" }] };

  return (
    <div className="map-view">
      <div className="map-view-frame">
        <div className="map-view-canvas" aria-hidden="true">
          {preset.pins.slice(0, 6).map((pin, index) => (
            <span className="map-view-pin" style={MAP_PIN_POSITIONS[index]} key={pin.label + index}>
              <MapPinned size={18} />
              <em>{pin.label}{pin.note ? ` · ${pin.note}` : ""}</em>
            </span>
          ))}
          <div className="map-view-controls"><button type="button" tabIndex={-1}>+</button><button type="button" tabIndex={-1}>–</button></div>
          <span className="map-view-badge">지도 API 연동 예정</span>
        </div>
        {preset.legend && (
          <div className="map-view-legend">
            {preset.legend.map((item) => <span key={item.label}><i className={`tone-${item.tone}`} />{item.label}</span>)}
          </div>
        )}
      </div>
      <p className="content-note">{preset.caption}</p>
    </div>
  );
}
