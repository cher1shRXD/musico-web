import { useEffect, useState } from "react";
import * as S from "./style";
import useGetMyPlaylistDetail from "../../hooks/playlist/useGetMyPlaylistDetail";
import { useParams } from "react-router-dom";
import StoredMusicItem from "../../components/StoredMusicItem";
import { usePlaylistUpdateStore } from "../../store/update/usePlaylistUpdateStore";
import useCopyPlaylist from "../../hooks/queue/useCopyPlaylist";
import { notification } from "antd";
import PlaylistEditModal from "../../components/PlaylistEditModal";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";

const Playlist = () => {
  const { getMyPlaylistDetail, playlistDetail } = useGetMyPlaylistDetail();
  const setIsPlaying = usePlayerStateStore(state=>state.setIsPlaying);
  const setIsUpdated = usePlaylistUpdateStore((state) => state.setIsUpdated);
  const isUpdated = usePlaylistUpdateStore((state) => state.isUpdated);
  const copyPlaylist = useCopyPlaylist();
  const params = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (params && params.playlistId) {
      getMyPlaylistDetail(params.playlistId);
    }
  }, [params.playlistId]);

  useEffect(() => {
    if (!isUpdated) {
      return;
    }
    if (params && params.playlistId) {
      getMyPlaylistDetail(params.playlistId);
      setIsUpdated(false);
    }
  }, [isUpdated]);

  const handlePlay = async () => {
    if (!(params && params.playlistId)) {
      return;
    }
    if (playlistDetail && playlistDetail.songs.length > 0) {
      await copyPlaylist(params.playlistId);
      setIsPlaying(true);
    } else {
      notification.open({
        message: "플레이리스트 재생 실패",
        description: "플레이리스트에 곡이 없습니다.",
      });
    }
  };

  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>{playlistDetail?.title} <S.EditButton src="/assets/edit.svg" onClick={()=>setModalOpen(prev=>!prev)} /></S.BannerText>
        <S.PlayPlaylist onClick={handlePlay}>
          <S.PlayButton src="/assets/playSong.svg" />
        </S.PlayPlaylist>
      </S.Banner>
      <S.ContentWrap>
        {playlistDetail && playlistDetail.songs.length > 0 ? (
          <S.ItemWrap>
            {playlistDetail?.songs.map((data) => (
              <StoredMusicItem
                data={data}
                key={data.trackId}
                playlistId={playlistDetail.id}
                type="playlist"
              />
            ))}
          </S.ItemWrap>
        ) : (
          <S.NoSong>곡이 없습니다.</S.NoSong>
        )}
      </S.ContentWrap>
      <PlaylistEditModal playlist={playlistDetail} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </S.Container>
  );
};

export default Playlist;
