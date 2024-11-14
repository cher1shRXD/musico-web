import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";
import { useUserStore } from "../../store/user/useUserStore";

const useDeleteSong = () => {
  const setUser = useUserStore((state) => state.setUser);
  const deleteSong = async (trackId: number) => {
    try {
      const { data } = await musicoAxios.delete(`/queue?trackId=${trackId}`);
      if (data) {
        setUser(data);
      }
    } catch {
      notification.open({
        message: "재생목록에서 삭제 실패",
        description: "네트워크 에러",
      });
    }
  };

  return deleteSong;
};

export default useDeleteSong;
