import { Playlist } from "../../types/playlist/playlist";
import * as S from "./style";

const PlaylistItem = ({ data }: { data: Playlist }) => {  
  return (
    <S.Container to={`/playlist/${data.id}`}>
      <S.Cover src={data.songs.length > 0 ? data.songs[0].coverUrl : '/assets/musico.svg'} />
      <S.InfoWrap>
        <S.Title>{data.title}</S.Title>
        <S.SongCount>{data.songs.length}곡</S.SongCount>
      </S.InfoWrap>
      <S.EnterDetail src="/assets/forward.svg" />
    </S.Container>
  );
};

export default PlaylistItem;
