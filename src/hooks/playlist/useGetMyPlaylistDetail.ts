import musicoAxios from "../../libs/axios/musicoAxios";
import { Playlist } from "../../types/playlist/playlist";
import { notification } from "antd";
import { useQuery } from "@tanstack/react-query";

const useGetMyPlaylistDetail = (playlistId: string) => {
  const getMyPlaylistDetail = async () => {
    try {
      const { data } = await musicoAxios.get<Playlist>(
        `/playlist/my?playlistId=${playlistId}`
      );
      return data;
    } catch {
      notification.open({
        message: "플레이리스트 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  const { data, refetch } = useQuery({
    queryKey: ["getMyPlaylistDetail", playlistId],
    queryFn: getMyPlaylistDetail,
    enabled: !!playlistId
  });

  return {
    playlistDetail: data,
    getMyPlaylistDetail: refetch
  }
};

export default useGetMyPlaylistDetail;
