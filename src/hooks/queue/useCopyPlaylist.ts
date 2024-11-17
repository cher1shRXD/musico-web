import musicoAxios from "../../libs/axios/musicoAxios";
import { useUserStore } from "../../store/user/useUserStore";
import { notification } from "antd";

const useCopyPlaylist = () => {
  const setUser = useUserStore((state) => state.setUser);
  const copyPlaylist = async (playlistId: string) => {
    try {
      const { data } = await musicoAxios.post(
        `/queue/copy?playlistId=${playlistId}`
      );
      if (data) {
        setUser(data);
      }
    } catch {
      notification.open({
        message: "플레이리스트 재생 실패",
        description: "네트워크 에러",
      });
    }
  };

  return copyPlaylist;
};

export default useCopyPlaylist;
