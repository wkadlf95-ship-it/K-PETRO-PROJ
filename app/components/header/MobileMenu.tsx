import { LogIn } from "lucide-react";
import { publicNavItems } from "../../config/publicNav";
import { RouteLink } from "../common/RouteLink";

export function MobileMenu({ activeTop }: { activeTop: string }) {
  const currentPath = window.location.hash.replace(/^#/, "") || "/";

  return (
    <div className="mobile-menu">
      <div className="portal-container">
        <div className="mobile-account">
          <LogIn size={17} />
          <RouteLink to="/member/login">로그인</RouteLink>
          <span>·</span>
          <RouteLink to="/member/join">회원가입</RouteLink>
        </div>
        <nav aria-label="모바일 주요 서비스 메뉴">
          {publicNavItems.map((item) => {
            const itemTop = item.path.split("/")[1];
            const isActive = currentPath.startsWith(item.path) || item.children?.some((child) => currentPath.startsWith(child.path));
            return (
              <RouteLink
                key={item.path}
                to={item.path}
                className={isActive || activeTop === itemTop && itemTop !== "oil" ? "is-active" : ""}
              >
                {item.label}
              </RouteLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
