import { publicNavItems } from "../../config/publicNav";
import { RouteLink } from "../common/RouteLink";

type GlobalNavProps = {
  activeTop: string;
  openMenu: string | null;
  onOpenChange: (slug: string | null) => void;
};

export function GlobalNav({ activeTop, openMenu, onOpenChange }: GlobalNavProps) {
  const currentPath = window.location.hash.replace(/^#/, "") || "/";

  return (
    <nav className="global-nav" aria-label="주요 서비스 메뉴">
      {publicNavItems.map((item) => {
        const itemTop = item.path.split("/")[1];
        const itemKey = item.label;
        const isActive = currentPath.startsWith(item.path) || item.children?.some((child) => currentPath.startsWith(child.path));

        return (
          <div className="global-nav__item" key={item.label} onMouseLeave={() => onOpenChange(null)}>
            <button
              type="button"
              className={isActive || activeTop === itemTop && itemTop !== "oil" ? "is-active" : ""}
              onMouseEnter={() => onOpenChange(itemKey)}
              onClick={() => onOpenChange(openMenu === itemKey ? null : itemKey)}
              aria-expanded={openMenu === itemKey}
            >
              {item.label}
            </button>
            {openMenu === itemKey && item.children && (
              <div className="nav-dropdown">
                <strong>{item.label}</strong>
                <p>{item.desc}</p>
                {item.children.map((child) => (
                  <RouteLink key={child.path} to={child.path}>{child.label}</RouteLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
