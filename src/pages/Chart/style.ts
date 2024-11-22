import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";
import { MOBILE } from "../../constants/mediaQuery";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15rem;
  box-sizing: content-box;
`;

export const Banner = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    79deg,
    ${POINT.primary} 0%,
    ${POINT.thirdary} 100%
  );
  padding: 4rem;
  @media (max-width: ${MOBILE}) {
    padding: 2rem;
    height: 12rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const BannerText = styled.div`
  font-size: 5rem;
  color: white;
  font-weight: 700;
  @media (max-width: ${MOBILE}) {
    font-size: 3rem;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: white;
  top: 4rem;
  display: flex;
  gap: 4rem;
  @media (max-width: ${MOBILE}) {
    padding: 1rem 0;
  }
`;

export const RankWrap = styled.div`
  flex: 1;
  padding: 1rem;
  @media (max-width: ${MOBILE}) {
    padding: 0;
  }
`;

export const TopText = styled.p`
  font-size: 2rem;
  color: ${POINT.secondary};
`;

export const VideoSource = styled.p`
  font-size: 1.6rem;
  color: gray;
  align-self: flex-end;
  font-weight: 200;
`;

export const TopVideo = styled.div`
  flex: 1;
  height: 48rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  font-weight: 700;
  position: sticky;
  top: 0;
  background-color: white;
  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const Korea = styled.span`
  font-weight: 300;
  font-size: 2.4rem;
  margin-left: 0.4rem;
`