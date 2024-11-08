import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { POINT } from "../../constants/colors";

export const Container = styled.div`
  width: 32rem;
  height: 100%;
  border-right: 0.1rem solid #f1f1f1;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  padding: 1.2rem;
  flex-direction: column;
`;

export const SectionTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

export const MenuItem = styled(Link)<{ isFocus: boolean }>`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
  padding: 1rem;
  color: ${(props) => (props.isFocus ? "white" : "black")};
  background-color: ${(props) =>
    props.isFocus ? POINT.secondary : "transparent"};
  border-radius: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  margin: 0.4rem 0 0.4rem 0;
`;

export const MenuText = styled.p`
  font-size: 2rem;
`;

export const MeunIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: fill;
  object-position: center;
`;

export const Spacer = styled.div`
  height: 5rem;
`;

export const LibraryItem = styled.div`
  width: 100%;
  height: 7rem;
  border-radius: 1rem;
  box-shadow: 0.01rem 0.01rem 0.5rem 0.01rem #DDDDDD;
  display: grid;
  margin: 0.6rem 0;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    margin: 2rem 0;
  }
`;
