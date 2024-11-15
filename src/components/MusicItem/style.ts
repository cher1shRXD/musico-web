import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  min-width: 32rem;
  height: 12rem;
  padding: 1rem 3rem 1rem 1rem;
  transition: all 0.5s;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover .cover-overlay {
    opacity: 1;
  }
`;

export const Cover = styled.div<{ src: string }>`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
  background: url(${(props) => props.src}) center no-repeat;
  background-size: contain;
`;

export const CoverOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const MusicInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const MusicTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const MusicArtistWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MusicArtist = styled.p`
  color: gray;
  font-size: 1.6rem;
`;

export const RankNumber = styled.div<{
  isTop?: boolean;
  isUnderHalf?: boolean;
}>`
  width: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) =>
    props.isTop
      ? POINT.primary
      : (props) => (!props.isUnderHalf ? POINT.secondary : "black")};
`;

export const PlayButton = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;