import { ClipboardCheck, FlaskConical, LockKeyhole, MessageCircle, Monitor, Settings, ShipWheel, WalletCards } from "lucide-react";
import type { ComponentType } from "react";
import { RouteLink } from "../common/RouteLink";

const frequentServices: { title: string; path: string; icon: ComponentType<{ size?: number; strokeWidth?: number }> ; tone: string }[] = [
  { title: "수소유통정보시스템", path: "/distribution", icon: ShipWheel, tone: "mint" },
  { title: "종합시험시스템", path: "/quality", icon: ClipboardCheck, tone: "yellow" },
  { title: "의뢰시험시스템", path: "/quality", icon: FlaskConical, tone: "lavender" },
  { title: "수급보고시스템", path: "/distribution", icon: Monitor, tone: "blue" },
  { title: "환급시스템", path: "/support", icon: WalletCards, tone: "stone" },
  { title: "개인정보처리방침", path: "/disclosure", icon: LockKeyhole, tone: "coral" },
  { title: "오일톡톡", path: "/briefing", icon: MessageCircle, tone: "charcoal" },
];

export function FrequentServices() {
  return (
    <section className="frequent-wrap" aria-labelledby="frequent-title">
      <div className="portal-container frequent-card">
        <div className="frequent-head">
          <h2 id="frequent-title">자주 찾는 정보</h2>
          <button type="button"><Settings size={17} /> 설정하기</button>
        </div>
        <div className="frequent-grid">
          {frequentServices.map(({ title, path, icon: Icon, tone }) => (
            <RouteLink to={path} className="frequent-item" key={title}>
              <span className={`frequent-icon ${tone}`}><Icon size={29} strokeWidth={1.8} /></span>
              <strong>{title}</strong>
            </RouteLink>
          ))}
        </div>
      </div>
    </section>
  );
}

