import { useState } from "react";
import musicoAxios from "../../libs/axios/musicoAxios";
import { Playlist } from "../../types/playlist/playlist";
import { notification } from "antd";
import { getCookie } from "../../libs/react-cookie/cookie";
import { useNavigate } from "react-router-dom";

const useGetMyPlaylist = () => {
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const accessToken = getCookie('ACCESS_TOKEN');
  const navigate = useNavigate();

  const getMyPlaylist = async () => {
    if(!accessToken) {
      navigate("/intro");
      return;
    }
    try {
      const { data } = await musicoAxios.get("/playlist");
      if (data) {
        setPlaylist(data);
      }
    } catch {
      navigate("/intro");
      notification.open({
        message: "플레이리스트 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    playlist,
    getMyPlaylist
  }
};

export default useGetMyPlaylist;
