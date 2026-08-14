import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides } from "../../data/homeMock";
import { RouteLink } from "../common/RouteLink";

const SLIDE_INTERVAL = 5000;
const count = heroSlides.length;
const pad = (value: number) => String(value).padStart(2, "0");

type HeroBannerSliderProps = {
  index: number;
  onChange: (next: number) => void;
};

export function HeroBannerSlider({ index, onChange }: HeroBannerSliderProps) {
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);

  // 자동 재생. 사용자가 정지했거나 마우스/포커스가 올라가 있으면 멈춥니다.
  useEffect(() => {
    if (!playing || hovered) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => onChange((index + 1) % count), SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [playing, hovered, index, onChange]);

  const move = (step: number) => onChange((index + step + count) % count);

  return (
    <div
      className="hero-banner"
      role="group"
      aria-roledescription="캐러셀"
      aria-label="공지사항 및 브리핑 배너"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}
    >
      <div className="hero-banner-head">
        <span>공지 · 브리핑</span>
        <strong><em>{pad(index + 1)}</em> / {pad(count)}</strong>
      </div>

      <div className="hero-banner-viewport">
        <div className="hero-banner-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {heroSlides.map((slide, slideIndex) => {
            const current = slideIndex === index;
            return (
              <article className="hero-banner-slide" key={slide.title} aria-hidden={!current}>
                <span className="hero-banner-category">{slide.category}</span>
                <h3>{slide.title}</h3>
                <p>{slide.summary}</p>
                <div className="hero-banner-foot">
                  <time>{slide.date}</time>
                  <RouteLink to={slide.path} tabIndex={current ? 0 : -1}>
                    자세히 보기 <ArrowRight size={14} />
                  </RouteLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="hero-banner-controls">
        <div className="hero-banner-dots">
          {heroSlides.map((slide, slideIndex) => (
            <button
              type="button"
              key={slide.title}
              className={slideIndex === index ? "is-active" : ""}
              aria-label={`${slideIndex + 1}번째 배너 보기`}
              aria-current={slideIndex === index}
              onClick={() => onChange(slideIndex)}
            />
          ))}
        </div>
        <div className="hero-banner-buttons">
          <button type="button" onClick={() => move(-1)} aria-label="이전 배너"><ChevronLeft size={16} /></button>
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? "배너 자동전환 정지" : "배너 자동전환 시작"}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button type="button" onClick={() => move(1)} aria-label="다음 배너"><ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
