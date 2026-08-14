import { ChevronRight, Home } from "lucide-react";
import { countLeaves, nodePath } from "../config/routes";
import { siteTree } from "../config/siteTree";
import { RouteLink } from "../components/common/RouteLink";
import { StatusBadge } from "../components/common/StatusBadge";

export function SitemapPage() {
  return (
    <main className="subpage">
      <div className="sub-hero">
        <div className="portal-container">
          <nav className="breadcrumb" aria-label="현재 위치">
            <RouteLink to="/" aria-label="홈"><Home size={14} /></RouteLink>
            <ChevronRight size={13} />
            <strong>사이트맵</strong>
          </nav>
          <h1>사이트맵</h1>
          <p>대국민포털의 전체 메뉴 {siteTree.length}개 분야 · {countLeaves()}개 서비스를 한눈에 확인합니다.</p>
        </div>
      </div>

      <div className="portal-container sub-content">
        <div className="sitemap-grid">
          {siteTree.map((top) => (
            <section className="sitemap-block" key={top.slug}>
              <h2>{top.label}</h2>
              {top.children?.map((mid) => (
                <div className="sitemap-group" key={mid.slug}>
                  <strong>{mid.label}</strong>
                  <ul>
                    {mid.children?.map((leaf) => (
                      <li key={leaf.slug}>
                        {leaf.kind === "external" && leaf.href
                          ? <a href={leaf.href} target="_blank" rel="noreferrer">{leaf.label}</a>
                          : <RouteLink to={nodePath(top, mid, leaf)}>{leaf.label}</RouteLink>}
                        {leaf.status && <StatusBadge status={leaf.status} compact />}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
