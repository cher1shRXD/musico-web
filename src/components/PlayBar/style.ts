import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { HALFMOBILE, MOBILE, TABLET } from "../../constants/mediaQuery";

const FadeIn = keyframes`
  0%{
    transform: translateY(12rem);
  }
  70%{
    transform: translateY(-1rem);
  }
  100%{
    transform: translateY(0);
  }
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  z-index: 999;
`;

export const Playbar = styled.div<{ $detailView: boolean }>`
  width: ${(props) => (props.$detailView ? "52rem" : "calc(100vw - 34rem)")};
  height: ${(props) => (props.$detailView ? "calc(100vh - 6rem)" : "10rem")};
  right: ${(props) => (props.$detailView ? "3rem" : "1rem")};
  bottom: ${(props) => (props.$detailView ? "3rem" : "1rem")};
  border-radius: ${(props) => (props.$detailView ? "2rem" : "5rem")};
  transform: translateY(12rem);
  position: fixed;
  animation: ${FadeIn} 0.5s forwards;
  padding: ${(props) => (props.$detailView ? "3rem" : "1rem")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.$detailView ? "column" : "row")};
  z-index: 999;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #ccc;
  transition: all 0.2s;
  @media (max-width: ${TABLET}) {
    height: ${(props) => (props.$detailView ? "calc(100vh - 2rem)" : "10rem")};
    bottom: 1rem;
    right: 1rem;
  }
  @media (max-width: ${MOBILE}) {
    width: ${(props) => (props.$detailView ? "52rem" : "calc(100vw - 2rem)")};
  }
  @media (max-width: ${HALFMOBILE}) {
    width: calc(100vw - 2rem);
    height: ${(props) => (props.$detailView ? "calc(100vh - 2rem)" : "6rem")};
    border-radius: 1rem;
    padding: ${(props) => (props.$detailView ? "3rem" : "0.5rem")};
    justify-content: ${(props) =>
      props.$detailView ? "flex-start" : "space-between"};
    gap: ${(props) => (props.$detailView ? "3rem" : "0")};
  }
`;

export const InfoWrap = styled.div<{ $detailView: boolean }>`
  width: ${(props) => (props.$detailView ? "100%" : "30rem")};
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.$detailView ? "column" : "row")};
  gap: ${(props) => (props.$detailView ? "2rem" : "1rem")};
  transition: all 0.4s;
`;

export const Cover = styled.img<{ $detailView: boolean }>`
  width: ${(props) => (props.$detailView ? "100%" : "8rem")};
  aspect-ratio: 1 / 1;
  border-radius: ${(props) => (props.$detailView ? "1rem" : "8rem")};
  object-fit: cover;
  object-position: center;
  animation: ${(props) => (props.$detailView ? "" : Spin)} 4s linear infinite;
  @media (max-width: ${TABLET}) {
    max-width: 40rem;
  }
  @media (max-width: ${HALFMOBILE}) {
    width: ${(props) => (props.$detailView ? "100%" : "5rem")};
    border-radius: 0.8rem;
    animation: none;
  }
`;

export const PlayControlWrap = styled.div<{ $detailView: boolean }>`
  width: ${(props) => (props.$detailView ? "90%" : "35%")};
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-direction: column;
  padding: 0 1rem;
  @media (max-width: ${HALFMOBILE}) {
    height: 6rem;
  }
`;

export const ButtonsWrap = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ControlButton = styled.img`
  object-fit: fill;
  object-position: center;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

export const TimeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const OtherControlWrap = styled.div<{ $detailView: boolean }>`
  width: 30rem;
  height: 8rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-right: ${(props) => (props.$detailView ? "0" : "3rem")};
  @media (max-width: ${HALFMOBILE}) {
    display: ${(props) => (props.$detailView ? "flex" : "none")};
    height: 6rem;
  }
`;

export const MusicInfo = styled.div<{ $detailView: boolean }>`
  flex: 1;
  display: flex;
  align-items: ${(props) => (props.$detailView ? "center" : "flex-start")};
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => (props.$detailView ? "1.6rem" : "0.8rem")};
`;

export const MusicTitle = styled.p<{ $detailView: boolean }>`
  font-size: ${(props) => (props.$detailView ? "2.8rem" : "1.6rem")};
  text-align: ${(props) => (props.$detailView ? "center" : "start")};
  text-overflow: ellipsis;
  word-break: keep-all;
`;

export const MusicArtistWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MusicArtist = styled.p<{ $detailView: boolean }>`
  font-size: ${(props) => (props.$detailView ? "1.6rem" : "1.2rem")};
  color: gray;
`;

export const VolumeWrap = styled.div`
  flex: 1;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StatusIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
