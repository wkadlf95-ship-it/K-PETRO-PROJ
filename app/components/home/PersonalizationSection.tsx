import { ArrowRight, Bell, LogIn, Mail, Star, UserRound, type LucideIcon } from "lucide-react";
import { personalizationItems } from "../../data/portalMock";
import { RouteLink } from "../common/RouteLink";

const icons: Record<string, LucideIcon> = { star: Star, mail: Mail, bell: Bell };

export function PersonalizationSection() {
  return (
    <section className="personal-wrap" aria-labelledby="personal-title">
      <div className="portal-container personal-inner">
        <div className="personal-intro">
          <span className="personal-badge"><UserRound size={14} /> 로그인 회원 서비스</span>
          <h2 id="personal-title">관심정보와 알림을<br />내 방식대로 설정하세요</h2>
          <p>자주 확인하는 석유정보를 등록하면 로그인 후 첫 화면에서 바로 확인할 수 있습니다.</p>
          <RouteLink to="/service/report/guide" className="button button-accent">로그인하고 설정하기 <LogIn size={16} /></RouteLink>
        </div>
        <div className="personal-grid">
          {personalizationItems.map((item) => {
            const Icon = icons[item.icon] ?? Star;
            return (
              <article className="personal-card" key={item.title}>
                <span className="personal-icon"><Icon size={19} strokeWidth={1.8} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <RouteLink to="/service/report/guide">{item.action} <ArrowRight size={14} /></RouteLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
