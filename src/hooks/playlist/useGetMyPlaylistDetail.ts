import { useState } from "react";
import musicoAxios from "../../libs/axios/musicoAxios";
import { Playlist } from "../../types/playlist/playlist";
import { notification } from "antd";

const useGetMyPlaylistDetail = () => {
  const [playlistDetail, setPlaylistDetail] = useState<Playlist>();
  const getMyPlaylistDetail = async (playlistId: string) => {
    try {
      const { data } = await musicoAxios.get(`/playlist/my?playlistId=${playlistId}`);
      if (data) {
        setPlaylistDetail(data);
      }
    } catch {
      notification.open({
        message: "플레이리스트 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    playlistDetail,
    getMyPlaylistDetail
  }
};

export default useGetMyPlaylistDetail;
