import { Bot, Send, X } from "lucide-react";
import { useState } from "react";

export function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot-wrap">
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="석유정보 챗봇">
          <div className="chatbot-head"><div><strong>석유정보 챗봇</strong><span>궁금한 서비스를 안내해 드려요.</span></div><button type="button" onClick={() => setOpen(false)} aria-label="닫기"><X size={18} /></button></div>
          <div className="chatbot-body"><p>안녕하세요. 무엇을 도와드릴까요?</p><div><button type="button">오늘의 가격</button><button type="button">품질검사 결과</button><button type="button">신고 안내</button></div></div>
          <form className="chatbot-input" onSubmit={(event) => event.preventDefault()}><input aria-label="챗봇 질문" placeholder="질문을 입력하세요" /><button type="submit" aria-label="전송"><Send size={17} /></button></form>
        </div>
      )}
      <button className="chatbot-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open}><Bot size={21} /><span>석유정보 챗봇 상담</span></button>
    </div>
  );
}

