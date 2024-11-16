import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";
import { MusicData } from "../../types/music/musicData";

const useAddToPlaylist = () => {
  const addToPlaylist = async (song: MusicData, playlistId: string) => {
    try {
      const { data } = await musicoAxios.post(
        `/playlist/song?playlistId=${playlistId}`,
        song
      );
      if (data) {
        notification.open({
          message: "플레이리스트에 추가됨",
          description: "플레이리스트에 곡이 추가되었습니다.",
        });
      }
    } catch (err: any) {
      if (err && err.status === 409) {
        notification.open({
          message: "플레이리스트에 추가 실패",
          description: "플레이리스트에 곡이 이미 있습니다.",
        });
        return;
      }
      notification.open({
        message: "플레이리스트에 추가 실패",
        description: "네트워크 에러",
      });
    }
  };

  return addToPlaylist;
};

export default useAddToPlaylist;
