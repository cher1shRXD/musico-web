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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Drop = keyframes`
  0% {
    flex: 0;
  }
  100% {
    flex: 1;
  }
`

export const Container = styled.div`
  z-index: 999;
`;

export const Playbar = styled.div<{
  $detailView: boolean;
  $queueView: boolean;
}>`
  width: ${(props) => (props.$detailView ? "48rem" : "calc(100vw - 34rem)")};
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
  justify-content: ${(props) =>
    props.$detailView
      ? props.$queueView
        ? "flex-start"
        : "space-between"
      : "space-between"};
  flex-direction: ${(props) => (props.$detailView ? "column" : "row")};
  z-index: 999;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #ccc;
  transition: all 0.2s;
  @media (max-width: ${TABLET}) {
    width: ${(props) => (props.$detailView ? "48rem" : "calc(100vw - 2rem)")};
    height: ${(props) => (props.$detailView ? "calc(100vh - 2rem)" : "10rem")};
    bottom: 1rem;
    right: 1rem;
  }
  @media (max-width: ${HALFMOBILE}) {
    width: calc(100vw - 2rem);
    height: ${(props) => (props.$detailView ? "calc(100vh - 10rem)" : "6rem")};
    border-radius: 1rem;
    padding: ${(props) => (props.$detailView ? "3rem" : "0.5rem")};
  }
`;

export const InfoWrap = styled.div<{ $detailView: boolean }>`
  width: ${(props) => (props.$detailView ? "100%" : "30rem")};
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.$detailView ? "column" : "row")};
  gap: ${(props) => (props.$detailView ? "2rem" : "1rem")};
  transition: all 0.4s;
  @media (max-width: ${HALFMOBILE}) {
    width: calc(100% - 6rem);
  }
`;

export const Cover = styled.img<{ $detailView: boolean }>`
  width: ${(props) => (props.$detailView ? "100%" : "8rem")};
  aspect-ratio: 1 / 1;
  border-radius: ${(props) => (props.$detailView ? "1rem" : "8rem")};
  object-fit: cover;
  object-position: center;
  animation: ${(props) => (props.$detailView ? "" : Spin)} 4s linear infinite;
  @media (max-width: ${HALFMOBILE}) {
    width: ${(props) => (props.$detailView ? "80%" : "5rem")};
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
    display: ${(props) => (props.$detailView ? "flex" : "none")};
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
    width: 100%;
    max-width: 30rem;
    display: ${(props) => (props.$detailView ? "flex" : "none")};
    height: 6rem;
  }
`;

export const MusicInfo = styled.div<{ $detailView: boolean }>`
  flex: 1;
  height: 100%;
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
  white-space: ${(props) => (props.$detailView ? "normal" : "nowrap")};
  width: 100%;
  word-break: keep-all;
  @media (max-width: ${HALFMOBILE}) {
    font-size: 1.6rem;
  }
`;

export const MusicArtistWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MusicArtist = styled.p<{ $detailView: boolean }>`
  font-size: ${(props) => (props.$detailView ? "1.6rem" : "1.2rem")};
  color: gray;
  @media (max-width: ${HALFMOBILE}) {
    font-size: 1.2rem;
  }
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

export const MobileButtonWrap = styled.div<{ $detailView: boolean }>`
  width: 8rem;
  align-items: center;
  justify-content: space-evenly;
  display: none;
  @media (max-width: ${HALFMOBILE}) {
    display: ${(props) => (props.$detailView ? "none" : "flex")};
  }
`;

export const MobileButton = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`;

export const QueueWrap = styled.div<{ $detailView: boolean }>`
  width: 100%;
  flex: 1;
  display: ${(props) => (props.$detailView ? "block" : "none")};
  overflow-y: scroll;
  animation: ${Drop} 0.4s forwards;
`;

export const QueueIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`;

export const QueueHeader = styled.div<{ $detailView: boolean }>`
  width: 100%;
  padding: 1rem 0;
  align-items: center;
  display: ${(props) => (props.$detailView ? "flex" : "none")};
`;

export const DropDown = styled.img<{ $queueView: boolean }>`
  width: 2rem;
  height: 2rem;
  transition: all 0.5s;
  transform: ${(props) => (props.$queueView ? "rotate(180deg)" : "rotate(0)")};
`;
