import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerReadyStore } from "../../store/player/usePlayerReadyStore";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { VibeResponse } from "../../types/music/vibeResponse";
import * as S from "./style";

const MusicItem = ({
  data,
  type,
  rank,
}: {
  data: VibeResponse;
  type?: string;
  rank?: number;
}) => {
  const nowPlaying = useNowPlayingStore((state) => state.nowPlaying);
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const setIsReady = usePlayerReadyStore((state) => state.setIsReady);
  const setIsPlaying = usePlayerStateStore((state) => state.setIsPlaying);

  const handleClickMusic = () => {
    setIsReady(false);
    setIsPlaying(false);
    setNowPlaying({
      ...nowPlaying,
      artist: data.artists,
      title: data.title,
      trackId: data.trackId,
      coverUrl: data.albumArt,
    });
  };

  return (
    <S.Container onClick={handleClickMusic}>
      {type && type == "rank" && (
        <S.RankNumber
          isTop={rank ? rank <= 5 : undefined}
          isUnderHalf={rank ? rank >= 50 : undefined}
        >
          {rank}
        </S.RankNumber>
      )}
      <S.Cover src={data.albumArt} />
      <S.MusicInfo>
        <S.MusicTitle>{data.title}</S.MusicTitle>
        <S.MusicArtistWrap>
          {data.artists.map((artist, idx) => (
            <S.MusicArtist>
              {artist.artistName}
              {idx !== data.artists.length - 1 && " &\u00A0"}
            </S.MusicArtist>
          ))}
        </S.MusicArtistWrap>
      </S.MusicInfo>
      <S.PlayButton
        src={
          nowPlaying.trackId === data.trackId
            ? "/assets/songIsPlaying.gif"
            : "/assets/playSong.svg"
        }
      />
    </S.Container>
  );
};

export default MusicItem;
