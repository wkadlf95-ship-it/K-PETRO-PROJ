import { ArrowRight, Bell, CalendarDays, ChevronRight, FileText } from "lucide-react";
import { RouteLink } from "../common/RouteLink";

const notices = [
  { category: "품질정보", title: "석유제품 품질검사 결과 공개 안내", date: "2026.08.14" },
  { category: "공공데이터", title: "공공데이터 제공항목 변경 안내", date: "2026.08.11" },
  { category: "신고/포상", title: "신고포상금 제도 이용 안내", date: "2026.08.07" },
  { category: "공지", title: "대국민포털 시스템 점검 안내", date: "2026.08.02" },
];

export function NewsBriefing() {
  return (
    <section className="news-section">
      <div className="portal-container news-grid">
        <article className="briefing-card">
          <div className="briefing-top"><span><CalendarDays size={17} /> 오늘의 브리핑</span><small>2026.08.14</small></div>
          <h2>오늘 석유시장을<br />3분 안에 살펴보세요</h2>
          <ul><li>국제유가 동향</li><li>국내 유가 동향</li><li>유류세 및 정책 변화</li><li>석유제품 수급 동향</li></ul>
          <RouteLink to="/briefing">브리핑 전체보기 <ArrowRight size={16} /></RouteLink>
        </article>
        <article className="notice-card">
          <div className="notice-head"><div><span><Bell size={16} /> NOTICE</span><h2>공지사항</h2></div><RouteLink to="/briefing">전체보기 <ArrowRight size={15} /></RouteLink></div>
          <div className="notice-list">
            {notices.map((notice) => (
              <RouteLink to="/briefing" key={notice.title}><span className="notice-category">{notice.category}</span><strong>{notice.title}</strong><time>{notice.date}</time><ChevronRight size={16} /></RouteLink>
            ))}
          </div>
        </article>
        <aside className="support-mini">
          <FileText size={24} />
          <div><strong>신고·민원 안내</strong><p>불법 석유 유통 신고와 민원 서비스를 빠르게 이용하세요.</p></div>
          <RouteLink to="/report" aria-label="신고 민원 안내로 이동"><ArrowRight size={17} /></RouteLink>
        </aside>
      </div>
    </section>
  );
}

