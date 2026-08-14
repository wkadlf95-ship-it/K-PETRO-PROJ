import { useMemo, useState } from "react";
import { Building2, Bus, ChevronDown, CircleCheckBig, MapPin, Phone, Search, Send, Train } from "lucide-react";

/* ── 일반 콘텐츠 ─────────────────────────────── */
export function ContentView({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="content-view">
      <p className="content-lead">{desc}</p>
      <h3>{title} 개요</h3>
      <p>
        한국석유관리원은 석유제품의 품질과 유통질서를 관리하여 국민이 안심하고 석유제품을 사용할 수 있도록
        지원합니다. {title}에 대한 세부 내용은 관련 법령과 내부 지침에 따라 운영됩니다.
      </p>
      <ul className="content-bullets">
        <li>관련 근거: 석유 및 석유대체연료 사업법 및 같은 법 시행령</li>
        <li>운영 기준: 한국석유관리원 업무 규정에 따른 절차 적용</li>
        <li>문의: 고객센터 1588-5166 (평일 09:00–18:00)</li>
      </ul>
      <h3>주요 내용</h3>
      <table className="data-table">
        <caption className="sr-only">{title} 주요 내용</caption>
        <thead>
          <tr><th scope="col">구분</th><th scope="col">내용</th><th scope="col">비고</th></tr>
        </thead>
        <tbody>
          <tr><td>대상</td><td>석유제품 제조·수입·판매 사업자 및 일반 국민</td><td>—</td></tr>
          <tr><td>절차</td><td>신청 접수 → 검토 → 처리 → 결과 통보</td><td>평균 7일</td></tr>
          <tr><td>수수료</td><td>관련 고시에 따름</td><td>일부 면제</td></tr>
        </tbody>
      </table>
      <p className="content-note">본 페이지의 내용은 화면 구성을 위한 예시이며, 실제 서비스에서는 기관 확정 콘텐츠로 대체됩니다.</p>
    </div>
  );
}

/* ── 자주하는 질문 ───────────────────────────── */
const faqCategories = ["전체", "품질검사", "신고·포상", "공공데이터", "사업자"];
const faqItems = [
  { cat: "품질검사", q: "품질검사 결과는 어디에서 확인할 수 있나요?", a: "정보공개 > 공공데이터 개방 > 연료품질정보에서 공개 가능한 검사 결과를 조회할 수 있습니다." },
  { cat: "품질검사", q: "연료 품질 확인서비스는 어떻게 신청하나요?", a: "고객서비스 > 서비스 정보 > 연료 품질 확인서비스에서 온라인으로 신청할 수 있으며, 접수 후 담당자가 연락드립니다." },
  { cat: "신고·포상", q: "가짜석유를 발견하면 어떻게 신고하나요?", a: "고객서비스 > 민원·신고하기 > 가짜석유·정량미달 소비자 신고에서 접수할 수 있습니다. 신고자 정보는 법령에 따라 보호됩니다." },
  { cat: "신고·포상", q: "포상금은 얼마나 지급되나요?", a: "위반 유형과 적발 규모에 따라 관련 고시가 정한 기준에 따라 차등 지급됩니다." },
  { cat: "공공데이터", q: "Open API 인증키는 어떻게 발급받나요?", a: "정보공개 > 공공데이터 개방 > Open API에서 이용 신청 후 발급받을 수 있습니다." },
  { cat: "사업자", q: "수급거래상황 보고는 어디서 하나요?", a: "석유제품 수급보고시스템(oilreport.or.kr)에서 전산으로 보고할 수 있습니다." },
];

export function FaqView() {
  const [cat, setCat] = useState("전체");
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(() => faqItems.filter((item) => {
    const byCat = cat === "전체" || item.cat === cat;
    const byWord = !keyword.trim() || (item.q + item.a).toLowerCase().includes(keyword.trim().toLowerCase());
    return byCat && byWord;
  }), [cat, keyword]);

  return (
    <div className="faq-view">
      <form className="faq-search" onSubmit={(e) => e.preventDefault()}>
        <Search size={17} aria-hidden="true" />
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} aria-label="질문 검색" placeholder="궁금한 내용을 검색하세요" />
      </form>
      <div className="faq-tabs" role="tablist" aria-label="질문 분류">
        {faqCategories.map((item) => (
          <button key={item} type="button" role="tab" aria-selected={cat === item} className={cat === item ? "is-active" : ""} onClick={() => { setCat(item); setOpen(null); }}>
            {item}
          </button>
        ))}
      </div>
      <ul className="faq-list">
        {list.length === 0 && <li className="faq-empty">검색 결과가 없습니다.</li>}
        {list.map((item, index) => (
          <li key={item.q}>
            <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
              <span className="faq-q">Q</span>
              <span>{item.q}</span>
              <ChevronDown size={17} className={open === index ? "is-open" : ""} />
            </button>
            {open === index && <div className="faq-answer"><span className="faq-a">A</span><p>{item.a}</p></div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── 조회 화면 ───────────────────────────────── */
export function SearchView({ title }: { title: string }) {
  const [region, setRegion] = useState("전체");
  const [product, setProduct] = useState("전체");
  const [submitted, setSubmitted] = useState(false);

  const regions = ["전체", "서울", "부산", "대구", "인천", "광주", "대전", "경기", "충북"];
  const products = ["전체", "휘발유", "경유", "등유", "LPG"];

  const results = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: `KP-2026-${String(1200 + i)}`,
    region: regions[(i % (regions.length - 1)) + 1],
    product: products[(i % (products.length - 1)) + 1],
    date: `2026.08.${String(14 - i).padStart(2, "0")}`,
    result: i % 7 === 0 ? "부적합" : "적합",
  })), []);

  const filtered = results.filter((row) =>
    (region === "전체" || row.region === region) && (product === "전체" || row.product === product));

  return (
    <div className="search-view">
      <form className="search-panel" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="search-field">
          <label htmlFor="sv-region">지역</label>
          <select id="sv-region" value={region} onChange={(e) => setRegion(e.target.value)}>
            {regions.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="search-field">
          <label htmlFor="sv-product">유종</label>
          <select id="sv-product" value={product} onChange={(e) => setProduct(e.target.value)}>
            {products.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="search-field">
          <label htmlFor="sv-date">조회기간</label>
          <input id="sv-date" type="month" defaultValue="2026-08" />
        </div>
        <button type="submit"><Search size={15} /> 조회</button>
      </form>

      <p className="search-count">
        {submitted ? "조회" : "기본"} 결과 <strong>{filtered.length}</strong>건 · {title}
      </p>
      <table className="data-table">
        <caption className="sr-only">{title} 조회 결과</caption>
        <thead>
          <tr><th scope="col">관리번호</th><th scope="col">지역</th><th scope="col">유종</th><th scope="col">검사일</th><th scope="col">결과</th></tr>
        </thead>
        <tbody>
          {filtered.length === 0 && <tr><td colSpan={5} className="board-empty">조건에 맞는 결과가 없습니다.</td></tr>}
          {filtered.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.region}</td>
              <td>{row.product}</td>
              <td>{row.date}</td>
              <td><span className={`result-badge ${row.result === "적합" ? "is-pass" : "is-fail"}`}>{row.result}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="content-note">개별 사업자 상세정보는 공개하지 않으며, 공개 가능한 집계 항목만 제공합니다.</p>
    </div>
  );
}

/* ── 신청·접수 폼 ────────────────────────────── */
export function FormView({ title }: { title: string }) {
  const [done, setDone] = useState(false);
  const [agree, setAgree] = useState(false);

  if (done) {
    return (
      <div className="form-done">
        <CircleCheckBig size={40} />
        <h3>접수가 완료되었습니다</h3>
        <p>접수번호 <strong>KP-2026-08140023</strong><br />처리 결과는 등록하신 연락처로 안내드립니다.</p>
        <button type="button" onClick={() => { setDone(false); setAgree(false); }}>다시 작성하기</button>
      </div>
    );
  }

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

/* ── 연혁 타임라인 ───────────────────────────── */
const historyData = [
  { year: "2020s", items: ["2026 대국민 석유정보 통합포털 개편", "2024 수소유통 전담기관 지정", "2022 미래기술연구소 확대 개편"] },
  { year: "2010s", items: ["2018 석유제품 수급보고시스템 고도화", "2015 국제공인시험기관 인정 확대", "2013 한국석유관리원으로 명칭 변경"] },
  { year: "2000s", items: ["2008 전국 지역본부 체계 정비", "2003 석유품질 검사 전산화"] },
  { year: "1980s", items: ["1983 한국석유품질검사소 설립"] },
];

export function TimelineView() {
  return (
    <div className="timeline-view">
      {historyData.map((group) => (
        <section key={group.year}>
          <h3>{group.year}</h3>
          <ul>
            {group.items.map((item) => {
              const [year, ...rest] = item.split(" ");
              return <li key={item}><strong>{year}</strong><span>{rest.join(" ")}</span></li>;
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

/* ── 조직도 ──────────────────────────────────── */
const orgData = [
  { name: "기획조정본부", teams: ["기획예산처", "경영지원처", "인재개발팀"] },
  { name: "품질관리본부", teams: ["품질기획처", "품질검사처", "시험분석센터"] },
  { name: "유통관리본부", teams: ["유통기획처", "유통검사처", "수급관리팀"] },
  { name: "미래기술연구소", teams: ["연구기획팀", "대체연료연구팀", "수소기술팀"] },
];

export function OrgView() {
  return (
    <div className="org-view">
      <div className="org-top"><span>이사장</span></div>
      <div className="org-sub"><span>감사</span><span>기획조정실</span></div>
      <div className="org-grid">
        {orgData.map((unit) => (
          <div className="org-unit" key={unit.name}>
            <strong>{unit.name}</strong>
            <ul>{unit.teams.map((team) => <li key={team}>{team}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 오시는길 ────────────────────────────────── */
const locations: Record<string, { name: string; addr: string; tel: string; train: string; bus: string }> = {
  hq: { name: "본사", addr: "충청북도 음성군 맹동면 두레로 51", tel: "043-240-7900", train: "KTX 오송역 → 버스 환승 약 40분", bus: "음성 혁신도시 방면 시내버스 이용" },
  lab: { name: "미래기술연구소", addr: "경기도 성남시 분당구 판교로 지역", tel: "031-000-0000", train: "신분당선 판교역 하차 도보 15분", bus: "판교테크노밸리 순환버스 이용" },
  regional: { name: "지역본부", addr: "전국 10개 지역본부 운영", tel: "1588-5166", train: "지역본부별 상이", bus: "지역본부별 상이" },
};

export function LocationView({ slug }: { slug: string }) {
  const info = locations[slug] ?? locations.hq;
  return (
    <div className="location-view">
      <div className="location-map" aria-hidden="true">
        <MapPin size={30} />
        <span>{info.name} 위치 안내</span>
      </div>
      <dl className="location-info">
        <div><dt><Building2 size={15} /> 주소</dt><dd>{info.addr}</dd></div>
        <div><dt><Phone size={15} /> 대표전화</dt><dd>{info.tel}</dd></div>
        <div><dt><Train size={15} /> 철도 이용</dt><dd>{info.train}</dd></div>
        <div><dt><Bus size={15} /> 버스 이용</dt><dd>{info.bus}</dd></div>
      </dl>
    </div>
  );
}
