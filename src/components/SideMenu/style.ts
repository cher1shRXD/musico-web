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

export const Spacer = styled.div`
  flex: 1;
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
  color: #FF2929;
`;

export const LogoutIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: cover;
  object-position: center;
`