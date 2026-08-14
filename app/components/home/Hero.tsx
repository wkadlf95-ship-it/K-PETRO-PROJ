import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { RouteLink } from "../common/RouteLink";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="portal-container hero-card">
        <div className="hero-background" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <span className="hero-kicker"><ShieldCheck size={15} /> 믿을 수 있는 석유정보 통합포털</span>
          <h1 id="hero-title">국민에게 공개되는<br />석유정보를 한곳에서</h1>
          <p>가격·품질·유통·원유수송 통계부터 신고와 공공데이터까지<br className="desktop-break" /> 필요한 정보를 쉽고 투명하게 제공합니다.</p>
          <div className="hero-actions">
            <RouteLink to="/disclosure" className="button button-accent">정보공개 바로가기 <ArrowRight size={17} /></RouteLink>
            <RouteLink to="/price" className="button button-glass">오늘의 가격 보기</RouteLink>
          </div>
        </div>
        <form className="hero-search" onSubmit={(event) => event.preventDefault()}>
          <Search size={21} aria-hidden="true" />
          <input aria-label="석유정보 통합검색" placeholder="어떤 석유정보를 찾고 계신가요?" />
          <button type="submit">통합검색</button>
        </form>
      </div>
    </section>
  );
}

