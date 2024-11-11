import { useState } from "react";
import { YoutubeResponse } from "../../types/music/youtubeResponse";
import axios from "axios";
import { notification } from "antd";

const useSearchMusic = () => {
  const [searchResult, setSearchResult] = useState<YoutubeResponse[]>([]);

  const searchMusic = async (keyword: string) => {
    try {
      const songResult = await axios.get(
        `https://youtube-music-api3.p.rapidapi.com/search?q=${keyword}&type=song`,
        {
          headers: {
            "x-rapidapi-host": "youtube-music-api3.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          },
        }
      );
      const videoResult = await axios.get(
        `https://youtube-music-api3.p.rapidapi.com/search?q=${keyword}&type=videos`,
        {
          headers: {
            "x-rapidapi-host": "youtube-music-api3.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          },
        }
      );
      if (songResult && videoResult) {
        setSearchResult([songResult.data.result[0], videoResult.data.result[0]]);
      }
    } catch {
      notification.error({
        message: "검색결과 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    searchMusic,
    searchResult,
  };
};

export default useSearchMusic;
