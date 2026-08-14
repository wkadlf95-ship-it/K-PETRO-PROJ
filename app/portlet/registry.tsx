import type { ComponentType } from "react";
import {
  PriceByProductWidget,
  PriceByRegionWidget,
  PriceDeltaWidget,
  PriceNoticeWidget,
  PriceTrendWidget,
} from "./widgets/priceWidgets";

/**
 * 위젯 키 ↔ 컴포넌트 표.
 *
 * 서버가 내려준 위젯 키만 격자에 그린다. 프론트에 권한 규칙을 다시 두지 않는다.
 * 백엔드 연동 후에는 GET /api/widgets 로 받은 키 목록으로 걸러 낸다.
 */
export type WidgetDef = {
  key: string;
  title: string;
  desc: string;
  Component: ComponentType;
};

export const widgetRegistry: WidgetDef[] = [
  {
    key: "price-by-product",
    title: "유종별 평균가격",
    desc: "전국 평균과 최고·최저, 전일 대비",
    Component: PriceByProductWidget,
  },
  {
    key: "price-trend",
    title: "가격 추이",
    desc: "최근 5일 유종별 평균가격",
    Component: PriceTrendWidget,
  },
  {
    key: "price-by-region",
    title: "지역별 가격 비교",
    desc: "권역별 평균가격 순위",
    Component: PriceByRegionWidget,
  },
  {
    key: "price-delta",
    title: "지역별 전일 대비",
    desc: "권역별 등락 현황",
    Component: PriceDeltaWidget,
  },
  {
    key: "price-notice",
    title: "가격정보 공지",
    desc: "집계 기준·표시 변경 안내",
    Component: PriceNoticeWidget,
  },
];

export const findWidget = (key: string) => widgetRegistry.find((w) => w.key === key);
