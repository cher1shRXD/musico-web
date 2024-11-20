import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";

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
  justify-content: space-between;
  background: linear-gradient(
    79deg,
    ${POINT.secondary} 0%,
    ${POINT.primary} 100%
  );
  padding: 4rem;
`;

export const BannerText = styled.div`
  font-size: 5rem;
  color: white;
  font-weight: 700;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background-color: white;
  top: 4rem;
  display: flex;
  gap: 4rem;
`;

export const ItemWrap = styled.div`
  flex: 1;
  padding: 1rem;
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
`;

export const NoSong = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: gray;
`

export const PlayPlaylist = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const PlayButton = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  object-position: center;
  margin-left: 0.6rem;
`

export const EditButton = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`