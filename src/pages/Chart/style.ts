import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    79deg,
    ${POINT.primary} 0%,
    ${POINT.secondary} 100%
  );
  overflow-y: visible;
`;

export const Banner = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: flex-end;
  padding: 4rem;
`

export const BannerText = styled.div`
  font-size: 5rem;
  color: white;
  font-weight: 700;
`

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: white;
  position: sticky;
  overflow-y: visible;
  top: 4rem;
  display: flex;
  gap: 10rem;
`;

export const RankWrap = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
`

export const TopText = styled.p`
  font-size: 2rem;
  color: ${POINT.secondary};
`

export const VideoSource = styled.p`
  font-size: 1.6rem;
  color: gray;
  align-self: flex-end;
  font-weight: 200;
`

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
`