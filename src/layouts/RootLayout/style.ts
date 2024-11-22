import styled from "@emotion/styled";
import { TABLET } from "../../constants/mediaQuery";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 32rem;
  @media (max-width:${TABLET}) {
    padding-left: 0;
    padding-top: 5rem;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;