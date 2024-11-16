import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";
import { MusicData } from "../../types/music/musicData";

const useAddLast = () => {
  const addLast = async (song: MusicData) => {
    try {
      const { data } = await musicoAxios.post("/queue/add", song);
      if(data){
        notification.open({message: '재생목록에 추가됨', description: '곡이 재생목록에 추가되었습니다.'});
      }
    } catch {
      notification.open({
        message: "재생목록에 추가실패",
        description: "네트워크 에러",
      });
    }
  };

  return addLast;
};

export default useAddLast;
