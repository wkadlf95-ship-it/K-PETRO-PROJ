import { Fragment, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Paperclip, Search } from "lucide-react";
import { buildBoardRows, type BoardRow } from "../../data/pageMock";

const PAGE_SIZE = 10;

function BoardDetail({ row, title }: { row: BoardRow; title: string }) {
  return (
    <div className="board-detail">
      <h3>{row.title}</h3>
      <dl>
        <div><dt>담당부서</dt><dd>{row.dept}</dd></div>
        <div><dt>등록일</dt><dd>{row.date}</dd></div>
        <div><dt>조회수</dt><dd>{row.views.toLocaleString()}</dd></div>
      </dl>
      <p>
        본 게시물은 화면 구성을 위한 예시 데이터입니다. 실제 서비스에서는 {title} 관련 상세 내용과
        관련 법령, 문의처가 이 영역에 표시됩니다.
      </p>
      {row.file && (
        <a className="board-file" href="#download" onClick={(e) => e.preventDefault()}>
          <Download size={15} /> {row.title}.pdf <span>(1.2MB)</span>
        </a>
      )}
    </div>
  );
}

function BoardPager({ current, total, onChange }: { current: number; total: number; onChange: (n: number) => void }) {
  return (
    <nav className="board-pager" aria-label="페이지 이동">
      <button type="button" onClick={() => onChange(Math.max(1, current - 1))} disabled={current === 1} aria-label="이전 페이지">
        <ChevronLeft size={16} />
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button key={n} type="button" className={n === current ? "is-active" : ""} aria-current={n === current} onClick={() => onChange(n)}>
          {n}
        </button>
      ))}
      <button type="button" onClick={() => onChange(Math.min(total, current + 1))} disabled={current === total} aria-label="다음 페이지">
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}

export function BoardView({ title }: { title: string }) {
  const [field, setField] = useState("title");
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [openRow, setOpenRow] = useState<number | null>(null);

  const rows = useMemo(() => buildBoardRows(title), [title]);

  const filtered = useMemo(() => {
    if (!query.trim()) return rows;
    const q = query.trim().toLowerCase();
    return rows.filter((row) => (field === "dept" ? row.dept : row.title).toLowerCase().includes(q));
  }, [rows, query, field]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const pageRows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(keyword);
    setPage(1);
    setOpenRow(null);
  };

  return (
    <div className="board">
      <div className="board-top">
        <p>총 <strong>{filtered.length}</strong>건 · {current}/{totalPages} 페이지</p>
        <form className="board-search" onSubmit={submit}>
          <label className="sr-only" htmlFor="board-field">검색 조건</label>
          <select id="board-field" value={field} onChange={(e) => setField(e.target.value)}>
            <option value="title">제목</option>
            <option value="dept">담당부서</option>
          </select>
          <label className="sr-only" htmlFor="board-keyword">검색어</label>
          <input id="board-keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="검색어를 입력하세요" />
          <button type="submit"><Search size={15} /> 검색</button>
        </form>
      </div>

      <table className="board-table">
        <caption className="sr-only">{title} 목록</caption>
        <thead>
          <tr>
            <th scope="col" className="col-no">번호</th>
            <th scope="col">제목</th>
            <th scope="col" className="col-dept">담당부서</th>
            <th scope="col" className="col-date">등록일</th>
            <th scope="col" className="col-views">조회</th>
          </tr>
        </thead>
        <tbody>
          {pageRows.length === 0 && <tr><td colSpan={5} className="board-empty">검색 결과가 없습니다.</td></tr>}
          {pageRows.map((row) => (
            <Fragment key={row.no}>
              <tr>
                <td className="col-no">{row.no}</td>
                <td className="col-title">
                  <button type="button" onClick={() => setOpenRow(openRow === row.no ? null : row.no)} aria-expanded={openRow === row.no}>
                    {row.title}
                  </button>
                  {row.file && <Paperclip size={13} aria-label="첨부파일 있음" />}
                </td>
                <td className="col-dept">{row.dept}</td>
                <td className="col-date">{row.date}</td>
                <td className="col-views">{row.views.toLocaleString()}</td>
              </tr>
              {openRow === row.no && (
                <tr className="board-detail-row">
                  <td colSpan={5}><BoardDetail row={row} title={title} /></td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <BoardPager current={current} total={totalPages} onChange={setPage} />
    </div>
  );
}
