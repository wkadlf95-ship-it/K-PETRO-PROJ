import { nodePath } from "../../config/routes";
import { siteTree } from "../../config/siteTree";
import { RouteLink } from "../common/RouteLink";

type GlobalNavProps = {
  activeTop: string;
  openMenu: string | null;
  onOpenChange: (slug: string | null) => void;
};

export function GlobalNav({ activeTop, openMenu, onOpenChange }: GlobalNavProps) {
  return (
    <nav className="global-nav" aria-label="주요 메뉴">
      {siteTree.map((top) => (
        <div className="global-nav-item" key={top.slug} onMouseLeave={() => onOpenChange(null)}>
          <button
            type="button"
            className={activeTop === top.slug ? "is-active" : ""}
            onMouseEnter={() => onOpenChange(top.slug)}
            onClick={() => onOpenChange(openMenu === top.slug ? null : top.slug)}
            aria-expanded={openMenu === top.slug}
          >
            {top.label}
          </button>
          {openMenu === top.slug && top.children && (
            <div className="nav-dropdown">
              <strong>{top.label}</strong>
              {top.children.map((mid) => (
                <RouteLink key={mid.slug} to={nodePath(top, mid)}>{mid.label}</RouteLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
