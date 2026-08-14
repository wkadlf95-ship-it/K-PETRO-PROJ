import { historyGroups } from "../../data/pageMock";

export function TimelineView() {
  return (
    <div className="timeline-view">
      {historyGroups.map((group) => (
        <section key={group.year}>
          <h3>{group.year}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item.year}>
                <strong>{item.year}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
