import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  cursor: pointer;
`

export const Cover = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;
`

export const InfoWrap = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.p`
  font-size: 2rem;
`

export const SongCount = styled.p`
  color: gray;
  font-size: 1.6rem;
`

export const EnterDetail = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  object-position: center;
`