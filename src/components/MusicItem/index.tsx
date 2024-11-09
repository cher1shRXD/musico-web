import { useEffect } from "react";
import useSearchMusic from "../../hooks/music/useSearchMusic";
import { ShazamResponse } from "../../types/music/shazamResponse";
import * as S from "./style";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";

const MusicItem = ({ data }: { data: ShazamResponse }) => {
  const { searchMusic, searchResult } = useSearchMusic();
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);

  useEffect(() => {
    const selected = searchResult[0];
    //TODO: 노래 우선, 노래가 임베드 에러뜨면 영상 포함 맨위 영상 ( 초기 필터: 제목 & 아티스트 일치 )
    if(selected){
      setNowPlaying({
        title: selected.title,
        artist: selected.artists,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
      });
    }
    console.log(selected);
  }, [searchResult]);

  return (
    <S.Container
      onClick={() =>
        searchMusic(`${data.attributes.name}`)
      }
    >
      {data.attributes.name} - {data.attributes.artistName}
    </S.Container>
  );
};

export default MusicItem;
