import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  box-sizing: content-box;
`;

export const SearchWrap = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin-top: 4rem;
`;

export const Search = styled.div`
  width: 100%;
  max-width: 52rem;
  height: 5rem;
  background: white;
  border: 0.1rem solid #f1f1f1;
  border-radius: 1rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  gap: 1rem;
`;

export const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.6rem;
`;

export const SearchTextWrap = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom: 0.1rem solid ${POINT.thirdary};
  margin-bottom: 2rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const SearchText = styled.p`
  font-size: 2.4rem;
`

export const SearchTextAccent = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${POINT.primary};
`

export const SearchResultInfo = styled.p`
  font-size: 1.2rem;
  color: gray;
  font-weight: 300;
`

export const ContentWrap = styled.div`
  width: 100%;
  min-height: calc(100% - 20rem);
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  padding: 0 2rem;
  gap: 2rem;
`;

export const ResultWrap = styled.div`
  flex: 1;
`;

export const ChartWrap = styled.div`
  width: 50rem;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
`

export const Recommend = styled.div`
  width: 100%;
  height: 40rem;
  border-top: 0.6rem solid ${POINT.secondary};
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`

export const RecommendTitle = styled.p`
  font-size: 2rem;
  color: gray;
`

export const NoResultWrap = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoResult = styled.p`
  color: gray;
  font-size: 2rem;
`

export const InfoIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`