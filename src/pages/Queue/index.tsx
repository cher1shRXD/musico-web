import { useEffect } from "react";
import StoredMusicItem from "../../components/StoredMusicItem";
import useGetMe from "../../hooks/auth/useGetMe";
import { useUserStore } from "../../store/user/useUserStore";
import * as S from "./style";

const Queue = () => {
  const getMe = useGetMe();
  const user = useUserStore((state) => state.user);

  useEffect(()=>{
    getMe();
  },[]);

  if(user?.queue.length === 0) {
    return (
      <S.NoSongContainer>
        <S.NoSongText>재생목록에 곡이 없습니다!</S.NoSongText>
      </S.NoSongContainer>
    )
  }

  return (
    <S.Container>
      <S.MusicInfoWrap>
        <S.CoverWrap>
          <S.Cover
            src={
              user && user.queue[user.currentSong]
                ? user.queue[user.currentSong].coverUrl
                : "/assets/musico.svg"
            }
          />
          <S.Title>{user?.queue[user.currentSong].title}</S.Title>
          <S.MusicArtistWrap>
            {user &&
              user.queue.length > 0 &&
              user.queue[user.currentSong].artist.map((artist, idx) => (
                <S.MusicArtist key={idx}>
                  {`${artist.artistName}
                    ${
                      idx !== user.queue[user.currentSong].artist.length - 1
                        ? " &\u00A0"
                        : ""
                    }`}
                </S.MusicArtist>
              ))}
          </S.MusicArtistWrap>
        </S.CoverWrap>
      </S.MusicInfoWrap>
      <S.QueueWrap>
        <S.QueueTitle>
          재생목록 <S.QueueIcon src="/assets/queueOff.svg" />
        </S.QueueTitle>
        <S.Queue>
          {user?.queue.map((data, idx) => (
            <StoredMusicItem data={data} key={idx} type="queue" />
          ))}
        </S.Queue>
      </S.QueueWrap>
    </S.Container>
  );
};

export default Queue;
