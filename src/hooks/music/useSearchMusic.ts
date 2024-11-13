import { useState } from "react"
import { VibeResponse } from "../../types/music/vibeResponse";
import axios from "axios";
import { notification } from "antd";

const useSearchMusic = () => {
  const [searchResult, setSearchMusic] = useState<VibeResponse[]>([]);

  const searchMusic = async (query: string) => {
    try{
      const { data } = await axios.get(
        `${process.env.REACT_APP_EXPRESS_SERVER}/songs/search?q=${query}`
      );
      if(data) {
        setSearchMusic(data);
      }
    }catch{
      notification.error({
        message: "검색결과 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  }
  
  return {
    searchMusic,
    searchResult
  }
}

export default useSearchMusic