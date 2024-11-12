import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
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

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  padding: 0 2rem;
`;
