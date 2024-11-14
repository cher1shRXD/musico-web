import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios"
import { useUserStore } from "../../store/user/useUserStore";
import { useNavigate } from "react-router-dom";

const useGetMe = () => {
  const setUser = useUserStore(state=>state.setUser);
  const navigate = useNavigate();

  const getMe = async () => {
    try{
      const { data } = await musicoAxios.get('/auth/me');
      if(data && data !== null) {
        setUser(data);
      }else{
        navigate('/login');
      }
    }catch{
      navigate('/login');
      notification.open({
        message: "유저조회 실패",
        description: "네트워크 에러",
      });
    }
  }

  return getMe;
}

export default useGetMe