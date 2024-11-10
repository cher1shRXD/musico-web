import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { POINT } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: scroll;
`;

export const SearchWrap = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const Search = styled(Link)`
  width: 100%;
  max-width: 52rem;
  height: 4rem;
  background: linear-gradient(
    79deg,
    ${POINT.thirdary} 0%,
    ${POINT.secondary} 100%
  );
  border-radius: 10rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
`;

export const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`;

export const SearchPlaceholder = styled.p`
  font-size: 1.2rem;
  color: white;
`;
export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  padding: 2rem;
`;
