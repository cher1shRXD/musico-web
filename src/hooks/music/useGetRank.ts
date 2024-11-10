import { useState } from "react";
import { SpotifyResponse } from "../../types/music/spotifyResponse";
import axios from "axios";
import { notification } from "antd";
import { YoutubeResponse } from "../../types/music/youtubeResponse";

const useGetRank = () => {
  const [rankData, setRankData] = useState<SpotifyResponse[]>([]);

  const getRank = async () => {
    try {
      const { data } = await axios.get(
        `https://musicdata-api.p.rapidapi.com/spotify/chart/kr/weekly`,
        {
          headers: {
            "x-rapidapi-host": "musicdata-api.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          },
        }
      );

      if (data) {
        setRankData(data);
      }
    } catch {
      notification.error({message: '랭킹 가져오기 실패', description: '네트워크 에러'});
    }
  }

  return {
    rankData,
    getRank
  }
};

export default useGetRank;
