import { useEffect } from "react";
import * as S from './style';
import useGetRank from "../../hooks/music/useGetRank";
import useSearchMusic from "../../hooks/music/useSearchMusic";
import MusicItem from "../../components/MusicItem";

const Home = () => {
  const { getRank, rankData } = useGetRank();
  const { searchResult, searchMusic } = useSearchMusic();

  useEffect(()=>{
    getRank(10);
  },[]);

  return (
    <S.Container>
      <S.SearchWrap>
        <S.Search to="/search">
          <S.SearchPlaceholder>
            오늘은 어떤 노래가 듣고 싶나요?
          </S.SearchPlaceholder>
          <S.SearchIcon src="/assets/searchIconWhite.svg" />
        </S.Search>
      </S.SearchWrap>
      <S.ContentWrap>
        {rankData.map((data) => (
          <MusicItem data={data}/>
        ))}
      </S.ContentWrap>
    </S.Container>
  );
}

export default Home