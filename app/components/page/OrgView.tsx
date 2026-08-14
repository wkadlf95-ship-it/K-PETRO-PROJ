import { orgUnits } from "../../data/pageMock";

export function OrgView() {
  return (
    <div className="org__view">
      <div className="org__top"><span>이사장</span></div>
      <div className="org__sub"><span>감사</span><span>기획조정실</span></div>
      <div className="org__grid">
        {orgUnits.map((unit) => (
          <div className="org__unit" key={unit.name}>
            <strong>{unit.name}</strong>
            <ul>{unit.teams.map((team) => <li key={team}>{team}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
