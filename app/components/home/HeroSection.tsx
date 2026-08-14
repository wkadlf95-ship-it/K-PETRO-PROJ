import { useState } from "react";
import { ArrowRight, Search, ShieldCheck } from "../../icons";
import { heroSlides } from "../../data/homeMock";
import { RouteLink } from "../common/RouteLink";
import { HeroBannerSlider } from "./HeroBannerSlider";

export function HeroSection() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="portal-container hero__card">
        {/* 배경은 사진이 아니라 CSS 무늬다. 외부 이미지 호출과 초상·상표 문제가 없다.
            무늬는 pages/home.css 의 .hero__bg--{scene} 규칙이 그린다. */}
        {heroSlides.map((item, index) => (
          <div
            key={item.title}
            className={`hero__background hero__bg--${item.scene} ${index === slide ? "is-active" : ""}`}
            aria-hidden="true"
          />
        ))}
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__kicker"><ShieldCheck size={15} /> 석유정보 통합포털</span>
            <h1 id="hero-title">국민에게 공개되는 석유정보를<br />한 곳에서 확인합니다</h1>
            <p>
              가격정보, 품질검사 결과, 유통 현황, 원유수송 공개통계, 신고·포상 정보를<br className="desktop-break" />
              통합 제공하는 한국석유관리원 대국민포털입니다.
            </p>
            <div className="hero__actions">
              <RouteLink to="/disclosure/open/list" className="button button--accent">정보공개 바로가기 <ArrowRight size={17} /></RouteLink>
              <RouteLink to="/oil/price/type" className="button button--glass">가격정보 조회</RouteLink>
              <RouteLink to="/oil/report/guide" className="button button--glass">신고/포상 안내</RouteLink>
            </div>
          </div>

          <HeroBannerSlider index={slide} onChange={setSlide} />
        </div>

        <form className="hero__search" onSubmit={(event) => event.preventDefault()}>
          <Search size={21} aria-hidden="true" />
          <input aria-label="석유정보 통합검색" placeholder="가격, 품질, 통계, 공공데이터를 검색해 보세요" />
          <button type="submit">통합검색</button>
        </form>
      </div>
    </section>
  );
}
