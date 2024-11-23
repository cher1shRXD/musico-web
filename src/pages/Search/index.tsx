import { useEffect, useState } from "react";
import useSearchMusic from "../../hooks/music/useSearchMusic";
import MusicItem from "../../components/MusicItem";
import * as S from "./style";
import { notification } from "antd";
import useGetRank from "../../hooks/music/useGetRank";
import { VibeResponse } from "../../types/music/vibeResponse";

const Search = () => {
  const [query, setQuery] = useState("");
  const [requestedQuery, setRequestedQuery] = useState("");
  const { searchResult, searchMusic } = useSearchMusic();
  const [isRequested, setIsRequested] = useState(false);
  const { rankData } = useGetRank();
  const [shuffledRankData, setShuffledRankData] = useState<VibeResponse[]>([]);

  useEffect(() => {
    if (rankData && rankData.length > 0) {
      const shuffled = [...rankData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      setShuffledRankData(shuffled);
    }
  }, [rankData]);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchRequest = (e?: string) => {
    if (query.trim().length === 0) {
      notification.open({
        message: "검색어를 최소 한 글자 이상 입력해주세요.",
      });
      return;
    }
    searchMusic(e || query);
    setRequestedQuery(e || query);
    setIsRequested(true);
  };

  const searchRecommend = (e: string) => {
    searchRequest(e);
    setQuery(e);
  }

  return (
    <S.Container>
      <S.SearchWrap>
        <S.Search>
          <S.SearchInput
            type="search"
            onChange={handleQuery}
            value={query}
            placeholder="오늘은 어떤 노래가 듣고 싶나요?"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
                searchRequest();
              }
            }}
          />
          <S.SearchIcon src="/assets/searchIcon.svg" onClick={()=>searchRequest()} />
        </S.Search>
      </S.SearchWrap>
      {!isRequested ? (
        <S.NoResultWrap>
          <S.NoResult>검색어를 입력해주세요.</S.NoResult>
        </S.NoResultWrap>
      ) : searchResult.length === 0 ? (
        <S.NoResultWrap>
          <S.NoResult>검색결과가 없습니다.</S.NoResult>
        </S.NoResultWrap>
      ) : (
        <>
          <S.SearchTextWrap>
            <S.SearchText>
              "{requestedQuery}"의 검색결과
              <S.SearchTextAccent> {searchResult.length}건</S.SearchTextAccent>
            </S.SearchText>
            <S.SearchResultInfo>
              MUSICO에서는 최대 200건의 검색결과를 지원합니다.
            </S.SearchResultInfo>
          </S.SearchTextWrap>
          <S.ContentWrap>
            <S.ResultWrap>
              {searchResult.map((data) => (
                <MusicItem data={data} key={data.trackId} />
              ))}
            </S.ResultWrap>
            <S.RecommendWrap>
              <S.Recommend>
                <S.RecommendTitle>이런 곡은 어때요?</S.RecommendTitle>
                {
                  shuffledRankData.map((data)=>(
                    <S.RecommendSongTitle key={data.trackId} onClick={()=>searchRecommend(data.title)}>{data.title}</S.RecommendSongTitle>
                  ))
                }
              </S.Recommend>
            </S.RecommendWrap>
          </S.ContentWrap>
        </>
      )}
    </S.Container>
  );
};

export default Search;
