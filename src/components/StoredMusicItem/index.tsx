import useDeleteFromPlaylist from "../../hooks/playlist/useDeleteFromPlaylist";
import useAddSong from "../../hooks/queue/useAddSong";
import useDeleteSong from "../../hooks/queue/useDeleteSong";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { usePlaylistUpdateStore } from "../../store/update/usePlaylistUpdateStore";
import { useUserStore } from "../../store/user/useUserStore";
import { MusicData } from "../../types/music/musicData";
import * as S from "./style";

const StoredMusicItem = ({
  data,
  playlistId,
  type,
}: {
  data: MusicData;
  playlistId?: string;
  type: string;
}) => {
  const user = useUserStore((state) => state.user);
  const addSong = useAddSong();
  const setIsPlaying = usePlayerStateStore((state) => state.setIsPlaying);
  const deleteFromPlaylist = useDeleteFromPlaylist();
  const deleteFromQueue = useDeleteSong();
  const setIsUpdated = usePlaylistUpdateStore(state=>state.setIsUpdated);

  const handleClickMusic = async () => {
    setIsPlaying(false);
    await addSong(data);
    setIsPlaying(true);
  };

  const handleDeleteMusic = async () => {
    if(type === 'playlist' && playlistId) {
      await deleteFromPlaylist(data.trackId, playlistId);
      setIsUpdated(true);
      return;
    }
    if(type === 'queue') {
      await deleteFromQueue(data.trackId);
    }
  };

  if(type === 'queue') {
    return (
      <S.QueueContainer>
        <S.QueueCover src={data.coverUrl}>
          <S.CoverOverlay className="cover-overlay">
            <S.Button
              onClick={
                !(
                  user &&
                  user.queue.length > 0 &&
                  user.queue[user.currentSong].trackId === data.trackId
                )
                  ? handleClickMusic
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
        </S.QueueCover>
        <S.QueueMusicInfo>
          <S.MusicTitle>{data.title}</S.MusicTitle>
          <S.MusicArtistWrap>
            {data.artist.map((artist, idx) => (
              <S.MusicArtist key={idx}>
                {artist.artistName}
                {idx !== data.artist.length - 1 && " &\u00A0"}
              </S.MusicArtist>
            ))}
          </S.MusicArtistWrap>
        </S.QueueMusicInfo>
        <S.QueueButton onClick={handleDeleteMusic} src="/assets/trash.svg" />
      </S.QueueContainer>
    );
  }

  return (
    <S.Container>
      <S.Cover src={data.coverUrl}>
        <S.CoverOverlay className="cover-overlay">
          <S.Button
            onClick={
              !(
                user &&
                user.queue.length > 0 &&
                user.queue[user.currentSong].trackId === data.trackId
              )
                ? handleClickMusic
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
          {data.artist.map((artist, idx) => (
            <S.MusicArtist key={idx}>
              {artist.artistName}
              {idx !== data.artist.length - 1 && " &\u00A0"}
            </S.MusicArtist>
          ))}
        </S.MusicArtistWrap>
      </S.MusicInfo>
      <S.Button onClick={handleDeleteMusic} src="/assets/trash.svg" />
    </S.Container>
  );
};

export default StoredMusicItem;
