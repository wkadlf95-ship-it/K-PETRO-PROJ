export function MascotGuide({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`mascot-guide${compact ? " is-compact" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 96 120" focusable="false">
        <path className="mascot-shadow" d="M24 112c10 6 39 6 50 0 5-3 3-8-5-10-10-3-29-3-40 0-8 2-11 7-5 10Z" />
        <path className="mascot-hair" d="M43 5c19 7 34 29 37 48 3 17-5 32-21 38-17 7-39 2-49-13C-2 60 8 38 30 27c12-6 18-12 13-22Z" />
        <path className="mascot-face" d="M22 42c9-12 16 6 25 7 12 1 21-16 31-4 11 13 4 37-15 45-19 9-43-1-49-19-3-10 1-21 8-29Z" />
        <path className="mascot-highlight" d="M31 24c8-4 17-11 13-19 9 10 2 25-16 36-7 4-12 9-16 16 1-13 8-25 19-33Z" />
        <path className="mascot-eye" d="M25 56c0-8 5-12 12-9 4 2 4 17 0 20-8 1-12-3-12-11Z" />
        <path className="mascot-eye" d="M61 56c0-8 5-12 12-9 4 2 4 17 0 20-8 1-12-3-12-11Z" />
        <path className="mascot-brow" d="M21 44c8-5 14-3 19 4" />
        <path className="mascot-brow" d="M61 48c6-5 13-6 20-2" />
        <path className="mascot-cheek" d="M16 66c0-4 4-7 9-7s9 3 9 7-4 7-9 7-9-3-9-7Z" />
        <path className="mascot-cheek" d="M65 66c0-4 4-7 9-7s9 3 9 7-4 7-9 7-9-3-9-7Z" />
        <circle className="mascot-nose" cx="48" cy="63" r="6" />
        <path className="mascot-mouth" d="M39 75c6 3 13 3 19 0-1 8-5 13-10 13s-9-5-9-13Z" />
        <path className="mascot-suit" d="M25 86h46l9 10-7 24H23l-7-24 9-10Z" />
        <path className="mascot-belt" d="M27 99c10 5 30 5 42 0" />
        <path className="mascot-hand" d="M16 89c-5-1-9-5-10-10-1-5 1-8 5-8 3 0 3 6 5 10l12 6-4 8-8-6Z" />
        <path className="mascot-hand" d="M79 94c7 1 12 5 12 10 0 5-5 8-11 8-7 0-13-4-13-9 0-5 5-9 12-9Z" />
      </svg>
    </span>
  );
}
