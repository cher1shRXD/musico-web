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
  background-color: white;
`;

export const Logo = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin: 2rem 0;
`;

export const SectionTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: gray;
`;

export const MenuItem = styled(Link)<{ isFocused: boolean }>`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
  padding: 1rem;
  color: ${(props) => (props.isFocused ? "white" : "black")};
  background: ${(props) =>
    props.isFocused
      ? `linear-gradient(79deg, ${POINT.secondary} 0%, ${POINT.thirdary} 100%)`
      : "transparent"};
  border-radius: 1rem;
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
  display: grid;
  margin: 0.6rem 0;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0.01rem 0.01rem 0.5rem 0.01rem #dddddd;
  }
`;
