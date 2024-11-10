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
`;

export const Playbar = styled.div`
  width: 95%;
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
`;

export const InfoWrap = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
`;

export const Cover = styled.img<{ isPlaying: boolean }>`
  width: 8rem;
  height: 8rem;
  border-radius: 100rem;
  object-fit: cover;
  object-position: center;
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
`;
