import { useEffect, useState } from "react";
import * as S from "./style";
import useGetRank from "../../hooks/music/useGetRank";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import ReactPlayer from "react-player";
import MusicItem from "../../components/MusicItem";

const Chart = () => {
  const { getRank, rankData } = useGetRank();
  const getYoutubeMusic  = useGetYoutube();
  const [topVideoId, setTopVideoId] = useState("");

  const getTopVideo = async () => {
    if(rankData.length > 0) {
      const youtubeResult = await getYoutubeMusic(
        `${rankData[0].title} - ${rankData[0].artists[0].artistName}`
      );
      if (youtubeResult.length > 0) {
        setTopVideoId(youtubeResult);
      }
    }
  }

  useEffect(() => {
    getRank();
  }, []);

  useEffect(()=>{
    getTopVideo();
  }, [rankData]);


  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>차트<S.Korea>KOREA</S.Korea></S.BannerText>
      </S.Banner>
      <S.ContentWrap>
        <S.RankWrap>
          {rankData.map((data, idx) => (
            <MusicItem
              data={data}
              type="rank"
              rank={idx + 1}
              key={data.trackId}
            />
          ))}
        </S.RankWrap>
        <S.TopVideo>
          <S.TopText>
            Weekly #1 {rankData.length > 0 && rankData[0].title}
          </S.TopText>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${topVideoId}`}
            width="100%"
            height={360}
          />
          <S.VideoSource>source from Youtube</S.VideoSource>
        </S.TopVideo>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Chart;
