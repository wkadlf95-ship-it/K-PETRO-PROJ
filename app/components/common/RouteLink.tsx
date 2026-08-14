import type { AnchorHTMLAttributes, ReactNode } from "react";

type RouteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
};

export function RouteLink({ to, children, ...props }: RouteLinkProps) {
  return <a href={`#${to}`} {...props}>{children}</a>;
}

