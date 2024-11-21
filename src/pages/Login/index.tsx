import { useEffect, useState } from "react";
import useLogin from "../../hooks/auth/useLogin";
import * as S from "./style";

const Login = () => {
  const { ...login } = useLogin();
  const [valid, setVaild] = useState<boolean>(false);

  useEffect(() => {
    if (
      login.data.username.trim().length > 0 &&
      login.data.password.trim().length > 0
    ) {
      setVaild(true);
    } else {
      setVaild(false);
    }
  }, [login.data]);

  return (
    <S.Container>
      <S.LoginWrap>
        <S.Title>Welcome back! 🎉</S.Title>
        <S.Label>아이디</S.Label>
        <S.Input
          type="text"
          onChange={login.handleForm}
          name="username"
          placeholder="아이디를 입력해주세요."
          value={login.data.username}
          onKeyDown={(e) => {
            if (e.key === "Enter") login.submit();
          }}
        />
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          onChange={login.handleForm}
          name="password"
          placeholder="비밀번호를 입력해주세요."
          value={login.data.password}
          onKeyDown={(e) => {
            if (e.key === "Enter") login.submit();
          }}
        />
        <S.AutoLoginWrap>
          <S.Check type="checkbox" onChange={login.handleAutoLogin} />
          <S.Label style={{ fontSize: 14, margin: 0 }}>자동로그인</S.Label>
        </S.AutoLoginWrap>
        <S.Filler />
        <S.NavWrap>
          <S.Nav to="/signup">회원이 아니신가요?</S.Nav>
          <S.Nav
            to="https://bolder-lemon-5f0.notion.site/MUSICO-145a370ebfe98041ab8cdfa7c435380f"
            target="_blank"
          >
            개인정보 처리방침
          </S.Nav>
        </S.NavWrap>
        <S.Button onClick={login.submit} disabled={login.loading || !valid}>
          {login.loading ? "로그인 중..." : "로그인"}
        </S.Button>
      </S.LoginWrap>
    </S.Container>
  );
};

export default Login;
