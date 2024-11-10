import { useEffect, useState } from "react";
import * as S from "./style";
import useGetRank from "../../hooks/music/useGetRank";
import MusicItem from "../../components/MusicItem";
import useSortSearchResult from "../../hooks/utils/useSortSearchResult";
import useSearchMusic from "../../hooks/music/useSearchMusic";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "../../store/player/usePlayerErrorStore";
import { YoutubeResponse } from "../../types/music/youtubeResponse";
import { SpotifyResponse } from "../../types/music/spotifyResponse";

const Home = () => {
  const { getRank, rankData } = useGetRank();
  const sortSearchResult = useSortSearchResult();
  const { searchResult, searchMusic } = useSearchMusic();
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const error = usePlayerErrorStore((state) => state.error);
  const [sortedData, setSortedData] = useState<YoutubeResponse[]>([]);
  const [musicTitle, setMusicTitle] = useState("");
  const [musicArtist, setMusicArtist] = useState("");

  useEffect(() => {
    getRank();
  }, []);

  const handleClickMusic = (data: SpotifyResponse) => {
    const degradeKeyword = data.artist_and_title.split(' - ');
    setMusicArtist(degradeKeyword[0]);
    setMusicTitle(degradeKeyword[1]);
    searchMusic(data.artist_and_title);
  }

  useEffect(() => {
    if(musicArtist.length === 0 || musicTitle.length === 0) {
      return;
    }
    const sorted = sortSearchResult(
      searchResult,
      musicArtist,
      musicTitle
    );
    setSortedData(sorted);

    const selected = sorted[0];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.artists,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
      });
    }
  }, [searchResult]);

  useEffect(()=>{
    if(error !== 150){
      return;
    }
    const selected = sortedData[1];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.artists,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
      });
    }
  },[error]);

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
          <MusicItem data={data} key={data.ranking} onClick={() => handleClickMusic(data)} />
        ))}
      </S.ContentWrap>
    </S.Container>
  );
};

export default Home;
