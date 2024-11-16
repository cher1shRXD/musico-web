import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";

const useCreatePlaylist = () => {
  const createPlaylist = async (title: string) => {
    try {
      const { data } = await musicoAxios.post("/playlist", { title });
      if (data) {
        notification.open({
          message: "플레이리스트 생성 성공",
          description: "플레이리스트가 성공적으로 생성되었습니다.",
        });
      }
    } catch {
      notification.open({
        message: "플레이리스트 생성 실패",
        description: "네트워크 에러",
      });
    }
  };

  return createPlaylist;
};

export default useCreatePlaylist;
