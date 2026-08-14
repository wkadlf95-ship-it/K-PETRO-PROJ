import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ChatbotButton } from "./components/layout/ChatbotButton";
import { pageDefinitions } from "./config/pages";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomePage } from "./pages/HomePage";
import { ServicePage } from "./pages/ServicePage";

export default function App() {
  const path = useHashRoute();
  const page = pageDefinitions.find((item) => item.path === path);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <Header currentPath={path} />
      <div id="main-content">{path === "/" ? <HomePage /> : page ? <ServicePage page={page} /> : <HomePage />}</div>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
