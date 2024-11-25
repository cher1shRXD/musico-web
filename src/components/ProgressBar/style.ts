import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  border-radius:1rem;
  overflow: visible;
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(79deg, ${POINT.primary} 0%, ${POINT.secondary} 0%, ${POINT.thirdary} 100%);
  width: ${({ $progress }) => `${$progress * 100}%`};
  overflow: visible;
  border-radius: 1rem;
`;

export const ProgressPointer = styled.div<{ $progress: number }>`
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  border: 0.1rem solid ${POINT.primary};
  top: 50%;
  left: ${({ $progress }) => `${$progress * 100}%`};
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
