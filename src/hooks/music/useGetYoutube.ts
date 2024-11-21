import axios from "axios";
import { notification } from "antd";

const useGetYoutube = () => {
  const getYoutubeMusic = async (keyword: string): Promise<string[]> => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_FASTAPI_SERVER}`,
        {
          query: keyword,
        }
      );
      if (data) {
        return data
      }
      
    } catch {
      notification.open({
        message: "트랙 가져오기 실패",
        description: "네트워크 에러",
      });
    }
    return [''];
  };

  return getYoutubeMusic;
};

export default useGetYoutube;
