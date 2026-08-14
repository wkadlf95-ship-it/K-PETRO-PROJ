import { LogIn } from "lucide-react";
import { nodePath } from "../../config/routes";
import { siteTree } from "../../config/siteTree";
import { RouteLink } from "../common/RouteLink";

export function MobileMenu({ activeTop }: { activeTop: string }) {
  return (
    <div className="mobile-menu">
      <div className="portal-container">
        <div className="mobile-account">
          <LogIn size={17} />
          <RouteLink to="/member/login">로그인</RouteLink>
          <span>·</span>
          <RouteLink to="/member/join">회원가입</RouteLink>
        </div>
        <nav aria-label="모바일 메뉴">
          {siteTree.map((top) => (
            <RouteLink
              key={top.slug}
              to={nodePath(top, top.children![0])}
              className={activeTop === top.slug ? "is-active" : ""}
            >
              {top.label}
            </RouteLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
