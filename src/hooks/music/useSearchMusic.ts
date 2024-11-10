import { useState } from "react"
import { YoutubeResponse } from "../../types/music/youtubeResponse";
import axios from "axios";
import { notification } from "antd";

const useSearchMusic = () => {
  const [searchResult, setSearchResult] = useState<YoutubeResponse[]>([]);


  const searchMusic = async (keyword: string) => {
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/search`,
        {
          query:keyword
        }
      );
      if (data) {
        setSearchResult(
          data.filter(
            (data: YoutubeResponse) => data.artists?.[0]?.name !== undefined
          )
        );

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