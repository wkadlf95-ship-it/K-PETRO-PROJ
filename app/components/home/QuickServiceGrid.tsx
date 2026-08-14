import {
  ArrowUpRight,
  ChartColumnBig,
  FileSearch,
  FlaskConical,
  Fuel,
  MapPinned,
  Newspaper,
  Scale,
  Siren,
  type IconComponent,
} from "../../icons";
import { quickServices } from "../../data/homeMock";
import { RouteLink } from "../common/RouteLink";

const icons: Record<string, IconComponent> = {
  disclosure: FileSearch,
  report: Newspaper,
  law: Scale,
  price: Fuel,
  map: MapPinned,
  quality: FlaskConical,
  stats: ChartColumnBig,
  siren: Siren,
};

export function QuickServiceGrid() {
  return (
    <section className="quick-service" aria-labelledby="quick-service-title">
      <div className="portal-container home-section">
        <div className="section-heading">
          <div>
            <span>QUICK SERVICE</span>
            <h2 id="quick-service-title">주요 서비스 바로가기</h2>
          </div>
          <p>자주 찾는 공개정보 서비스로 바로 이동합니다.</p>
        </div>
        <div className="quick-service__grid">
          {quickServices.map((service) => {
            const Icon = icons[service.icon] ?? FileSearch;
            return (
              <RouteLink to={service.path} className="quick-service__card" key={service.title}>
                <span className={`quick-service__icon quick-service__icon--${service.tone}`}><Icon size={22} strokeWidth={1.8} /></span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
