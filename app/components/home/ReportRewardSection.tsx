import { ArrowRight, Award, FlaskConical, Search, ShieldCheck, Siren, type LucideIcon } from "lucide-react";
import { reportServices } from "../../data/portalMock";
import { RouteLink } from "../common/RouteLink";

const icons: Record<string, LucideIcon> = {
  siren: Siren,
  search: Search,
  award: Award,
  flask: FlaskConical,
};

export function ReportRewardSection() {
  return (
    <section className="report-wrap" aria-labelledby="report-title">
      <div className="portal-container home-section">
        <div className="section-heading">
          <div>
            <span>REPORT &amp; REWARD</span>
            <h2 id="report-title">신고·포상</h2>
          </div>
          <p className="report-guard"><ShieldCheck size={15} /> 신고자 정보는 관련 법령에 따라 보호됩니다.</p>
        </div>
        <div className="report-grid">
          {reportServices.map((service) => {
            const Icon = icons[service.icon] ?? Siren;
            return (
              <article className="report-card" key={service.title}>
                <span className={`report-icon ${service.tone}`}><Icon size={21} strokeWidth={1.8} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <RouteLink to={service.path}>{service.action} <ArrowRight size={15} /></RouteLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
