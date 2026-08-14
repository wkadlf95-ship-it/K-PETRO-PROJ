import { useState } from "react";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { heroSlides } from "../../data/homeMock";
import { RouteLink } from "../common/RouteLink";
import { HeroBannerSlider } from "./HeroBannerSlider";

export function HeroSection() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="portal-container hero-card">
        {heroSlides.map((item, index) => (
          <div
            key={item.title}
            className={`hero-background ${index === slide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            aria-hidden="true"
          />
        ))}
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-kicker"><ShieldCheck size={15} /> 석유정보 통합포털</span>
            <h1 id="hero-title">국민에게 공개되는 석유정보를<br />한 곳에서 확인합니다</h1>
            <p>
              가격정보, 품질검사 결과, 유통통계, 원유수송 공개통계, 신고·포상 정보를<br className="desktop-break" />
              통합 제공하는 한국석유관리원 대국민포털입니다.
            </p>
            <div className="hero-actions">
              <RouteLink to="/disclosure/open/list" className="button button-accent">정보공개 바로가기 <ArrowRight size={17} /></RouteLink>
              <RouteLink to="/oil/price/type" className="button button-glass">가격정보 조회</RouteLink>
              <RouteLink to="/oil/report/guide" className="button button-glass">신고/포상 안내</RouteLink>
            </div>
          </div>

          <HeroBannerSlider index={slide} onChange={setSlide} />
        </div>

        <form className="hero-search" onSubmit={(event) => event.preventDefault()}>
          <Search size={21} aria-hidden="true" />
          <input aria-label="석유정보 통합검색" placeholder="가격, 품질, 통계, 공공데이터를 검색해 보세요" />
          <button type="submit">통합검색</button>
        </form>
      </div>
    </section>
  );
}
