import { AlertCircle, ArrowRight, CheckCircle2, ChevronRight, Download, FileText, Home, Search, SlidersHorizontal } from "lucide-react";
import type { PageDefinition } from "../config/pages";
import { RouteLink } from "../components/common/RouteLink";

export function ServicePage({ page }: { page: PageDefinition }) {
  return (
    <main className="subpage">
      <div className="sub-hero">
        <div className="portal-container">
          <div className="breadcrumb"><RouteLink to="/" aria-label="홈"><Home size={14} /></RouteLink><ChevronRight size={13} /><span>{page.title}</span></div>
          <span className="sub-eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
      </div>
      <div className="sub-tabs-wrap">
        <nav className="portal-container sub-tabs" aria-label={`${page.title} 하위 메뉴`}>
          {page.tabs.map((tab, index) => <button type="button" className={index === 0 ? "is-active" : ""} key={tab}>{tab}</button>)}
        </nav>
      </div>
      <div className="portal-container sub-content">
        <section className="sub-summary" aria-label={`${page.title} 주요 수치`}>
          {page.stats.map((stat) => <article key={stat.label}><small>{stat.label}</small><strong>{stat.value}</strong><p><CheckCircle2 size={14} />{stat.note}</p></article>)}
        </section>
        <section className="service-content-grid">
          <div className="service-main">
            <div className="content-heading"><div><span>주요 서비스</span><h2>{page.title} 서비스</h2></div><button type="button"><SlidersHorizontal size={16} /> 보기 설정</button></div>
            <div className="service-list">
              {page.services.map((service, index) => (
                <article key={service.title}><span className="service-number">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><button type="button">{service.action}<ArrowRight size={16} /></button></article>
              ))}
            </div>
          </div>
          <aside className="service-side">
            <div className="info-notice"><AlertCircle size={19} /><div><strong>이용 안내</strong><p>{page.notice}</p></div></div>
            <div className="side-search"><strong>자료 검색</strong><p>필요한 공개자료를 검색해 보세요.</p><form onSubmit={(event) => event.preventDefault()}><input aria-label="자료 검색어" placeholder="검색어 입력" /><button type="submit" aria-label="검색"><Search size={17} /></button></form></div>
            <div className="side-download"><FileText size={20} /><div><strong>이용 가이드</strong><span>서비스 안내서 PDF</span></div><button type="button" aria-label="이용 가이드 다운로드"><Download size={17} /></button></div>
          </aside>
        </section>
      </div>
    </main>
  );
}
