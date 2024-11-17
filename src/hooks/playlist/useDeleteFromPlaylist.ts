import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";

const useDeleteFromPlaylist = () => {
  const deleteFromPlaylist = async (trackId: string, playlistId: string) => {
    try {
      await musicoAxios.delete(
        `/playlist/song?trackId=${trackId}&playlistId=${playlistId}`
      );
      notification.open({
        message: "플레이리스트에서 삭제 성공",
        description: "곡이 플레이리스트에서 삭제되었습니다.",
      });
    } catch {
      notification.open({
        message: "플레이리스트에서 삭제 실패",
        description: "네트워크 에러",
      });
    }
  };

  return deleteFromPlaylist;
};

export default useDeleteFromPlaylist;
