import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";
import { MOBILE } from "../../constants/mediaQuery";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  padding: 1rem 3rem 1rem 0;
  transition: all 0.5s;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover .cover-overlay {
    opacity: 1;
  }
  @media (max-width: ${MOBILE}) {
    padding: 1rem;
    height: 6rem;
  }
`;

export const Cover = styled.div<{ $src: string }>`
  width: 8rem;
  height: 8rem;
  border-radius: 0.5rem;
  background: url(${(props) => props.$src}) center no-repeat;
  background-size: contain;
  @media (max-width: ${MOBILE}) {
    height: 4rem;
    width: 4rem;
  }
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
  @media (max-width: ${MOBILE}) {
    gap: 0.4rem;
  }
`;

export const MusicTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #2b2b2b;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: ${MOBILE}) {
    font-size: 1.6rem;
  }
`;

export const MusicArtistWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MusicArtist = styled.p`
  color: gray;
  font-size: 1.6rem;
  @media (max-width: ${MOBILE}) {
    font-size: 1rem;
  }
`;

export const RankNumber = styled.div<{
  $isTop?: boolean;
  $isUnderHalf?: boolean;
}>`
  width: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) =>
    props.$isTop
      ? POINT.primary
      : (props) => (!props.$isUnderHalf ? POINT.secondary : "black")};
  @media (max-width: ${MOBILE}) {
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
  }
`;

export const PlayButton = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  @media (max-width: ${MOBILE}) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;