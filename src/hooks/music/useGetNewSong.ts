import { VibeResponse } from "../../types/music/vibeResponse";
import axios from "axios";
import { notification } from "antd";
import { useQuery } from "@tanstack/react-query";

const useGetNewSong = () => {
  const getNewSong = async () => {
    try {
      const { data } = await axios.get<VibeResponse[]>(
        `${import.meta.env.VITE_EXPRESS_SERVER}/songs/new-songs`
      );
      return data;
    } catch {
      notification.open({
        message: "랭킹 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  const { data } = useQuery({
    queryKey: ['getNewSong'],
    queryFn: getNewSong
  })

  return {
    newSongData: data,
  };
};

export default useGetNewSong;
