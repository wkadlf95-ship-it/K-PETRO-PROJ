export function ContentView({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="content-view">
      <p className="content-lead">{desc}</p>

      <h3>{title} 개요</h3>
      <p>
        한국석유관리원은 석유제품의 품질과 유통질서를 관리하여 국민이 안심하고 석유제품을 사용할 수 있도록
        지원합니다. {title}에 대한 세부 내용은 관련 법령과 내부 지침에 따라 운영됩니다.
      </p>
      <ul className="content-bullets">
        <li>관련 근거: 석유 및 석유대체연료 사업법 및 같은 법 시행령</li>
        <li>운영 기준: 한국석유관리원 업무 규정에 따른 절차 적용</li>
        <li>문의: 고객센터 1588-5166 (평일 09:00–18:00)</li>
      </ul>

      <h3>주요 내용</h3>
      <table className="data-table">
        <caption className="sr-only">{title} 주요 내용</caption>
        <thead>
          <tr><th scope="col">구분</th><th scope="col">내용</th><th scope="col">비고</th></tr>
        </thead>
        <tbody>
          <tr><td>대상</td><td>석유제품 제조·수입·판매 사업자 및 일반 국민</td><td>—</td></tr>
          <tr><td>절차</td><td>신청 접수 → 검토 → 처리 → 결과 통보</td><td>평균 7일</td></tr>
          <tr><td>수수료</td><td>관련 고시에 따름</td><td>일부 면제</td></tr>
        </tbody>
      </table>

      <p className="content-note">본 페이지의 내용은 화면 구성을 위한 예시이며, 실제 서비스에서는 기관 확정 콘텐츠로 대체됩니다.</p>
    </div>
  );
}
