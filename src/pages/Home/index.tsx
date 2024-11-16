import { useEffect, useState } from "react";
import * as S from "./style";
import useGetRank from "../../hooks/music/useGetRank";
import MusicItem from "../../components/MusicItem";
import useGetNewSong from "../../hooks/music/useGetNewSong";
import ReactPlayer from "react-player";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import PlaylistModal from "../../components/PlaylistModal";
import useGetMyPlaylist from "../../hooks/playlist/useGetMyPlaylist";
import PlaylistItem from "../../components/PlaylistItem";

const Home = () => {
  const { getRank, rankData } = useGetRank();
  const { getNewSong, newSongData } = useGetNewSong();
  const [rankTopVideoId, setRankTopVideoId] = useState("");
  const [newTopVideoId, setNewTopVideoId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const getYoutubeMusic = useGetYoutube();
  const { playlist, getMyPlaylist } = useGetMyPlaylist();

  const getRankTopVideo = async () => {
    if (rankData.length > 0) {
      const youtubeResult = await getYoutubeMusic(
        `${rankData[0].title} - ${rankData[0].artists[0].artistName}`
      );
      if (youtubeResult.length > 0) {
        setRankTopVideoId(youtubeResult);
      }
    }
  };

  const getNewTopVideo = async () => {
    if (newSongData.length > 0) {
      const youtubeResult = await getYoutubeMusic(
        `${newSongData[0].title} - ${newSongData[0].artists[0].artistName}`
      );
      if (youtubeResult.length > 0) {
        setNewTopVideoId(youtubeResult);
      }
    }
  };

  useEffect(() => {
    getRank();
    getNewSong();
    getMyPlaylist();
  }, []);

  useEffect(() => {
    if (rankData.length > 0 && rankTopVideoId === "") {
      getRankTopVideo();
    }
    if (newSongData.length > 0 && newTopVideoId === "") {
      getNewTopVideo();
    }
  }, [rankData, newSongData]);

  useEffect(() => {
    getMyPlaylist();
  }, [modalOpen]);

  return (
    <S.Container>
      <S.SearchWrap>
        <S.Search to="/search">
          <S.SearchPlaceholder>
            오늘은 어떤 노래가 듣고 싶나요?
          </S.SearchPlaceholder>
          <S.SearchIcon src="/assets/searchIcon.svg" />
        </S.Search>
      </S.SearchWrap>
      <S.ContentWrap>
        <S.Section colstart="1" colend="31" rowstart="1" rowend="24">
          <S.SectionTitle to="/">Today's recommendations</S.SectionTitle>
          <S.SectionContent>
            {[...rankData]
              .sort(() => Math.random() - 0.5)
              .slice(0, 6)
              .map((data) => (
                <S.MusicCell>
                  <MusicItem data={data} key={data.trackId} />
                </S.MusicCell>
              ))}
          </S.SectionContent>
        </S.Section>
        <S.Section colstart="1" colend="31" rowstart="25" rowend="48">
          <S.SectionTitle to="/newest">
            New songs
            <S.GoToSection src="/assets/forward.svg" />
          </S.SectionTitle>
          <S.SectionContent>
            {newSongData.slice(0, 6).map((data) => (
              <S.MusicCell>
                <MusicItem data={data} key={data.trackId} />
              </S.MusicCell>
            ))}
          </S.SectionContent>
        </S.Section>
        <S.Section colstart="32" colend="49" rowstart="1" rowend="35">
          <S.SectionTitle to="/chart">
            Rank
            <S.GoToSection src="/assets/forward.svg" />
          </S.SectionTitle>
          <S.RankContent>
            {rankData.slice(0, 5).map((data, idx) => (
              <MusicItem
                data={data}
                key={data.trackId}
                hidePlus
                type="rank"
                rank={idx + 1}
              />
            ))}
          </S.RankContent>
        </S.Section>
        <S.Section colstart="1" colend="31" rowstart="49" rowend="69">
          <S.SectionTitle to="/">Videos</S.SectionTitle>
          <S.SectionContent>
            <ReactPlayer
              width="48%"
              height="96%"
              url={`https://www.youtube.com/watch?v=${rankTopVideoId}`}
            />
            <ReactPlayer
              width="48%"
              height="96%"
              url={`https://www.youtube.com/watch?v=${newTopVideoId}`}
            />
          </S.SectionContent>
        </S.Section>
        <S.Section colstart="32" colend="49" rowstart="36" rowend="69">
          <S.SectionTitle to="/" onClick={() => setModalOpen(true)}>
            Library
            <S.GoToSection src="/assets/makePlaylist.svg" />
          </S.SectionTitle>
          <S.LibraryContent>
            {playlist.map((data) => (
              <PlaylistItem data={data} key={data.id} />
            ))}
          </S.LibraryContent>
        </S.Section>
      </S.ContentWrap>
      <PlaylistModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </S.Container>
  );
};

export default Home;
