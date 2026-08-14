import { ExternalLink, Headset } from "../../icons";
import { footerSitemapColumns, relatedSites } from "../../data/sectionMock";
import { BrandLogo } from "../common/BrandLogo";
import { RouteLink } from "../common/RouteLink";

function FooterPolicyLinks() {
  return (
    <div className="footer__top">
      <div className="portal-container footer__links">
        <RouteLink to="/about/ceo/greeting">기관소개</RouteLink>
        <a href="#privacy" className="strong">개인정보처리방침</a>
        <a href="#terms">이용약관</a>
        <a href="#accessibility">웹접근성</a>
        <a href="#sitemap">사이트맵</a>
        <RouteLink to="/service/report/guide">고객센터</RouteLink>
      </div>
    </div>
  );
}

function FooterSitemap() {
  return (
    <div className="portal-container footer__sitemap">
      {footerSitemapColumns.map((column) => (
        <div key={column.title}>
          <strong>{column.title}</strong>
          <ul>
            {column.links.map((link) => (
              <li key={link}><RouteLink to={column.path}>{link}</RouteLink></li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer__contact">
        <strong><Headset size={16} /> 고객센터</strong>
        <p className="footer__tel">1588-5166</p>
        <p>평일 09:00–18:00 (점심 12:00–13:00)</p>
        <p>주말·공휴일 휴무</p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <FooterPolicyLinks />
      <FooterSitemap />
      <div className="portal-container footer__body">
        <div>
          <BrandLogo compact />
          <p>충청북도 음성군 맹동면 두레로 51 한국석유관리원</p>
          <p>대표전화 043-240-7900 · 고객센터 1588-5166</p>
          <small>Copyright © K-PETRO. All rights reserved.</small>
        </div>
        <div className="related-sites">
          {relatedSites.map((site) => (
            <a key={site.label} href={site.href} target={site.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {site.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
