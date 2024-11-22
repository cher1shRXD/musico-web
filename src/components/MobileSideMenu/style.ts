import styled from "@emotion/styled";
import { TABLET } from "../../constants/mediaQuery";
import { POINT } from "../../constants/colors";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const FadeIn = keyframes`
  0%{
    transform: translateX(-32rem);
  }
  100%{
    transform: translateX(0);
  }
`;

const FadeOut = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-32rem);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  z-index: 99999;
  @media (max-width: ${TABLET}) {
    display: flex;
  }
`;

export const MenuButton = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 3rem;
  object-fit: contain;
  object-position: center;
`;

export const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
`;

export const SideMenuContainer = styled.div<{ $closeRequest: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 32rem;
  background-color: white;
  display: flex;
  padding: 1.2rem;
  flex-direction: column;
  transition: all 0.5s;
  transform: translateX(-32rem);
  animation: ${(props) => (props.$closeRequest ? FadeOut : FadeIn)} 0.5s
    forwards;
`;

export const MenuItem = styled(Link)<{ isfocused: string }>`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: black;
  padding: 1rem;
  color: ${(props) => (props.isfocused === "true" ? "white" : "black")};
  background: ${(props) =>
    props.isfocused === "true"
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

export const LogoutWrap = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

export const LogoutText = styled.p`
  font-size: 2rem;
  color: #ff2929;
`;

export const LogoutIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: cover;
  object-position: center;
`;

export const CloseWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Close = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;
