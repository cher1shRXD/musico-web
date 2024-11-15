import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";

export const ModalOkButton = styled.button`
  font-size: 1.6rem;
  background-color: ${POINT.secondary};
  color: white;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  &:active {
    background-color: ${POINT.thirdary};
  }
  &:disabled {
    background-color: ${POINT.thirdary};
  }
`;

export const ModalCancelButton = styled.button`
  font-size: 1.6rem;
  border: 0.1rem solid ${POINT.secondary};
  background-color: white;
  color: ${POINT.secondary};
  border-radius: 0.6rem;
  outline: none;
  padding: 0.6rem 1.2rem;
  margin-right: 1rem;
  cursor: pointer;
  &:active {
    border: 0.1rem solid ${POINT.thirdary};
  }
  &:disabled {
    border: 0.1rem solid ${POINT.thirdary};
  }
`;
