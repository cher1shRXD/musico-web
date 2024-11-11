import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { VibeResponse } from "../../types/music/vibeResponse";
import * as S from "./style";

const MusicItem = ({
  data,
  onClick,
  type,
  rank,
}: {
  data: VibeResponse;
  onClick: () => void;
  type?: string;
  rank?: number;
}) => {
  const nowPlaying = useNowPlayingStore((state) => state.nowPlaying);
  return (
    <S.Container onClick={onClick}>
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
