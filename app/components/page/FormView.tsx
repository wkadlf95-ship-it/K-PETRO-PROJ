import { useState } from "react";
import { CircleCheckBig, Send } from "lucide-react";

function FormDone({ onReset }: { onReset: () => void }) {
  return (
    <div className="form-done">
      <CircleCheckBig size={40} />
      <h3>접수가 완료되었습니다</h3>
      <p>
        접수번호 <strong>KP-2026-08140023</strong>
        <br />처리 결과는 등록하신 연락처로 안내드립니다.
      </p>
      <button type="button" onClick={onReset}>다시 작성하기</button>
    </div>
  );
}

export function FormView({ title }: { title: string }) {
  const [done, setDone] = useState(false);
  const [agree, setAgree] = useState(false);

  if (done) return <FormDone onReset={() => { setDone(false); setAgree(false); }} />;

  return (
    <form className="form-view" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <p className="content-lead">{title} 신청서를 작성해 주세요. <em>*</em> 표시는 필수 입력 항목입니다.</p>

      <div className="form-grid">
        <div className="form-row">
          <label htmlFor="f-name">성명 <em>*</em></label>
          <input id="f-name" required placeholder="홍길동" />
        </div>
        <div className="form-row">
          <label htmlFor="f-tel">연락처 <em>*</em></label>
          <input id="f-tel" required type="tel" placeholder="010-0000-0000" />
        </div>
        <div className="form-row">
          <label htmlFor="f-email">이메일</label>
          <input id="f-email" type="email" placeholder="name@example.com" />
        </div>
        <div className="form-row">
          <label htmlFor="f-region">지역 <em>*</em></label>
          <select id="f-region" required defaultValue="">
            <option value="" disabled>선택하세요</option>
            <option>서울</option><option>경기</option><option>충북</option><option>부산</option>
          </select>
        </div>
        <div className="form-row form-row-full">
          <label htmlFor="f-title">제목 <em>*</em></label>
          <input id="f-title" required placeholder="내용을 요약해 입력하세요" />
        </div>
        <div className="form-row form-row-full">
          <label htmlFor="f-body">내용 <em>*</em></label>
          <textarea id="f-body" required rows={7} placeholder="구체적인 내용을 입력해 주세요" />
        </div>
        <div className="form-row form-row-full">
          <label htmlFor="f-file">첨부파일</label>
          <input id="f-file" type="file" />
        </div>
      </div>

      <label className="form-agree">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span>개인정보 수집·이용에 동의합니다. 수집한 정보는 처리 목적 외에는 이용하지 않습니다.</span>
      </label>

      <div className="form-actions">
        <button type="submit" disabled={!agree}><Send size={15} /> 접수하기</button>
        <button type="reset">취소</button>
      </div>
    </form>
  );
}
