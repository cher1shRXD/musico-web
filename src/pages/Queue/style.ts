import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: scroll;
  transition: all 0.4s;
`;

export const MusicInfoWrap = styled.div`
  flex: 1;
  min-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoverWrap = styled.div`
  width: 100%;
  max-width: 44rem;
  height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Cover = styled.img`
  width: 100%;
  border-radius: 2rem;
`

export const Title = styled.p`
  font-size: 4rem;
  font-weight: 500;
  margin-top: 3rem;
`

export const MusicArtistWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const MusicArtist = styled.p`
  font-size: 2rem;
  color: gray;
`;

export const Queue = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border-left: 0.1rem solid #f1f1f1;
  padding-left: 2rem;
`;

export const QueueWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 40rem;
`;

export const QueueTitle = styled.p`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`

export const QueueIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`

export const NoSongContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoSongText = styled.p`
  font-size: 4rem;
  color: gray;
  font-weight: 700;
`