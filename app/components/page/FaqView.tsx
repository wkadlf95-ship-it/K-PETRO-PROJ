import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqCategories, faqItems } from "../../data/pageMock";

export function FaqView() {
  const [cat, setCat] = useState("전체");
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const list = useMemo(
    () =>
      faqItems.filter((item) => {
        const byCat = cat === "전체" || item.cat === cat;
        const byWord = !keyword.trim() || (item.q + item.a).toLowerCase().includes(keyword.trim().toLowerCase());
        return byCat && byWord;
      }),
    [cat, keyword],
  );

  return (
    <div className="faq-view">
      <form className="faq-search" onSubmit={(e) => e.preventDefault()}>
        <Search size={17} aria-hidden="true" />
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          aria-label="질문 검색"
          placeholder="궁금한 내용을 검색하세요"
        />
      </form>

      <div className="faq-tabs" role="tablist" aria-label="질문 분류">
        {faqCategories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={cat === item}
            className={cat === item ? "is-active" : ""}
            onClick={() => { setCat(item); setOpen(null); }}
          >
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
            {open === index && (
              <div className="faq-answer">
                <span className="faq-a">A</span>
                <p>{item.a}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
