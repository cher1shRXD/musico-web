import { useEffect } from "react";
import * as S from "./style";
import useGetMyPlaylistDetail from "../../hooks/playlist/useGetMyPlaylistDetail";
import { useParams } from "react-router-dom";
import StoredMusicItem from "../../components/StoredMusicItem";
import { usePlaylistUpdateStore } from "../../store/update/usePlaylistUpdateStore";

const Playlist = () => {
  const { getMyPlaylistDetail, playlistDetail } = useGetMyPlaylistDetail();
  const setIsUpdated = usePlaylistUpdateStore((state) => state.setIsUpdated);
  const isUpdated = usePlaylistUpdateStore((state) => state.isUpdated);
  const params = useParams();

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

  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>{playlistDetail?.title}</S.BannerText>
      </S.Banner>
      <S.ContentWrap>
        {playlistDetail && playlistDetail?.songs.length > 0 ? (
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
    </S.Container>
  );
};

export default Playlist;
