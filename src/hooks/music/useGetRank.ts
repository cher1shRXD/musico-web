import { useState } from "react";
import { ShazamResponse } from "../../types/music/shazamResponse";
import axios from "axios";
import { notification } from "antd";

const useGetRank = () => {
  const [rankData, setRankData] = useState<ShazamResponse[]>([]);

  const getRank = async (limit: number) => {
    try {
      const { data } = await axios.get(
        `https://shazam-api6.p.rapidapi.com/shazam/top_tracks_country?country_code=KR&limit=${limit}`,
        {
          headers: {
            "x-rapidapi-host": "shazam-api6.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          },
        }
      );

      if (data) {
        setRankData(data.result.data);
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
