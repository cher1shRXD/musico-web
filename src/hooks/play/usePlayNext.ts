import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";
import { useUserStore } from "../../store/user/useUserStore"

const usePlayNext = () => {
  const setUser = useUserStore(state=>state.setUser);

  const playNext = async () => {
    try{
      const { data } = await musicoAxios.get('/play/next');
      setUser(data);
    }catch{
      notification.open({
        message: '재생 실패',
        description: '네트워크 에러'
      })
    }
  }

  return playNext
}

export default usePlayNext