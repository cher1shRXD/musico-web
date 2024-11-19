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
  margin: 0 1rem;
  cursor: pointer;
  &:active {
    border: 0.1rem solid ${POINT.thirdary};
  }
  &:disabled {
    border: 0.1rem solid ${POINT.thirdary};
  }
`;

export const PlaylistDeleteButton = styled.button`
  font-size: 1.6rem;
  border: 0.1rem solid #FF2929;
  background-color: white;
  color: #FF2929;
  border-radius: 0.6rem;
  outline: none;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  &:active {
    border: 0.1rem solid #FF2929;
  }
  &:disabled {
    border: 0.1rem solid #FF2929;
  }
`;

export const Label = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  border: 0.1rem solid #ccc;
  outline: none;
`;

export const Warning = styled.p`
  height: 2rem;
  font-size: 1.2rem;
  color: #ff2929;
`;
