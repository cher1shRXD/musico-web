import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";

const useDeletePlaylist = () => {
  const deletePlaylist = async (playlistId: string) => {
    try {
      await musicoAxios.delete(`/playlist?playlistId=${playlistId}`);
      notification.open({
        message: "플레이리스트 삭제 성공",
        description: "플레이리스트가 삭제되었습니다.",
      });
    } catch {
      notification.open({
        message: "플레이리스트 삭제 실패",
        description: "네트워크 에러 ",
      });
    }
  };

  return deletePlaylist;
};

export default useDeletePlaylist;
