import { useEffect, useState } from "react";
import * as S from "./style";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import ReactPlayer from "react-player";
import MusicItem from "../../components/MusicItem";
import useGetNewSong from "../../hooks/music/useGetNewSong";

const Newest = () => {
  const { getNewSong, newSongData } = useGetNewSong();
  const { youtubeResult, getYoutubeMusic } = useGetYoutube();
  const [topVideoId, setTopVideoId] = useState("");

  useEffect(() => {
    getNewSong();
  }, []);

  useEffect(() => {
    if (newSongData.length > 0) {
      getYoutubeMusic(
        `${newSongData[0].title} - ${newSongData[0].artists[0].artistName}`
      );
    }
  }, [newSongData]);

  useEffect(() => {
    if (youtubeResult.length > 0) {
      setTopVideoId(youtubeResult[0].videoId);
    }
  }, [youtubeResult]);

  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>당신에게 다가온 새로운 {newSongData.length}곡</S.BannerText>
      </S.Banner>
      <S.ContentWrap>
        <S.RankWrap>
          {newSongData.map((data) => (
            <MusicItem
              data={data}
              key={data.trackId}
            />
          ))}
        </S.RankWrap>
        <S.TopVideo>
          <S.TopText>
            집중 #1 {newSongData.length > 0 && newSongData[0].title}
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

export default Newest;
