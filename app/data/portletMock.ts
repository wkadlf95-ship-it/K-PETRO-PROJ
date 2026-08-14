/** 가격 화면 포틀릿용 mock data. 실제로는 /api/ops/price-* 응답으로 대체된다. */

export const priceKpis: { label: string; value: string; unit: string; delta: number }[] = [
  { label: "자동차용 휘발유", value: "1,685", unit: "원/L", delta: -2 },
  { label: "자동차용 경유", value: "1,548", unit: "원/L", delta: 3 },
  { label: "자동차용 부탄", value: "1,099", unit: "원/L", delta: 0 },
];

export const priceByProduct: { product: string; avg: string; high: string; low: string; delta: number }[] = [
  { product: "휘발유", avg: "1,685", high: "1,842", low: "1,559", delta: -2 },
  { product: "경유", avg: "1,548", high: "1,712", low: "1,431", delta: 3 },
  { product: "등유", avg: "1,304", high: "1,455", low: "1,208", delta: -1 },
  { product: "부탄(LPG)", avg: "1,099", high: "1,188", low: "1,021", delta: 0 },
];

export const priceByRegion: { region: string; price: number; delta: number }[] = [
  { region: "서울", price: 1772, delta: -1 },
  { region: "경기", price: 1681, delta: -3 },
  { region: "강원", price: 1701, delta: 1 },
  { region: "충청", price: 1658, delta: -1 },
  { region: "전라", price: 1649, delta: 0 },
  { region: "경상", price: 1684, delta: -3 },
  { region: "제주", price: 1712, delta: 2 },
];

export const priceNotices: { date: string; title: string }[] = [
  { date: "2026.08.14", title: "유류세 인하 연장에 따른 가격정보 표시 안내" },
  { date: "2026.08.11", title: "지역별 평균가격 집계 기준 변경 안내" },
  { date: "2026.08.07", title: "알뜰주유소 가격 반영 주기 조정" },
];

export const priceFilters = {
  products: ["휘발유", "경유", "등유", "부탄(LPG)"],
  regions: ["전국", "서울", "경기", "강원", "충청", "전라", "경상", "제주"],
  periods: ["최근 7일", "최근 30일", "최근 90일"],
};
