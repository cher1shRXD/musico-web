import { useEffect, useState } from "react";
import * as S from "./style";
import useGetRank from "../../hooks/music/useGetRank";
import { VibeResponse } from "../../types/music/vibeResponse";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "../../store/player/usePlayerErrorStore";
import ReactPlayer from "react-player";
import { Artist } from "../../types/music/artist";
import MusicItem from "../../components/MusicItem";

const Chart = () => {
  const { getRank, rankData } = useGetRank();
  const { youtubeResult, getYoutubeMusic } = useGetYoutube();
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const error = usePlayerErrorStore((state) => state.error);
  const [musicTitle, setMusicTitle] = useState("");
  const [musicArtist, setMusicArtist] = useState<Artist[]>([]);
  const [topVideoId, setTopVideoId] = useState("");
  const [trackId, setTrackId] = useState("");

  useEffect(() => {
    getRank();
  }, []);

  useEffect(() => {
    if (rankData.length > 0) {
      getYoutubeMusic(
        `${rankData[0].title} - ${rankData[0].artists[0].artistName}`
      );
    }
  }, [rankData]);

  const handleClickMusic = (data: VibeResponse) => {
    setMusicArtist(data.artists);
    setMusicTitle(data.title);
    setTrackId(data.trackId);
    getYoutubeMusic(`${data.title} - ${data.artists[0].artistName}`);
  };

  useEffect(() => {
    if (youtubeResult.length > 0 && topVideoId == "") {
      setTopVideoId(youtubeResult[0].videoId);
    }

    if (musicArtist.length === 0 || musicTitle.length === 0) {
      return;
    }

    const selected = youtubeResult[0];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.author,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
        trackId,
      });
    }
  }, [youtubeResult]);

  useEffect(() => {
    if (error !== 150) {
      return;
    }
    const selected = youtubeResult[1];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.author,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
        trackId,
      });
    }
  }, [error]);

  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>Weekly Chart in Korea</S.BannerText>
      </S.Banner>
      <S.ContentWrap>
        <S.RankWrap>
          {rankData.map((data, idx) => (
            <MusicItem
              data={data}
              onClick={() => handleClickMusic(data)}
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
