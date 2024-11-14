import { notification } from "antd";
import musicoAxios from "../../libs/axios/musicoAxios";
import { useUserStore } from "../../store/user/useUserStore";

const usePlayPrevious = () => {
  const setUser = useUserStore((state) => state.setUser);

  const playPrevious = async () => {
    try {
      const { data } = await musicoAxios.get("/play/previous");
      setUser(data);
    } catch {
      notification.open({
        message: "재생 실패",
        description: "네트워크 에러",
      });
    }
  };

  return playPrevious;
};

export default usePlayPrevious;
