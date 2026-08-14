import { useEffect, useRef, useState } from "react";
import { Bot, Globe2, LayoutGrid, LogIn, Menu, Search, UserRound, X } from "lucide-react";
import { nodePath, siteTree } from "../../config/siteTree";
import { BrandLogo } from "../common/BrandLogo";
import { RouteLink } from "../common/RouteLink";

const utilityLinks = [
  { label: "회원가입", path: "/member/join" },
  { label: "로그인", path: "/member/login" },
  { label: "방문신청", path: "/service/charter/facility" },
  { label: "사이트맵", path: "/sitemap" },
];

export function Header({ currentPath }: { currentPath: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [allMenuOpen, setAllMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
    setAllMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    const esc = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpenMenu(null); setAllMenuOpen(false); setSearchOpen(false); }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, []);

  const activeTop = currentPath.split("/")[1];

  return (
    <header ref={headerRef} className="site-header">
      <div className="utility-bar">
        <div className="portal-container utility-inner">
          <nav aria-label="바로가기" className="institution-nav">
            <RouteLink to="/oil/price/type">가격정보</RouteLink>
            <RouteLink to="/oil/quality/result">품질검사 결과</RouteLink>
            <RouteLink to="/disclosure/opendata/catalog">공공데이터</RouteLink>
            <RouteLink to="/oil/report/guide">민원·신고</RouteLink>
          </nav>
          <div className="utility-actions">
            {utilityLinks.map((item) => (
              <RouteLink key={item.label} to={item.path}>{item.label}</RouteLink>
            ))}
            <button type="button"><Globe2 size={13} /> ENG</button>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="portal-container main-header-inner">
          <BrandLogo />

          <nav className="global-nav" aria-label="주요 메뉴">
            {siteTree.map((top) => (
              <div className="global-nav-item" key={top.slug} onMouseLeave={() => setOpenMenu(null)}>
                <button
                  type="button"
                  className={activeTop === top.slug ? "is-active" : ""}
                  onMouseEnter={() => setOpenMenu(top.slug)}
                  onClick={() => setOpenMenu(openMenu === top.slug ? null : top.slug)}
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

          <div className="header-actions">
            <button type="button" className="icon-action" aria-label="통합검색" onClick={() => setSearchOpen(!searchOpen)}><Search size={20} /></button>
            <RouteLink to="/member/login" className="icon-action desktop-account" aria-label="로그인"><UserRound size={20} /></RouteLink>
            <RouteLink to="/oil/briefing/today" className="chat-link"><Bot size={17} /> 챗봇</RouteLink>
            <button type="button" className="icon-action all-menu-toggle" aria-label="전체 메뉴" aria-expanded={allMenuOpen} onClick={() => setAllMenuOpen(!allMenuOpen)}>
              {allMenuOpen ? <X size={22} /> : <LayoutGrid size={20} />}
            </button>
            <button type="button" className="menu-toggle" aria-label="모바일 메뉴" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="header-search-panel">
          <form className="portal-container header-search" onSubmit={(event) => event.preventDefault()}>
            <Search size={20} aria-hidden="true" />
            <input autoFocus aria-label="통합검색어" placeholder="가격정보, 품질검사, 유통통계, 신고 서비스를 검색해 보세요" />
            <button type="submit">검색</button>
          </form>
        </div>
      )}

      {allMenuOpen && (
        <div className="all-menu-panel">
          <div className="portal-container all-menu-grid">
            {siteTree.map((top) => (
              <section key={top.slug}>
                <h2>{top.label}</h2>
                {top.children?.map((mid) => (
                  <div className="all-menu-group" key={mid.slug}>
                    <strong>{mid.label}</strong>
                    <ul>
                      {mid.children?.map((leaf) => (
                        <li key={leaf.slug}>
                          {leaf.kind === "external" && leaf.href
                            ? <a href={leaf.href} target="_blank" rel="noreferrer">{leaf.label}</a>
                            : <RouteLink to={nodePath(top, mid, leaf)}>{leaf.label}</RouteLink>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="mobile-menu">
          <div className="portal-container">
            <div className="mobile-account"><LogIn size={17} /><RouteLink to="/member/login">로그인</RouteLink><span>·</span><RouteLink to="/member/join">회원가입</RouteLink></div>
            <nav aria-label="모바일 메뉴">
              {siteTree.map((top) => (
                <RouteLink key={top.slug} to={nodePath(top, top.children![0])} className={activeTop === top.slug ? "is-active" : ""}>{top.label}</RouteLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
