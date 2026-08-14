import { orgUnits } from "../../data/pageMock";

export function OrgView() {
  return (
    <div className="org-view">
      <div className="org-top"><span>이사장</span></div>
      <div className="org-sub"><span>감사</span><span>기획조정실</span></div>
      <div className="org-grid">
        {orgUnits.map((unit) => (
          <div className="org-unit" key={unit.name}>
            <strong>{unit.name}</strong>
            <ul>{unit.teams.map((team) => <li key={team}>{team}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
