import { useState } from "react";
import axios from "axios";
import { notification } from "antd";

const useGetYoutube = () => {
  const [youtubeResult, setYoutubeResult] = useState<string>("");

  const getYoutubeMusic = async (keyword: string) => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_FASTAPI_SERVER}`, {
        query: keyword,
      });

      if (data) {
        setYoutubeResult(data);
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
