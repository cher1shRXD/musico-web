import { useState } from "react";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import useAddSong from "../../hooks/queue/useAddSong";
import { useModalStateStore } from "../../store/modal/useModalStateStore";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { useUserStore } from "../../store/user/useUserStore";
import { VibeResponse } from "../../types/music/vibeResponse";
import * as S from "./style";
import { useQueueUpdateStore } from "../../store/update/useQueueUpdateStore";

const MusicItem = ({
  data,
  type,
  rank,
  hidePlus = false,
}: {
  data: VibeResponse;
  type?: string;
  rank?: number;
  hidePlus?: boolean;
}) => {
  const user = useUserStore((state) => state.user);
  const setIsPlaying = usePlayerStateStore((state) => state.setIsPlaying);
  const getYoutubeMusic = useGetYoutube();
  const addSong = useAddSong();
  const setMusicData = useModalStateStore(state=>state.setMusicData);
  const setModalOpen = useModalStateStore(state=>state.setModalOpen);
  const [clickable, setClickable] = useState(true);
  const setIsUpdated = useQueueUpdateStore(state=>state.setIsUpdated);

  const handleClickMusic = async () => {
    setClickable(false);
    setIsPlaying(false);
    const videoId = await getYoutubeMusic(
      `${data.title} - ${data.artists[0].artistName}`
    );
    await addSong({
      videoId,
      artist: data.artists,
      title: data.title,
      trackId: data.trackId,
      coverUrl: data.albumArt,
    });
    setIsPlaying(true);
    setIsUpdated(true);
    setClickable(true);
  };

  const openModal = () => {
    setMusicData(data);
    setModalOpen(true);
  }

  return (
    <S.Container>
      {type && type === "rank" && (
        <S.RankNumber
          isTop={rank ? rank <= 5 : undefined}
          isUnderHalf={rank ? rank >= 50 : undefined}
        >
          {rank}
        </S.RankNumber>
      )}
      <S.Cover src={data.albumArt}>
        <S.CoverOverlay className="cover-overlay">
          <S.PlayButton
            onClick={
              !(
                user &&
                user.queue.length > 0 &&
                user.queue[user.currentSong].trackId === data.trackId
              )
                ? clickable
                  ? handleClickMusic
                  : () => {}
                : () => {}
            }
            src={
              user &&
              user.queue.length > 0 &&
              user.queue[user.currentSong].trackId === data.trackId
                ? "/assets/songIsPlaying.gif"
                : "/assets/playSong.svg"
            }
          />
        </S.CoverOverlay>
      </S.Cover>
      <S.MusicInfo>
        <S.MusicTitle>{data.title}</S.MusicTitle>
        <S.MusicArtistWrap>
          {data.artists.slice(0, 3).map((artist, idx) => (
            <S.MusicArtist key={idx}>
              {artist.artistName}
              {idx !== data.artists.slice(0, 2).length - 1 && " &\u00A0"}
            </S.MusicArtist>
          ))}
          {
            data.artists.length > 2 && (
              <S.MusicArtist>
                외 {data.artists.length - 2}명
              </S.MusicArtist>
            ) 
          }
        </S.MusicArtistWrap>
      </S.MusicInfo>
      {!hidePlus && <S.PlayButton src="/assets/plus.svg" onClick={openModal} />}
    </S.Container>
  );
};

export default MusicItem;
