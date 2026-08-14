import { RouteLink } from "./RouteLink";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <RouteLink to="/" className="brand" aria-label="K-PETRO 대국민포털 홈">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-copy">
        <strong>K-PETRO</strong>
        {!compact && <small>한국석유관리원 대국민포털</small>}
      </span>
    </RouteLink>
  );
}

