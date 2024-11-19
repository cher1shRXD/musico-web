import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { POINT } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0 1rem;
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

export const Search = styled(Link)`
  width: 100%;
  max-width: 52rem;
  height: 5rem;
  border: 0.1rem solid #f1f1f1;
  border-radius: 1rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-color: white;
`;

export const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`;

export const SearchPlaceholder = styled.p`
  font-size: 1.6rem;
  color: gray;
`;

export const MusicCell = styled.div`
  width: 50%;
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  grid-template-rows: repeat(68, 1rem);
  gap: 1rem;
  padding: 2rem;
`;

export const SectionTitle = styled(Link)`
  font-size: 2.4rem;
  font-weight: 500;
  color: #2b2b2b;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoToSection = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`

export const Section = styled.div<{
  rowstart: string;
  rowend: string;
  colstart: string;
  colend: string;
}>`
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => props.colstart} / ${(props) => props.colend};
  grid-row: ${(props) => props.rowstart} / ${(props) => props.rowend};
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #f1f1f1;
  border: 0.1rem solid #f1f1f1;
  padding: 2rem;
  border-radius: 2rem;
  gap: 0.8rem;
  background-color: white;
`;

export const SectionContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RankContent = styled.div`
  width: 100%;
  flex: 1;
`

export const LibraryContent = styled.div`
  width: 100%;
  height: 95%;
  overflow-y: scroll;
`