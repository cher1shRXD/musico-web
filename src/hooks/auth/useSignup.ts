import { useState } from "react";
import { SignUpData } from "../../types/auth/signup";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [data, setData] = useState<SignUpData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const submit = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.REACT_APP_EXPRESS_SERVER}/auth/signup`,
        data
      );

      if (res) {
        notification.open({
          message: "성공",
          description: "회원가입에 성공했습니다.",
        });

        navigate("/login");
      }
    } catch (err: any) {

      if (err && err.status === 409) {
        notification.open({
          message: "회원가입 실패",
          description: "이미 사용 중인 아이디입니다.",
        });
        return;
      }
      notification.open({
        message: "회원가입 실패",
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
    handlePasswordCheck,
    passwordCheck,
    submit,
  };
};

export default useSignup;
