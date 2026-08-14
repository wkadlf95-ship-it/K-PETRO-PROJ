export type ChartSeries = { name: string; color: string; values: number[] };

export const priceTrend: { updatedAt: string; labels: string[]; series: ChartSeries[] } = {
  updatedAt: "2026.08.14 기준",
  labels: ["8/10", "8/11", "8/12", "8/13", "8/14"],
  series: [
    { name: "휘발유", color: "var(--chart-1)", values: [1685, 1692, 1688, 1679, 1685] },
    { name: "경유", color: "var(--chart-2)", values: [1548, 1551, 1545, 1542, 1548] },
  ],
};

export type ShareSlice = { name: string; value: number; color: string };

export const distributionShare: ShareSlice[] = [
  { name: "경유", value: 41, color: "var(--chart-1)" },
  { name: "휘발유", value: 32, color: "var(--chart-2)" },
  { name: "LPG", value: 12, color: "var(--chart-3)" },
  { name: "등유", value: 8, color: "var(--chart-4)" },
  { name: "기타", value: 7, color: "var(--chart-5)" },
];

export const distributionTotal = { value: "8,420", unit: "천 kL / 월" };

export const crudeTransport = {
  updatedAt: "주 1회 공개",
  stats: [
    { label: "입항예정 선박 수", value: "12", unit: "척" },
    { label: "확보예정 물량", value: "1,240", unit: "천 배럴" },
  ],
  origins: [
    { country: "사우디아라비아", share: 46 },
    { country: "미국", share: 31 },
    { country: "쿠웨이트", share: 23 },
  ],
};

export const anomalySummary = {
  openCount: 3,
  items: [
    { title: "유통량 급변동 요약", level: "확인 중", note: "특정 권역 월간 유통량 편차 확대" },
    { title: "품질검사 부적합 집중 구간", level: "조치 진행", note: "동일 유종 부적합 비율 상승 구간" },
    { title: "수급보고 지연 요약", level: "조치 완료", note: "보고 지연 사례 집계 후 안내" },
  ],
  // 공개하지 않는 항목. 화면에 명시적으로 안내합니다.
  restrictions: ["개별 사업자 상세정보", "개별 선박 실시간 위치", "내부 판단 근거"],
};
