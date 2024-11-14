import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerReadyStore } from "../../store/player/usePlayerReadyStore";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { useUserStore } from "../../store/user/useUserStore";
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
  const user = useUserStore((state) => state.user);
  const setIsReady = usePlayerReadyStore((state) => state.setIsReady);
  const setIsPlaying = usePlayerStateStore((state) => state.setIsPlaying);
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);

  const handleClickMusic = async () => {
    setIsReady(false);
    setIsPlaying(false);
    const playData = {
      videoId: "",
      artist: data.artists,
      title: data.title,
      trackId: data.trackId,
      coverUrl: data.albumArt,
    };
    setNowPlaying(playData);
  };

  return (
    <S.Container>
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
            <S.MusicArtist key={idx}>
              {artist.artistName}
              {idx !== data.artists.length - 1 && " &\u00A0"}
            </S.MusicArtist>
          ))}
        </S.MusicArtistWrap>
      </S.MusicInfo>
      <S.PlayButton
        onClick={
          !(
            user &&
            user.queue.length > 0 &&
            user.queue[user.currentNowPlaying].trackId === `${data.trackId}`
          )
            ? handleClickMusic
            : () => {}
        }
        src={
          user &&
          user.queue.length > 0 &&
          user.queue[user.currentNowPlaying].trackId === `${data.trackId}`
            ? "/assets/songIsPlaying.gif"
            : "/assets/playSong.svg"
        }
      />
    </S.Container>
  );
};

export default MusicItem;
