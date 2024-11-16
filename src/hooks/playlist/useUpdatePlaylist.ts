import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios"

const useUpdatePlaylist = () => {
  const updatePlaylist = async (title: string, playlistId: string) => {
    try{
      const { data } = await musicoAxios.patch(`/playlist?playlistId=${playlistId}`, { title });
      if(data){
        notification.open({message:'플레이리스트 수정 성공', description:'플레이리스트가 수정되었습니다.'});
      }
    }catch{
      notification.open({
        message: "플레이리스트 수정 실패",
        description: "네트워크",
      });
    }
  }

  return updatePlaylist;
}

export default useUpdatePlaylist