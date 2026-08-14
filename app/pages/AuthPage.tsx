import { ArrowRight, Home, KeyRound, ShieldCheck } from "lucide-react";
import { RouteLink } from "../components/common/RouteLink";
import { StatusBadge } from "../components/common/StatusBadge";

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";

  return (
    <main className="subpage auth-page">
      <div className="portal-container auth-wrap">
        <div className="auth-card">
          <div className="breadcrumb"><RouteLink to="/" aria-label="홈"><Home size={14} /></RouteLink></div>
          <StatusBadge status="미정·검토" />
          <h1><KeyRound size={22} /> {isSignup ? "회원가입" : "로그인"}</h1>
          <p>{isSignup
            ? "가입유형을 선택하고 이용약관 동의 후 본인확인을 거쳐 회원가입합니다."
            : "아이디·비밀번호 또는 간편인증으로 로그인하고, 필요 시 아이디·비밀번호를 찾을 수 있습니다."}</p>

          <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
            <label><span>아이디</span><input placeholder="아이디를 입력하세요" /></label>
            <label><span>비밀번호</span><input type="password" placeholder="비밀번호를 입력하세요" /></label>
            {isSignup && (
              <>
                <label><span>이메일</span><input placeholder="이메일을 입력하세요" /></label>
                <label className="auth-checkbox"><input type="checkbox" /><span>이용약관 및 개인정보 수집·이용에 모두 동의합니다</span></label>
              </>
            )}
            <button type="submit" className="button button-accent">{isSignup ? "회원가입" : "로그인"} <ArrowRight size={16} /></button>
          </form>

          <div className="auth-divider"><span>또는</span></div>
          <button type="button" className="auth-simple-auth"><ShieldCheck size={16} /> 간편인증으로 계속하기</button>

          <div className="auth-switch">
            {isSignup ? (
              <>이미 계정이 있으신가요? <RouteLink to="/member/login">로그인</RouteLink></>
            ) : (
              <>아직 회원이 아니신가요? <RouteLink to="/member/join">회원가입</RouteLink></>
            )}
          </div>

          <p className="content-note">
            {isSignup
              ? "회원 필요 범위(전체 국민 vs 개인화기능 이용자만)가 아직 확정되지 않았습니다."
              : "자체 회원제 구축 여부와 간편인증 제공사(카카오 등)가 아직 확정되지 않았습니다."}
          </p>
        </div>
      </div>
    </main>
  );
}
