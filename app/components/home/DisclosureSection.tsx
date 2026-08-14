import { ArrowRight, ChevronRight, Landmark } from "lucide-react";
import { disclosureCards } from "../../data/sectionMock";
import { RouteLink } from "../common/RouteLink";

export function DisclosureSection() {
  return (
    <section className="portal-container home-section" aria-labelledby="disclosure-title">
      <div className="section-heading">
        <div>
          <span>OPEN INFORMATION</span>
          <h2 id="disclosure-title">정보공개</h2>
        </div>
        <RouteLink to="/disclosure/open/list" className="section-link">정보공개 전체보기 <ArrowRight size={15} /></RouteLink>
      </div>
      <div className="disclosure__grid">
        {disclosureCards.map((card) => (
          <article className="disclosure__card" key={card.title}>
            <span className="disclosure__mark" aria-hidden="true"><Landmark size={19} /></span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.links.map((link) => (
                <li key={link}>
                  <RouteLink to={card.path}>{link} <ChevronRight size={14} /></RouteLink>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
