import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";
import { useUserStore } from "../../store/user/useUserStore"

const useUpdateShuffle = () => {
  const setUser = useUserStore(state=>state.setUser);
  const updateShuffle = async () => {
    try{
      const { data } = await musicoAxios.patch('/play/update-shuffle');
      if(data){
        setUser(data);
      } 
    }catch{
      notification.open({
        message: '셔플 실패',
        description: '네트워크 에러'
      })
    }
  }

  return updateShuffle;
}

export default useUpdateShuffle