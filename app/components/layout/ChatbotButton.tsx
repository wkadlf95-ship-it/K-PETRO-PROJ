import { ExternalLink, Headphones, HelpCircle, X } from "lucide-react";
import { useState } from "react";
import { MascotGuide } from "../common/MascotGuide";
import { RouteLink } from "../common/RouteLink";

const LEGACY_CHATBOT_URL = "#legacy-chatbot-link";

export function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot__wrap">
      {open && (
        <div className="chatbot__panel" role="dialog" aria-label="챗봇 상담 연계">
          <div className="chatbot__head">
            <MascotGuide compact />
            <div>
              <strong>챗봇 상담 연계</strong>
              <span>기존 석유관리원 챗봇 연결용 임시 영역</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="닫기"><X size={18} /></button>
          </div>

          <div className="chatbot__body">
            <p>
              본 화면은 신규 AI 챗봇이 아니라 기존 석유관리원 챗봇을 연결하기 위한 임시 진입점입니다.
              연계 방식은 URL, API, 임베드 중 추후 확정됩니다.
            </p>
            <div className="chatbot__actions">
              <a href={LEGACY_CHATBOT_URL} className="chatbot__primary-link">
                기존 챗봇 열기 <ExternalLink size={14} />
              </a>
              <RouteLink to="/oil/support/search">
                <HelpCircle size={14} /> 이용 도움말
              </RouteLink>
              <a href="tel:1588-5166">
                <Headphones size={14} /> 고객센터 1588-5166
              </a>
            </div>
          </div>

          <div className="chatbot__note">
            1차 구축 범위: 기존 챗봇 화면 연계 / AICC·민원 자동분류는 확장 검토
          </div>
        </div>
      )}
      <button className="chatbot__button" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <MascotGuide compact />
        <span>챗봇 상담</span>
      </button>
    </div>
  );
}
