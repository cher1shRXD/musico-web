import { SpotifyResponse } from "../../types/music/spotifyResponse";
import * as S from "./style";

const MusicItem = ({
  data,
  onClick,
}: {
  data: SpotifyResponse;
  onClick: () => void;
}) => {
  return <S.Container onClick={onClick}>{data.artist_and_title}</S.Container>;
};

export default MusicItem;
