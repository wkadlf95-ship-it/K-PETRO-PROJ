import { useState } from "react";
import { Bell, ChevronRight, Fuel, Home, LayoutDashboard, MapPin, Newspaper } from "lucide-react";
import { RouteLink } from "../components/common/RouteLink";
import { StatusBadge } from "../components/common/StatusBadge";

type Tab = "home" | "interest" | "notification";

const TABS: { key: Tab; label: string; status: string }[] = [
  { key: "home", label: "마이페이지 홈", status: "협의중·검토" },
  { key: "interest", label: "관심정보 관리", status: "미정·필수" },
  { key: "notification", label: "알림 수신설정", status: "미정·검토" },
];

const widgets = [
  { icon: Fuel, label: "관심 유종", value: "2종", note: "휘발유 · 경유" },
  { icon: MapPin, label: "관심 주유소", value: "3곳", note: "수도권 기준" },
  { icon: Newspaper, label: "구독 종목", value: "1건", note: "휘발유 · 수도권" },
];

const interestSettings = [
  { title: "관심 유종 알림 등록", description: "유종별 가격 변동을 알림으로 받습니다." },
  { title: "관심 주유소 등록", description: "자주 이용하는 주유소를 등록합니다." },
  { title: "구독종목 대시보드", description: "구독 설정한 유종·지역 정보를 모아봅니다." },
];

const notificationChannels = [
  { channel: "알림톡", status: "수신 동의" },
  { channel: "SMS", status: "수신 거부" },
  { channel: "이메일", status: "수신 동의" },
];

export function MyPage() {
  const [tab, setTab] = useState<Tab>("home");
  const current = TABS.find((item) => item.key === tab)!;

  return (
    <main className="subpage">
      <div className="sub-hero">
        <div className="portal-container">
          <nav className="breadcrumb" aria-label="현재 위치">
            <RouteLink to="/" aria-label="홈"><Home size={14} /></RouteLink>
            <ChevronRight size={13} />
            <strong>마이페이지</strong>
          </nav>
          <StatusBadge status={current.status} />
          <h1>마이페이지</h1>
          <p>로그인 사용자가 본인의 관심정보·알림설정 등 개인화 정보를 관리합니다.</p>
        </div>
      </div>

      <div className="sub-tabs-wrap">
        <nav className="portal-container sub-tabs" aria-label="마이페이지 메뉴">
          {TABS.map((item) => (
            <button key={item.key} type="button" className={tab === item.key ? "is-active" : ""} onClick={() => setTab(item.key)}>{item.label}</button>
          ))}
        </nav>
      </div>

      <div className="portal-container sub-content">
        <p className="content-note" style={{ marginBottom: 22 }}>🔒 로그인 후 이용 가능한 화면이며, 아래는 시연을 위한 샘플 데이터입니다.</p>

        <section className="mypage-widgets" aria-label="개인화 요약">
          {widgets.map((widget) => (
            <article className="mypage-widget" key={widget.label}>
              <span><widget.icon size={17} /></span>
              <div><small>{widget.label}</small><strong>{widget.value}</strong><p>{widget.note}</p></div>
            </article>
          ))}
        </section>

        {tab === "home" && (
          <section className="mypage-settings">
            <article><div><h3>개인화 설정 조회</h3><p>관심정보와 알림설정 현황을 확인합니다.</p></div><button type="button" onClick={() => setTab("interest")}>설정 보기</button></article>
            <article><div><h3>회원정보 관리</h3><p>가입정보와 비밀번호를 관리합니다.</p></div><button type="button"><LayoutDashboard size={14} /> 정보 관리</button></article>
          </section>
        )}

        {tab === "interest" && (
          <section className="mypage-settings">
            {interestSettings.map((item) => (
              <article key={item.title}><div><h3>{item.title}</h3><p>{item.description}</p></div><button type="button">설정하기</button></article>
            ))}
          </section>
        )}

        {tab === "notification" && (
          <section className="mypage-settings">
            {notificationChannels.map((item) => (
              <article key={item.channel}><div><h3><Bell size={14} /> {item.channel}</h3><p>현재 상태: {item.status}</p></div><button type="button">변경하기</button></article>
            ))}
          </section>
        )}

        <p className="content-note">구독 항목 범위(유종/지역/주유소)와 발송비용·동의 방식은 관련 부서와 협의가 필요합니다.</p>
      </div>
    </main>
  );
}
