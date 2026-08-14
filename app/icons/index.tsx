/**
 * 자체 제작 아이콘 세트.
 *
 * 외부 아이콘 라이브러리를 쓰지 않는다. 공공기관 납품 시 제3자 저작물
 * 고지·심의 부담을 없애기 위해 직접 그린 도형만 사용한다.
 *
 * 규격
 *  - 24×24 격자, stroke 기반, fill 없음
 *  - 색은 currentColor 를 따른다 (CSS 의 color 로 제어)
 *  - 기본 굵기 1.8, 끝·꼭짓점은 round
 *  - focusable="false" 로 IE/Edge 의 탭 순서 진입을 막는다
 *
 * 장식용이면 aria-hidden="true", 의미가 있으면 aria-label 을 넘긴다.
 */
import type { ComponentType, ReactNode, SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number;
  strokeWidth?: number;
};

/** 아이콘 컴포넌트 타입 (props 로 size·strokeWidth·className 을 받는다) */
export type IconComponent = ComponentType<IconProps>;

function Svg({ size = 20, strokeWidth = 1.8, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ── 방향 ── */
export const ArrowRight = (p: IconProps) => <Svg {...p}><path d="M4 12h15" /><path d="m12 5 7 7-7 7" /></Svg>;
export const ArrowUpRight = (p: IconProps) => <Svg {...p}><path d="M7 17 17 7" /><path d="M9 7h8v8" /></Svg>;
export const ChevronDown = (p: IconProps) => <Svg {...p}><path d="m6 9 6 6 6-6" /></Svg>;
export const ChevronLeft = (p: IconProps) => <Svg {...p}><path d="m15 5-7 7 7 7" /></Svg>;
export const ChevronRight = (p: IconProps) => <Svg {...p}><path d="m9 5 7 7-7 7" /></Svg>;
export const TrendingUp = (p: IconProps) => <Svg {...p}><path d="m3 16 6-6 4 4 8-8" /><path d="M15 6h6v6" /></Svg>;
export const TrendingDown = (p: IconProps) => <Svg {...p}><path d="m3 8 6 6 4-4 8 8" /><path d="M15 18h6v-6" /></Svg>;
export const Minus = (p: IconProps) => <Svg {...p}><path d="M5 12h14" /></Svg>;
export const Plus = (p: IconProps) => <Svg {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Svg>;
export const X = (p: IconProps) => <Svg {...p}><path d="m6 6 12 12" /><path d="m18 6-12 12" /></Svg>;

/* ── 조작 ── */
export const Search = (p: IconProps) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></Svg>;
export const Filter = (p: IconProps) => <Svg {...p}><path d="M4 5h16l-6 7.5V20l-4-2.2v-5.3z" /></Svg>;
export const Menu = (p: IconProps) => <Svg {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></Svg>;
export const LayoutGrid = (p: IconProps) => (
  <Svg {...p}><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></Svg>
);
export const GripVertical = (p: IconProps) => (
  <Svg {...p} strokeWidth={p.strokeWidth ?? 2.4}><path d="M9 6h.01" /><path d="M9 12h.01" /><path d="M9 18h.01" /><path d="M15 6h.01" /><path d="M15 12h.01" /><path d="M15 18h.01" /></Svg>
);
export const Play = (p: IconProps) => <Svg {...p}><path d="m8 5 11 7-11 7z" /></Svg>;
export const Pause = (p: IconProps) => <Svg {...p}><path d="M9 5v14" /><path d="M15 5v14" /></Svg>;
export const RotateCcw = (p: IconProps) => <Svg {...p}><path d="M4 12a8 8 0 1 0 2.4-5.7" /><path d="M4 5v5h5" /></Svg>;
export const Save = (p: IconProps) => <Svg {...p}><path d="M5 4h11l4 4v12H5z" /><path d="M9 4v5h6V4" /><path d="M8 14h8v6H8z" /></Svg>;
export const Download = (p: IconProps) => <Svg {...p}><path d="M12 4v11" /><path d="m7 11 5 5 5-5" /><path d="M4 20h16" /></Svg>;
export const Send = (p: IconProps) => <Svg {...p}><path d="M20 4 3 11l7 3 3 7z" /><path d="m10 14 4-4" /></Svg>;
export const Printer = (p: IconProps) => <Svg {...p}><path d="M7 9V3h10v6" /><path d="M7 17H4V9h16v8h-3" /><path d="M7 13h10v8H7z" /></Svg>;
export const Share2 = (p: IconProps) => (
  <Svg {...p}><circle cx="6" cy="12" r="2.5" /><circle cx="17" cy="6" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="m8.3 10.8 6.4-3.4" /><path d="m8.3 13.2 6.4 3.4" /></Svg>
);
export const ExternalLink = (p: IconProps) => (
  <Svg {...p}><path d="M14 4h6v6" /><path d="M20 4l-8 8" /><path d="M18 14v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5" /></Svg>
);
export const Paperclip = (p: IconProps) => <Svg {...p}><path d="M17 8v8.5a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v9.2a1.2 1.2 0 0 1-2.4 0V8.5" /></Svg>;

/* ── 상태·안내 ── */
export const Info = (p: IconProps) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v6" /><path d="M12 8h.01" /></Svg>;
export const HelpCircle = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M9.6 9.3A2.5 2.5 0 1 1 13 11.7c-.6.4-1 .9-1 1.6v.4" /><path d="M12 17h.01" /></Svg>
);
export const TriangleAlert = (p: IconProps) => <Svg {...p}><path d="M12 4 3 19.5h18z" /><path d="M12 10v4" /><path d="M12 17h.01" /></Svg>;
export const AlertTriangle = TriangleAlert;
export const CircleCheckBig = (p: IconProps) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></Svg>;
export const CheckCircle2 = CircleCheckBig;
export const ShieldCheck = (p: IconProps) => (
  <Svg {...p}><path d="M12 3l7 3v6c0 4.8-3.4 7.9-7 9-3.6-1.1-7-4.2-7-9V6z" /><path d="m9 12 2 2 4-4" /></Svg>
);
export const Siren = (p: IconProps) => (
  <Svg {...p}><path d="M7 17v-5a5 5 0 0 1 10 0v5z" /><path d="M5 20h14" /><path d="M12 3v1.5" /><path d="m5 8 1.3.7" /><path d="m19 8-1.3.7" /></Svg>
);
export const Bell = (p: IconProps) => <Svg {...p}><path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4.5 2 5.5 2 5.5h-15S6.5 14.5 6.5 10z" /><path d="M10 19a2 2 0 0 0 4 0" /></Svg>;
export const Star = (p: IconProps) => <Svg {...p}><path d="m12 4 2.4 5.3 5.6.7-4.1 4 1 5.7-4.9-2.8-4.9 2.8 1-5.7L4 10l5.6-.7z" /></Svg>;
export const Award = (p: IconProps) => <Svg {...p}><circle cx="12" cy="9" r="5.5" /><path d="m8.5 14 -1.5 7 5-2.8 5 2.8-1.5-7" /></Svg>;
export const Medal = (p: IconProps) => <Svg {...p}><path d="m8 3 3.2 5.2" /><path d="m16 3-3.2 5.2" /><circle cx="12" cy="15" r="5.5" /><path d="m12 12.5 1 2h2l-1.5 1.6.4 2.2-1.9-1.1-1.9 1.1.4-2.2L9 14.5h2z" /></Svg>;

/* ── 문서·자료 ── */
export const FileText = (p: IconProps) => <Svg {...p}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 12h6" /><path d="M9 16h6" /></Svg>;
export const FileSearch = (p: IconProps) => (
  <Svg {...p}><path d="M6 3h8l4 4v6" /><path d="M6 3v18h5" /><path d="M14 3v4h4" /><circle cx="16" cy="17" r="3.2" /><path d="m18.4 19.4 2.1 2.1" /></Svg>
);
export const ClipboardCheck = (p: IconProps) => (
  <Svg {...p}><path d="M9 4H7a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2" /><rect x="9" y="2.5" width="6" height="3.5" rx="1" /><path d="m9.5 13 2 2 3.5-4" /></Svg>
);
export const Newspaper = (p: IconProps) => (
  <Svg {...p}><path d="M4 6h13v14H5a1 1 0 0 1-1-1z" /><path d="M17 10h3v9a1 1 0 0 1-1 1h-2" /><path d="M7 10h7" /><path d="M7 14h7" /><path d="M7 17h4" /></Svg>
);
export const Scale = (p: IconProps) => (
  <Svg {...p}><path d="M12 4v16" /><path d="M7 8h10" /><path d="m7 8-3 6h6z" /><path d="m17 8-3 6h6z" /><path d="M8 20h8" /></Svg>
);
export const Landmark = (p: IconProps) => (
  <Svg {...p}><path d="m3 10 9-6 9 6" /><path d="M5 10v10" /><path d="M19 10v10" /><path d="M9.5 10v10" /><path d="M14.5 10v10" /><path d="M3 20h18" /></Svg>
);

/* ── 측정·통계 ── */
export const ChartColumnBig = (p: IconProps) => (
  <Svg {...p}><path d="M4 20h17" /><path d="M5 20v-7h4v7" /><path d="M11 20V5h4v15" /><path d="M17 20v-4h3v4" /></Svg>
);
export const BarChart3 = ChartColumnBig;
export const ChartPie = (p: IconProps) => <Svg {...p}><path d="M12 3a9 9 0 1 0 9 9h-9z" /><path d="M12 3v9h9" /></Svg>;
export const FlaskConical = (p: IconProps) => (
  <Svg {...p}><path d="M9.5 3v6.5L4.5 20h15L14.5 9.5V3" /><path d="M8 3h8" /><path d="M7 15h10" /></Svg>
);
export const Fuel = (p: IconProps) => (
  <Svg {...p}><path d="M5 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" /><path d="M5 11h8" /><path d="M4 21h10" /><path d="M13 7h3a2 2 0 0 1 2 2v8a1.5 1.5 0 0 0 3 0v-6" /></Svg>
);

/* ── 위치·이동 ── */
export const MapPin = (p: IconProps) => <Svg {...p}><path d="M12 21c4-4.6 7-7.7 7-11a7 7 0 1 0-14 0c0 3.3 3 6.4 7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>;
export const MapPinned = (p: IconProps) => (
  <Svg {...p}><path d="M12 15c3-3.4 5-5.7 5-8a5 5 0 1 0-10 0c0 2.3 2 4.6 5 8z" /><circle cx="12" cy="7" r="1.8" /><path d="M5 18l-1 3h16l-1-3" /></Svg>
);
export const Ship = (p: IconProps) => (
  <Svg {...p}><path d="M3 15h18l-2 5H5z" /><path d="M5.5 15V9h13v6" /><path d="M12 5v4" /><path d="M9 9V7h6v2" /></Svg>
);
export const Train = (p: IconProps) => (
  <Svg {...p}><rect x="6" y="3" width="12" height="13" rx="2" /><path d="M6 10h12" /><path d="M9.5 6.5h.01" /><path d="M14.5 6.5h.01" /><path d="m7 21 2.5-3" /><path d="m17 21-2.5-3" /></Svg>
);
export const Bus = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M3 10h18" /><path d="M7 20v-2" /><path d="M17 20v-2" /><path d="M6.5 13h.01" /><path d="M17.5 13h.01" /></Svg>
);

/* ── 사람·연락 ── */
export const UserRound = (p: IconProps) => <Svg {...p}><circle cx="12" cy="8" r="4" /><path d="M5 20a7 7 0 0 1 14 0" /></Svg>;
export const LogIn = (p: IconProps) => <Svg {...p}><path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" /><path d="M13 12h8" /><path d="m18 9 3 3-3 3" /></Svg>;
export const Mail = (p: IconProps) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></Svg>;
export const Phone = (p: IconProps) => (
  <Svg {...p}><path d="M5 4h3.5l1.8 4.4-2 1.6a12.5 12.5 0 0 0 5.7 5.7l1.6-2L20 15.5V19a1 1 0 0 1-1.1 1A16.5 16.5 0 0 1 4 5.1 1 1 0 0 1 5 4z" /></Svg>
);
export const Headphones = (p: IconProps) => (
  <Svg {...p}><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><path d="M4 15h3v5H5.5A1.5 1.5 0 0 1 4 18.5z" /><path d="M20 15h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5z" /></Svg>
);
export const Headset = (p: IconProps) => (
  <Svg {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h3v5H5.5A1.5 1.5 0 0 1 4 17.5z" /><path d="M20 14h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5z" /><path d="M17 19v.5a1.5 1.5 0 0 1-1.5 1.5H12" /></Svg>
);
export const Bot = (p: IconProps) => (
  <Svg {...p}><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4" /><path d="M9.5 13h.01" /><path d="M14.5 13h.01" /><path d="M10 16h4" /></Svg>
);

/* ── 기관·기타 ── */
export const Building2 = (p: IconProps) => (
  <Svg {...p}><path d="M4 21V6.5l7-2.5V21" /><path d="M11 10h9v11" /><path d="M14.5 14h2" /><path d="M14.5 17.5h2" /><path d="M7 9h1" /><path d="M7 13h1" /><path d="M3 21h18" /></Svg>
);
export const Home = (p: IconProps) => <Svg {...p}><path d="m3 11 9-7 9 7" /><path d="M5 9.5V20h14V9.5" /><path d="M10 20v-5.5h4V20" /></Svg>;
export const CalendarDays = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 17.5h.01" /><path d="M12 17.5h.01" /></Svg>
);
export const Globe2 = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z" /></Svg>
);
