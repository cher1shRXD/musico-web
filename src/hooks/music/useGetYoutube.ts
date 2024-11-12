import { useState } from "react";
import { YoutubeResponse } from "../../types/music/youtubeResponse";
import axios from "axios";
import { notification } from "antd";

const useGetYoutube = () => {
  const [youtubeResult, setYoutubeResult] = useState<YoutubeResponse[]>([]);

  const getYoutubeMusic = async (keyword: string) => {
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
      if (songResult.data.result) {
        setYoutubeResult([songResult.data.result[0]]);
      }
      if (videoResult.data.result) {
        setYoutubeResult(prev=>[...prev, videoResult.data.result[0]]);
      }
    } catch {
      notification.error({
        message: "트랙 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    getYoutubeMusic,
    youtubeResult,
  };
};

export default useGetYoutube;
