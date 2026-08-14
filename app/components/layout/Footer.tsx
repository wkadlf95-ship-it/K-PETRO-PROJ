import { ExternalLink, Headset } from "lucide-react";
import { BrandLogo } from "../common/BrandLogo";
import { RouteLink } from "../common/RouteLink";

const sitemapColumns: { title: string; path: string; links: string[] }[] = [
  { title: "기관소개", path: "/about/ceo/greeting", links: ["기관 소개", "주요업무", "ESG경영"] },
  { title: "공개정보", path: "/disclosure/open/list", links: ["정보공개", "법정 공표", "공공데이터 개방"] },
  { title: "석유정보", path: "/oil/price/type", links: ["가격정보", "품질정보", "유통통계"] },
  { title: "고객서비스", path: "/service/report/guide", links: ["민원·신고", "자료실", "사업자 지원"] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="portal-container footer-links">
          <RouteLink to="/about/ceo/greeting">기관소개</RouteLink>
          <a href="#privacy" className="strong">개인정보처리방침</a>
          <a href="#terms">이용약관</a>
          <a href="#accessibility">웹접근성</a>
          <a href="#sitemap">사이트맵</a>
          <RouteLink to="/service/report/guide">고객센터</RouteLink>
        </div>
      </div>

      <div className="portal-container footer-sitemap">
        {sitemapColumns.map((column) => (
          <div key={column.title}>
            <strong>{column.title}</strong>
            <ul>
              {column.links.map((link) => (
                <li key={link}><RouteLink to={column.path}>{link}</RouteLink></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-contact">
          <strong><Headset size={16} /> 고객센터</strong>
          <p className="footer-tel">1588-5166</p>
          <p>평일 09:00–18:00 (점심 12:00–13:00)</p>
          <p>주말·공휴일 휴무</p>
        </div>
      </div>

      <div className="portal-container footer-body">
        <div>
          <BrandLogo compact />
          <p>충청북도 음성군 맹동면 두레로 51 한국석유관리원</p>
          <p>대표전화 043-240-7900 · 고객센터 1588-5166</p>
          <small>Copyright © K-PETRO. All rights reserved.</small>
        </div>
        <div className="related-sites">
          <a href="https://www.oilreport.or.kr/" target="_blank" rel="noreferrer">수급보고시스템 바로가기 <ExternalLink size={14} /></a>
          <a href="#hydrogen">수소유통정보시스템 바로가기 <ExternalLink size={14} /></a>
          <a href="#related">관련 사이트 <ExternalLink size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
