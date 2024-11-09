import { useState } from "react"
import { YoutubeResponse } from "../../types/music/youtubeResponse";
import axios from "axios";
import { notification } from "antd";

const useSearchMusic = () => {
  const [searchResult, setSearchResult] = useState<YoutubeResponse[]>([]);

  const searchMusic = async (keyword: string) => {
    try {
      const { data } = await axios.get(
        `https://youtube-music6.p.rapidapi.com/ytmusic/?query=${keyword}`,
        {
          headers: {
            "x-rapidapi-host": "youtube-music6.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          },
        }
      );
      if (data) {
        console.log(
          data.filter((data: YoutubeResponse) => data.resultType === "song")
        );
        setSearchResult(data.filter((data:YoutubeResponse)=>(data.resultType === 'song')));
      }
    } catch {
      notification.error({message: '검색결과 가져오기 실패', description: '네트워크 에러'});
    }
  }

  return {
    searchMusic,
    searchResult
  }
}

export default useSearchMusic