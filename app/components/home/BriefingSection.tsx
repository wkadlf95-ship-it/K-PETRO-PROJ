import { ArrowRight, CalendarDays, Headset } from "lucide-react";
import { briefingItems } from "../../data/sectionMock";
import { RouteLink } from "../common/RouteLink";

export function BriefingSection() {
  return (
    <section className="news-section" aria-labelledby="briefing-title">
      <div className="portal-container news-grid">
        <article className="briefing-card">
          <div className="briefing-top">
            <span><CalendarDays size={17} /> 오늘의 석유 브리핑</span>
            <small>2026.08.14</small>
          </div>
          <h2 id="briefing-title">오늘 석유시장을<br />3분 안에 살펴보세요</h2>
          <p>국제유가부터 국내 수급까지, 공개 가능한 자료를 바탕으로 매일 정리해 제공합니다.</p>
          <RouteLink to="/oil/briefing/today">브리핑 전체보기 <ArrowRight size={16} /></RouteLink>
        </article>

        <div className="briefing-items">
          {briefingItems.map((item, index) => (
            <RouteLink to="/oil/briefing/today" className="briefing-item" key={item.title}>
              <span className="briefing-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <em>자세히 보기 <ArrowRight size={13} /></em>
            </RouteLink>
          ))}
        </div>

        <aside className="support-mini">
          <Headset size={24} />
          <div>
            <strong>고객센터 1588-5166</strong>
            <p>평일 09:00–18:00 · 민원과 서비스 이용 문의를 안내합니다.</p>
          </div>
          <RouteLink to="/oil/briefing/today" className="support-mini-link">공지사항</RouteLink>
          <RouteLink to="/service/report/guide" aria-label="고객지원으로 이동"><ArrowRight size={17} /></RouteLink>
        </aside>
      </div>
    </section>
  );
}
