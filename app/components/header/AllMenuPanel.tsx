import { featuredPublicMenus, publicNavItems } from "../../config/publicNav";
import { RouteLink } from "../common/RouteLink";

export function AllMenuPanel() {
  return (
    <div className="all-menu__panel">
      <div className="portal-container all-menu__inner">
        <section className="all-menu-featured" aria-labelledby="all-menu-featured-title">
          <div className="all-menu-section-title">
            <span>QUICK ACCESS</span>
            <h2 id="all-menu-featured-title">대국민 핵심 서비스</h2>
          </div>
          <div className="all-menu-featured__grid">
            {featuredPublicMenus.map((item) => (
              <RouteLink to={item.path} className="all-menu-featured__card" key={item.path}>
                <strong>{item.label}</strong>
                <p>{item.desc}</p>
              </RouteLink>
            ))}
          </div>
        </section>

        <section className="all-menu__directory" aria-labelledby="all-menu-directory-title">
          <div className="all-menu-section-title">
            <span>SERVICE DIRECTORY</span>
            <h2 id="all-menu-directory-title">전체 서비스 메뉴</h2>
          </div>
          <div className="all-menu__grid service-menu-grid">
            {publicNavItems.map((top) => (
              <section className="all-menu-card" key={top.label}>
                <h3>{top.label}</h3>
                <p className="all-menu-card__desc">{top.desc}</p>
                <div className="all-menu-card__groups">
                  <div className="all-menu__group">
                    <ul>
                      {top.children?.map((child) => (
                        <li key={child.path}>
                          <RouteLink to={child.path}>
                            {child.label}
                            {child.badge && <em>{child.badge}</em>}
                          </RouteLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
