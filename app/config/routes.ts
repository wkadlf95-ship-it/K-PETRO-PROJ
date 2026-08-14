import { siteTree, type MenuNode } from "./siteTree";

export type ResolvedPage = {
  top: MenuNode;
  mid: MenuNode;
  leaf: MenuNode;
  path: string;
};

/** "/about/ceo/greeting" 형태의 경로를 트리에서 찾습니다. 없는 단계는 첫 항목으로 대체합니다. */
export function resolvePath(path: string): ResolvedPage | null {
  const [, topSlug, midSlug, leafSlug] = path.split("/");
  const top = siteTree.find((node) => node.slug === topSlug);
  if (!top?.children) return null;
  const mid = top.children.find((node) => node.slug === midSlug) ?? top.children[0];
  if (!mid?.children) return null;
  const leaf = mid.children.find((node) => node.slug === leafSlug) ?? mid.children[0];
  return { top, mid, leaf, path: `/${top.slug}/${mid.slug}/${leaf.slug}` };
}

/** 메뉴 노드로 해시 경로를 만듭니다. leaf를 생략하면 mid의 첫 leaf로 연결합니다. */
export function nodePath(top: MenuNode, mid: MenuNode, leaf?: MenuNode) {
  const target = leaf ?? mid.children?.[0];
  return `/${top.slug}/${mid.slug}/${target ? target.slug : ""}`;
}

/** 전체 leaf 개수 (사이트맵 안내 문구에 사용) */
export const countLeaves = () =>
  siteTree.reduce(
    (sum, top) => sum + (top.children ?? []).reduce((n, mid) => n + (mid.children?.length ?? 0), 0),
    0,
  );
