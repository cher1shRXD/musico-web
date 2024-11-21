import { useEffect, useState } from "react";
import useSignup from "../../hooks/auth/useSignup";
import * as S from "./style";
import { PASSWORD_REGEX } from "../../constants/regex";
import { useSearchParams } from "react-router-dom";

const Signup = () => {
  const { ...signup } = useSignup();
  const [valid, setValid] = useState<boolean>(false);
 const [searchParams] = useSearchParams();
  const query = searchParams.get('id');

  useEffect(() => {
    setValid(
      signup.data.username.trim().length >= 3 &&
        PASSWORD_REGEX.test(signup.data.password) &&
        signup.data.password === signup.passwordCheck
    );
  }, [signup.data, signup.passwordCheck]);

  useEffect(()=>{
    if(query && query.length > 0) {
      signup.setUsernameQuery(query);
    }
  },[]);

  return (
    <S.Container>
      <S.LoginWrap>
        <S.Title>Hi, there! 👋</S.Title>
        <S.Label>아이디</S.Label>
        <S.Input
          type="text"
          onChange={signup.handleForm}
          name="username"
          placeholder="3글자 이상 입력해주세요."
          value={signup.data.username}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {signup.data.username.trim().length < 3 &&
            signup.data.username.trim().length > 0 &&
            "공백 제외 3글자 이상 입력해주세요."}
        </S.Warning>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          onChange={signup.handleForm}
          name="password"
          placeholder="비밀번호를 입력해주세요."
          value={signup.data.password}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {!PASSWORD_REGEX.test(signup.data.password) &&
            signup.data.password.length > 0 &&
            "영문, 숫자, 특수문자 포함 8글자 이상 입력해주세요."}
        </S.Warning>
        <S.Label>비밀번호 확인</S.Label>
        <S.Input
          type="password"
          onChange={signup.handlePasswordCheck}
          placeholder="비밀번호 확인"
          value={signup.passwordCheck}
          onKeyDown={(e) => {
            if (e.key === "Enter") signup.submit();
          }}
        />
        <S.Warning>
          {signup.data.password !== signup.passwordCheck &&
            signup.passwordCheck.length > 0 &&
            "비밀번호가 일치하지 않습니다."}
        </S.Warning>
        <S.Filler />
        <S.NavWrap>
          <S.Nav to="/login">회원이신가요?</S.Nav>
          <S.Nav
            to="https://bolder-lemon-5f0.notion.site/MUSICO-145a370ebfe98041ab8cdfa7c435380f"
            target="_blank"
          >
            개인정보 처리방침
          </S.Nav>
        </S.NavWrap>
        <S.Button onClick={signup.submit} disabled={signup.loading || !valid}>
          {signup.loading ? "회원가입 중..." : "회원가입"}
        </S.Button>
      </S.LoginWrap>
    </S.Container>
  );
};

export default Signup;
