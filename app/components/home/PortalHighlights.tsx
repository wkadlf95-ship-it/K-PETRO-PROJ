import { ArrowRight, BarChart3, Database, FlaskConical, Fuel, MapPinned, ShieldCheck } from "lucide-react";
import { RouteLink } from "../common/RouteLink";

const stats = [
  { label: "휘발유 평균", value: "1,685", unit: "원/L", note: "전일 대비 2원 하락", icon: Fuel, path: "/price" },
  { label: "최근 검사 적합률", value: "98.7", unit: "%", note: "공개 검사 1,248건", icon: FlaskConical, path: "/quality" },
  { label: "월간 유통량", value: "8,420", unit: "천 kL", note: "전월 대비 2.1% 증가", icon: BarChart3, path: "/distribution" },
  { label: "공공데이터", value: "38", unit: "종", note: "파일·오픈API 제공", icon: Database, path: "/public-data" },
];

const visualServices = [
  { title: "지역별 가격을 지도에서", description: "지역별 평균 가격과 유종별 흐름을 비교하세요.", path: "/price", cta: "가격 지도 열기", icon: MapPinned, image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80" },
  { title: "품질검사 결과를 투명하게", description: "공개 가능한 검사 결과와 품질기준을 확인하세요.", path: "/quality", cta: "검사 결과 조회", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80" },
  { title: "유통·원유수송 통계를 한눈에", description: "집계된 공개 통계로 석유 흐름을 살펴보세요.", path: "/distribution", cta: "통계 확인하기", icon: BarChart3, image: "https://images.unsplash.com/photo-1558298248-e70b2375af4a?auto=format&fit=crop&w=900&q=80" },
];

export function PortalHighlights() {
  return (
    <section className="portal-container home-section" aria-labelledby="today-info-title">
      <div className="section-heading">
        <div><span>PUBLIC DATA AT A GLANCE</span><h2 id="today-info-title">오늘의 석유정보</h2></div>
        <p>국민에게 공개 가능한 주요 지표를 간결하게 확인하세요.</p>
      </div>
      <div className="stat-grid">
        {stats.map(({ label, value, unit, note, icon: Icon, path }) => (
          <RouteLink to={path} className="stat-card" key={label}>
            <span className="stat-icon"><Icon size={21} /></span>
            <div><small>{label}</small><strong>{value}<em>{unit}</em></strong><p>{note}</p></div>
            <ArrowRight size={17} className="stat-arrow" />
          </RouteLink>
        ))}
      </div>

      <div className="visual-service-grid">
        {visualServices.map(({ title, description, path, cta, icon: Icon, image }) => (
          <RouteLink to={path} className="visual-card" key={title}>
            <img src={image} alt="" loading="lazy" />
            <span className="visual-shade" aria-hidden="true" />
            <div className="visual-copy"><span><Icon size={19} /></span><h3>{title}</h3><p>{description}</p><strong>{cta} <ArrowRight size={15} /></strong></div>
          </RouteLink>
        ))}
      </div>
    </section>
  );
}
