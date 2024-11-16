import useGetYoutube from "../../hooks/music/useGetYoutube";
import useAddSong from "../../hooks/queue/useAddSong";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { useUserStore } from "../../store/user/useUserStore";
import { VibeResponse } from "../../types/music/vibeResponse";
import * as S from "./style";
import { useState } from "react";
import LibraryModal from "../LibraryModal";

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
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickMusic = async () => {
    setIsPlaying(false);
    const videoId = await getYoutubeMusic(
      `${data.title}${data.artists[0].artistName}`
    );
    await addSong({
      videoId,
      artist: data.artists,
      title: data.title,
      trackId: data.trackId,
      coverUrl: data.albumArt,
    });
    setIsPlaying(true);
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
      <S.Cover src={data.albumArt}>
        <S.CoverOverlay className="cover-overlay">
          <S.PlayButton
            onClick={
              !(
                user &&
                user.queue.length > 0 &&
                user.queue[user.currentSong].trackId === `${data.trackId}`
              )
                ? handleClickMusic
                : () => {}
            }
            src={
              user &&
              user.queue.length > 0 &&
              user.queue[user.currentSong].trackId === `${data.trackId}`
                ? "/assets/songIsPlaying.gif"
                : "/assets/playSong.svg"
            }
          />
        </S.CoverOverlay>
      </S.Cover>
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
      {!hidePlus && (
        <S.PlayButton
          src="/assets/plus.svg"
          onClick={() => setModalOpen(true)}
        />
      )}
      <LibraryModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        music={data}
      />
    </S.Container>
  );
};

export default MusicItem;
