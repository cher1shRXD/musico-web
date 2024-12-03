import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios"
import { useUserStore } from "../../store/user/useUserStore"
import { MusicData } from "../../types/music/musicData"

const useAddSong = () => {
  const setUser = useUserStore(state=>state.setUser);
  const addSong = async (song: MusicData) => {  
    try{
      const { data } = await musicoAxios.post('/queue', song);
      if(data) {
        setUser(data);
      }
    }catch(err: any){
      if (err && err.status === 409) {
        notification.open({
          message: "재생목록에 추가 실패",
          description: "재생목록에 곡이 이미 있습니다.",
        });
        return;
      }
      notification.open({
        message: "재생목록에 추가 실패",
        description: "네트워크 에러",
      });
    }
  }

  return addSong;
}

export default useAddSong