import { useEffect, useRef, useState } from "react";
import { Bot, ChevronDown, Globe2, LogIn, Menu, Search, UserRound, X } from "lucide-react";
import { institutionLinks, primaryNavigation } from "../../config/navigation";
import { BrandLogo } from "../common/BrandLogo";
import { RouteLink } from "../common/RouteLink";

export function Header({ currentPath }: { currentPath: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="utility-bar">
        <div className="portal-container utility-inner">
          <nav aria-label="기관 메뉴" className="institution-nav">
            {institutionLinks.filter((item) => item.enabled).map((item) => (
              <RouteLink key={item.label} to={item.path}>{item.label}</RouteLink>
            ))}
          </nav>
          <div className="utility-actions">
            <a href="https://www.kpetro.or.kr/" target="_blank" rel="noreferrer">대표 홈페이지</a>
            <RouteLink to="/support">사업자 지원</RouteLink>
            <button type="button"><Globe2 size={13} /> ENG</button>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="portal-container main-header-inner">
          <BrandLogo />

          <nav className="global-nav" aria-label="대국민포털 주요 메뉴">
            {primaryNavigation.filter((item) => item.enabled).map((item) => {
              const active = currentPath === item.path;
              return (
                <div className="global-nav-item" key={item.label} onMouseLeave={() => setOpenMenu(null)}>
                  <button
                    type="button"
                    className={active ? "is-active" : ""}
                    onMouseEnter={() => item.children && setOpenMenu(item.label)}
                    onClick={() => {
                      if (item.children) setOpenMenu(openMenu === item.label ? null : item.label);
                      else window.location.hash = item.path;
                    }}
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}{item.children && <ChevronDown size={14} />}
                  </button>
                  {item.children && openMenu === item.label && (
                    <div className="nav-dropdown">
                      <strong>{item.label}</strong>
                      {item.children.filter((child) => child.enabled).map((child) => (
                        <RouteLink key={child.label} to={child.path}>{child.label}</RouteLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="header-actions">
            <button type="button" className="icon-action" aria-label="통합검색" onClick={() => setSearchOpen(!searchOpen)}><Search size={20} /></button>
            <RouteLink to="/support" className="icon-action desktop-account" aria-label="로그인"><UserRound size={20} /></RouteLink>
            <button type="button" className="chat-link"><Bot size={17} /> 챗봇</button>
            <button type="button" className="menu-toggle" aria-label="전체 메뉴" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
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

      {mobileOpen && (
        <div className="mobile-menu">
          <div className="portal-container">
            <div className="mobile-account"><LogIn size={17} /><span>로그인</span><span>·</span><span>회원가입</span></div>
            <nav aria-label="모바일 메뉴">
              {primaryNavigation.filter((item) => item.enabled).map((item) => (
                <RouteLink key={item.label} to={item.path} className={currentPath === item.path ? "is-active" : ""}>{item.label}<ChevronDown size={15} /></RouteLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

