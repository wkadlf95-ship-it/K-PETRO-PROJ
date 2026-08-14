import { Search } from "lucide-react";

export function HeaderSearch() {
  return (
    <div className="header-search-panel">
      <form className="portal-container header-search" onSubmit={(event) => event.preventDefault()}>
        <Search size={20} aria-hidden="true" />
        <input
          autoFocus
          aria-label="통합검색어"
          placeholder="가격정보, 품질검사, 유통통계, 신고 서비스를 검색해 보세요"
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}
