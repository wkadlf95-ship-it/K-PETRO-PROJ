import { useEffect, useRef, useState } from "react";
import { Bot, LayoutGrid, Menu, Search, UserRound, X } from "lucide-react";
import { AllMenuPanel } from "../header/AllMenuPanel";
import { GlobalNav } from "../header/GlobalNav";
import { HeaderSearch } from "../header/HeaderSearch";
import { MobileMenu } from "../header/MobileMenu";
import { UtilityBar } from "../header/UtilityBar";
import { BrandLogo } from "../common/BrandLogo";
import { RouteLink } from "../common/RouteLink";

export function Header({ currentPath }: { currentPath: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [allMenuOpen, setAllMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
    setAllMenuOpen(false);
  };

  // 라우트가 바뀌면 열려 있던 패널을 모두 닫습니다.
  useEffect(closeAll, [currentPath]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpenMenu(null); setAllMenuOpen(false); setSearchOpen(false); }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const activeTop = currentPath.split("/")[1];

  return (
    <header ref={headerRef} className="site-header">
      <UtilityBar />

      <div className="main-header">
        <div className="portal-container main-header__inner">
          <BrandLogo />
          <GlobalNav activeTop={activeTop} openMenu={openMenu} onOpenChange={setOpenMenu} />

          <div className="header-actions">
            <button type="button" className="icon-action" aria-label="통합검색" onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={20} />
            </button>
            <RouteLink to="/member/login" className="icon-action desktop-account" aria-label="로그인">
              <UserRound size={20} />
            </RouteLink>
            <RouteLink to="/oil/briefing/today" className="chat-link"><Bot size={17} /> 챗봇</RouteLink>
            <button
              type="button"
              className="icon-action"
              aria-label="전체 메뉴"
              aria-expanded={allMenuOpen}
              onClick={() => setAllMenuOpen(!allMenuOpen)}
            >
              {allMenuOpen ? <X size={22} /> : <LayoutGrid size={20} />}
            </button>
            <button type="button" className="menu-toggle" aria-label="모바일 메뉴" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && <HeaderSearch />}
      {allMenuOpen && <AllMenuPanel />}
      {mobileOpen && <MobileMenu activeTop={activeTop} />}
    </header>
  );
}
