import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ChatbotButton } from "./components/layout/ChatbotButton";
import { resolvePath } from "./config/routes";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomePage } from "./pages/HomePage";
import { InstitutionPage } from "./pages/InstitutionPage";
import { SitemapPage } from "./pages/SitemapPage";

export default function App() {
  const path = useHashRoute();
  const page = path === "/" || path === "/sitemap" ? null : resolvePath(path);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <Header currentPath={path} />
      <div id="main-content">
        {path === "/sitemap" ? <SitemapPage /> : page ? <InstitutionPage page={page} /> : <HomePage />}
      </div>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
