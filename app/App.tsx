import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ChatbotButton } from "./components/layout/ChatbotButton";
import { resolvePath } from "./config/routes";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomePage } from "./pages/HomePage";
import { InstitutionPage } from "./pages/InstitutionPage";
import { SitemapPage } from "./pages/SitemapPage";
import { AuthPage } from "./pages/AuthPage";
import { MyPage } from "./pages/MyPage";

// 회원제 관련 화면(로그인/회원가입/마이페이지)은 콘텐츠 트리(siteTree) 밖의
// 독립 화면이라 사이트맵과 같은 방식으로 경로를 직접 분기합니다.
const SPECIAL_PATHS = ["/sitemap", "/member/login", "/member/join", "/mypage"];

function renderSpecialPage(path: string) {
  switch (path) {
    case "/sitemap": return <SitemapPage />;
    case "/member/login": return <AuthPage mode="login" />;
    case "/member/join": return <AuthPage mode="signup" />;
    case "/mypage": return <MyPage />;
    default: return null;
  }
}

export default function App() {
  const path = useHashRoute();
  const isSpecial = SPECIAL_PATHS.includes(path);
  const page = path === "/" || isSpecial ? null : resolvePath(path);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <Header currentPath={path} />
      <div id="main-content">
        {isSpecial ? renderSpecialPage(path) : page ? <InstitutionPage page={page} /> : <HomePage />}
      </div>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
