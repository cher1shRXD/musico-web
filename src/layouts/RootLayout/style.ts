import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 32rem;
`;

export const Main = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding-bottom: 15rem;
`;