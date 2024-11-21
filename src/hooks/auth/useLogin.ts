import { useState } from "react";
import { LoginData } from "../../types/auth/login";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../libs/react-cookie/cookie";

const useLogin = () => {
  const [data, setData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleAutoLogin = () => {
    setAutoLogin((prev) => !prev);
  };

  const submit = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_EXPRESS_SERVER}/auth/login`,
        data
      );

      if (res) {
        setCookie("ACCESS_TOKEN", res.data.accessToken, { path: "/" });

        if (autoLogin) {
          setCookie("REFRESH_TOKEN", res.data.refreshToken, {
            path: "/",
            maxAge: 2600000,
          });
        } else {
          setCookie("REFRESH_TOKEN", res.data.refreshToken, {
            path: "/",
          });
        }
        setCookie("AUTO_LOGIN", `${autoLogin}`, {
          path: "/",
          maxAge: 2600000,
        });

        notification.open({
          message: "로그인 성공!",
          description: "환영합니다!",
        });

        navigate("/");
      }
    } catch (err: any) {
      if (
        err &&
        (err.status === 404 ||
          err.status === 401)
      ) {
        notification.open({
          message: "로그인 실패",
          description: "아이디 또는 비밀번호를 확인해주세요.",
        });

        return;
      }

      notification.open({
        message: "로그인 실패",
        description: "네트워크 에러",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleForm,
    data,
    handleAutoLogin,
    submit,
  };
};

export default useLogin;
