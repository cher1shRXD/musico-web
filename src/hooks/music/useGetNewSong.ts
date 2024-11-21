import { useState } from "react";
import { VibeResponse } from "../../types/music/vibeResponse";
import axios from "axios";
import { notification } from "antd";

const useGetNewSong = () => {
  const [newSongData, setNewSongData] = useState<VibeResponse[]>([]);

  const getNewSong = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/songs/new-songs`
      );

      if (data) {
        setNewSongData(data);
      }
    } catch {
      notification.open({
        message: "랭킹 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    newSongData,
    getNewSong,
  };
};

export default useGetNewSong;
