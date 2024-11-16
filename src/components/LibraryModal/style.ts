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

export const ItemContainer = styled.div`
  width: 100%;
  height: 3.2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const ItemTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
`

export const ItemSelect = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  accent-color: ${POINT.secondary};
`

export const Hr = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #ccc;
  margin: 1rem 0;
`