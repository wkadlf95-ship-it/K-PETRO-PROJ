import { RouteLink } from "./RouteLink";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <RouteLink to="/" className={`brand${compact ? " is-compact" : ""}`} aria-label="K Petro 한국석유관리원 대국민포털 홈">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 88 64" focusable="false">
          <path className="brand-mark-dark" d="M16 8h19L26 56H7L16 8Z" />
          <path className="brand-mark-dark" d="M40 15h21L38 34l24 22H39L20 37l3-17 16 15L40 15Z" />
          <path className="brand-mark-green" d="M39 8h44c3 0 4 4 1 6L37 43 24 30 36 18c2-2 3-5 3-10Z" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>K Petro</strong>
        {!compact && <small>한국석유관리원</small>}
      </span>
    </RouteLink>
  );
}
