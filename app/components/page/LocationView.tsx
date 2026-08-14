import { Building2, Bus, MapPin, Phone, Train } from "lucide-react";
import { locations } from "../../data/pageMock";

export function LocationView({ slug }: { slug: string }) {
  const info = locations[slug] ?? locations.hq;

  return (
    <div className="location-view">
      <div className="location-map" aria-hidden="true">
        <MapPin size={30} />
        <span>{info.name} 위치 안내</span>
      </div>
      <dl className="location-info">
        <div><dt><Building2 size={15} /> 주소</dt><dd>{info.addr}</dd></div>
        <div><dt><Phone size={15} /> 대표전화</dt><dd>{info.tel}</dd></div>
        <div><dt><Train size={15} /> 철도 이용</dt><dd>{info.train}</dd></div>
        <div><dt><Bus size={15} /> 버스 이용</dt><dd>{info.bus}</dd></div>
      </dl>
    </div>
  );
}
