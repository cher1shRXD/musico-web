import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
  width: calc(100vw - 32rem);
  height: 12rem;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: visible;
`;

export const Playbar = styled.div`
  width: 98%;
  height: 10rem;
  border-radius: 100rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #ccc;
  transform: translateY(12rem);
  animation: ${FadeIn} 0.5s forwards;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background-color: white;
`;

export const InfoWrap = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  gap: 1rem;
`;

export const Cover = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100rem;
  object-fit: cover;
  object-position: center;
  animation: ${Spin} 4s linear infinite;
`;

export const PlayControlWrap = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-direction: column;
  padding: 0 1rem;
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
`

export const OtherControlWrap = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MusicInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
`


export const MusicTitle = styled.p`
  font-size: 1.6rem;
`

export const MusicArtistWrap = styled.div`
  display: flex;
`

export const MusicArtist = styled.p`
  font-size: 1.2rem;
  color: gray;
`

export const VolumeWrap = styled.div`
  flex: 1;
  padding: 0 4rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const VolumeIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  object-position: center;
`