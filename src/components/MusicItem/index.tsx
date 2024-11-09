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
    if(selected){
      setNowPlaying({
        title: selected.title,
        artist: selected.artists[0].name,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
      });
    }
    
  }, [searchResult]);

  return (
    <S.Container
      onClick={() =>
        searchMusic(`${data.attributes.name} ${data.attributes.artistName}`)
      }
    >
      {data.attributes.name} - {data.attributes.artistName}
    </S.Container>
  );
};

export default MusicItem;
