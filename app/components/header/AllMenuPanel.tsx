import { nodePath } from "../../config/routes";
import { siteTree } from "../../config/siteTree";
import { RouteLink } from "../common/RouteLink";
import { StatusBadge } from "../common/StatusBadge";

export function AllMenuPanel() {
  return (
    <div className="all-menu-panel">
      <div className="portal-container all-menu-grid">
        {siteTree.map((top) => (
          <section key={top.slug}>
            <h2>{top.label}</h2>
            {top.children?.map((mid) => (
              <div className="all-menu-group" key={mid.slug}>
                <strong>{mid.label}</strong>
                <ul>
                  {mid.children?.map((leaf) => (
                    <li key={leaf.slug}>
                      {leaf.kind === "external" && leaf.href ? (
                        <a href={leaf.href} target="_blank" rel="noreferrer">{leaf.label}</a>
                      ) : (
                        <RouteLink to={nodePath(top, mid, leaf)}>{leaf.label}</RouteLink>
                      )}
                      {leaf.status && <StatusBadge status={leaf.status} compact />}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
