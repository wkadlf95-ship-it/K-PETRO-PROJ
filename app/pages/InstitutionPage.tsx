import { ChevronRight, ExternalLink, Home, Printer, Share2 } from "lucide-react";
import { nodePath, type ResolvedPage } from "../config/routes";
import { RouteLink } from "../components/common/RouteLink";
import { BoardView } from "../components/page";
import { ContentView, FaqView, FormView, LocationView, OrgView, SearchView, TimelineView } from "../components/page";

function PageBody({ page }: { page: ResolvedPage }) {
  const { leaf, top } = page;
  switch (leaf.kind) {
    case "board": return <BoardView title={leaf.label} />;
    case "faq": return <FaqView />;
    case "search": return <SearchView title={leaf.label} />;
    case "form": return <FormView title={leaf.label} />;
    case "timeline": return <TimelineView />;
    case "org": return <OrgView />;
    case "location": return <LocationView slug={leaf.slug} />;
    default: return <ContentView title={leaf.label} desc={top.desc ?? ""} />;
  }
}

export function InstitutionPage({ page }: { page: ResolvedPage }) {
  const { top, mid, leaf } = page;

  return (
    <main className="subpage">
      <div className="sub-hero">
        <div className="portal-container">
          <nav className="breadcrumb" aria-label="현재 위치">
            <RouteLink to="/" aria-label="홈"><Home size={14} /></RouteLink>
            <ChevronRight size={13} />
            <span>{top.label}</span>
            <ChevronRight size={13} />
            <span>{mid.label}</span>
            <ChevronRight size={13} />
            <strong>{leaf.label}</strong>
          </nav>
          <h1>{mid.label}</h1>
          <p>{top.desc}</p>
        </div>
      </div>

      <div className="sub-tabs-wrap">
        <nav className="portal-container sub-tabs" aria-label={`${mid.label} 하위 메뉴`}>
          {mid.children?.map((item) => (
            item.kind === "external" && item.href
              ? <a key={item.slug} href={item.href} target="_blank" rel="noreferrer">{item.label} <ExternalLink size={12} /></a>
              : <RouteLink key={item.slug} to={nodePath(top, mid, item)} className={item.slug === leaf.slug ? "is-active" : ""}>{item.label}</RouteLink>
          ))}
        </nav>
      </div>

      <div className="portal-container institution-layout">
        <aside className="lnb" aria-label={`${top.label} 메뉴`}>
          <h2>{top.label}</h2>
          <ul>
            {top.children?.map((item) => (
              <li key={item.slug}>
                <RouteLink to={nodePath(top, item)} className={item.slug === mid.slug ? "is-active" : ""}>
                  {item.label} <ChevronRight size={14} />
                </RouteLink>
              </li>
            ))}
          </ul>
        </aside>

        <div className="institution-body">
          <div className="institution-head">
            <h2>{leaf.label}</h2>
            <div className="institution-tools">
              <button type="button" onClick={() => window.print()} aria-label="인쇄"><Printer size={15} /></button>
              <button type="button" aria-label="공유"><Share2 size={15} /></button>
            </div>
          </div>
          <PageBody page={page} />
        </div>
      </div>
    </main>
  );
}
