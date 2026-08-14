import { ExternalLink } from "lucide-react";
import { BrandLogo } from "../common/BrandLogo";
import { RouteLink } from "../common/RouteLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="portal-container footer-links">
          <RouteLink to="/about">기관소개</RouteLink>
          <a href="#privacy" className="strong">개인정보처리방침</a>
          <a href="#terms">이용약관</a>
          <a href="#accessibility">웹접근성</a>
          <a href="#sitemap">사이트맵</a>
        </div>
      </div>
      <div className="portal-container footer-body">
        <div>
          <BrandLogo compact />
          <p>충청북도 음성군 맹동면 두레로 51 한국석유관리원</p>
          <p>고객센터 1588-5166 · 대표전화 043-240-7900</p>
          <small>Copyright © K-PETRO. All rights reserved.</small>
        </div>
        <div className="related-sites">
          <a href="https://www.oilreport.or.kr/" target="_blank" rel="noreferrer">수급보고시스템 <ExternalLink size={14} /></a>
          <a href="#hydrogen">수소유통정보시스템 <ExternalLink size={14} /></a>
          <a href="#related">관련 사이트 <ExternalLink size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

