import musicoAxios from "../../libs/axios/musicoAxios";
import { Playlist } from "../../types/playlist/playlist";
import { notification } from "antd";
import { getCookie } from "../../libs/react-cookie/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const useGetMyPlaylist = () => {
  const accessToken = getCookie("ACCESS_TOKEN");
  const navigate = useNavigate();

  const getMyPlaylist = async () => {
    if (!accessToken) {
      navigate("/intro");
      return;
    }
    try {
      const { data } = await musicoAxios.get<Playlist[]>("/playlist");
      return data;
    } catch {
      navigate("/intro");
      notification.open({
        message: "플레이리스트 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  const { data, refetch } = useQuery({
    queryKey: ["getMyPlaylist"],
    queryFn: getMyPlaylist,
  });

  return {
    playlist: data,
    getMyPlaylist: refetch
  }
};

export default useGetMyPlaylist;
