import { VibeResponse } from "../../types/music/vibeResponse";
import axios from "axios";
import { notification } from "antd";
import { useQuery } from "@tanstack/react-query";

const useGetRank = () => {
  const getRank = async () => {
    try {
      const { data } = await axios.get<VibeResponse[]>(
        `${import.meta.env.VITE_EXPRESS_SERVER}/songs/chart`
      );
      return data;
    } catch {
      notification.open({
        message: "랭킹 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  const { data } = useQuery({
    queryKey: ['getRank'],
    queryFn: getRank
  })

  return {
    rankData: data,
    getRank,
  };
};

export default useGetRank;
