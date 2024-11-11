import { useEffect, useState } from "react";
import * as S from "./style";
import useGetRank from "../../hooks/music/useGetRank";
import MusicItem from "../../components/MusicItem";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "../../store/player/usePlayerErrorStore";
import { VibeResponse } from "../../types/music/vibeResponse";
import { Artist } from "../../types/music/artist";

const Home = () => {
  const { getRank, rankData } = useGetRank();
  const { getYoutubeMusic, youtubeResult } = useGetYoutube();
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const error = usePlayerErrorStore((state) => state.error);
  const [musicTitle, setMusicTitle] = useState("");
  const [musicArtist, setMusicArtist] = useState<Artist[]>([]);
  const [trackId, setTrackId] = useState("");

  useEffect(() => {
    getRank();
  }, []);

  const handleClickMusic = (data: VibeResponse) => {
    setMusicArtist(data.artists);
    setMusicTitle(data.title);
    setTrackId(data.trackId);
    getYoutubeMusic(`${data.title} - ${data.artists[0].artistName}`);
  };

  useEffect(() => {
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
  }, [getYoutubeMusic]);

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
      <S.SearchWrap>
        <S.Search to="/search">
          <S.SearchPlaceholder>
            오늘은 어떤 노래가 듣고 싶나요?
          </S.SearchPlaceholder>
          <S.SearchIcon src="/assets/searchIconWhite.svg" />
        </S.Search>
      </S.SearchWrap>
      <S.ContentWrap>
        {rankData.map((data) => (
          <MusicItem
            data={data}
            key={data.trackId}
            onClick={() => handleClickMusic(data)}
          />
        ))}
      </S.ContentWrap>
    </S.Container>
  );
};

export default Home;
