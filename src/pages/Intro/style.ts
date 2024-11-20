import styled from "@emotion/styled";
import { POINT } from "../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Banner = styled.div`
  width: 100%;
  height: 44rem;
  background: url('/assets/banner.gif') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`

export const Title = styled.p`
  font-size: 5rem;
  font-weight: 500;
  color: white;
  margin-bottom: 3rem;
`

export const Or = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: white;
`

export const InputWrap = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 5rem;
  display: flex;
`

export const Input = styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  font-size: 1.6rem;
  padding: 1rem;
  background-color: white;
`

export const Button = styled(Link)`
  width: 10rem;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${POINT.primary};
  cursor: pointer;
  color: white;
  font-size: 2rem;
  text-decoration: none;
`

export const ArrowIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
`

export const IntroduceWrap = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const IntroduceBox = styled.div`
  width: 28rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

export const LoginButton = styled(Link)`
  font-size: 1.6rem;
  color: ${POINT.secondary};
  padding: 1rem 2rem;
  outline: none;
  border: 0.1rem solid ${POINT.secondary};
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;
  text-decoration: none;
  &:hover{
    background-color: ${POINT.secondary};
    color: white;
  }
`;

export const Logos = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 1rem;
  object-fit: contain;
  object-position: center;
`

export const ServiceName = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

export const ServiceUses = styled.p`
  width: 100%;
  flex: 1;
  padding: 2rem;
  text-align: center;
  font-size: 1.6rem;
  word-break: keep-all;
`