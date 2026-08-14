import { Globe2 } from "lucide-react";
import { RouteLink } from "../common/RouteLink";

const shortcuts = [
  { label: "가격정보", path: "/oil/price/type" },
  { label: "품질검사 결과", path: "/oil/quality/result" },
  { label: "공공데이터", path: "/disclosure/opendata/catalog" },
  { label: "민원·신고", path: "/oil/report/guide" },
];

const utilityLinks = [
  { label: "회원가입", path: "/member/join" },
  { label: "로그인", path: "/member/login" },
  { label: "마이페이지", path: "/mypage" },
  { label: "방문신청", path: "/service/charter/facility" },
  { label: "사이트맵", path: "/sitemap" },
];

export function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="portal-container utility-inner">
        <nav aria-label="바로가기" className="institution-nav">
          {shortcuts.map((item) => (
            <RouteLink key={item.label} to={item.path}>{item.label}</RouteLink>
          ))}
        </nav>
        <div className="utility-actions">
          {utilityLinks.map((item) => (
            <RouteLink key={item.label} to={item.path}>{item.label}</RouteLink>
          ))}
          <button type="button"><Globe2 size={13} /> ENG</button>
        </div>
      </div>
    </div>
  );
}
