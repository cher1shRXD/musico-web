import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { POINT } from "../../constants/colors";

const FadeIn = keyframes`
  0%{
    opacity:0;
    transform:translateX(5rem);
  }
  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  background: url("/assets/login_bg.gif") no-repeat;
  background-position: 10rem;
  background-size: cover;
`;

export const LoginWrap = styled.div`
  width: 100%;
  max-width: 70rem;
  height: 100%;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  transition: all 0.2s;
  background-color: white;
  border-radius: 0 8rem 8rem 0;
  @media (max-width: 720px) {
    padding: 2rem;
    border-radius: 0;
  }
`;

export const Title = styled.p`
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 5rem;
  width: 75%;
  transition: all 0.2s;
  animation: ${FadeIn} 0.7s forwards;
  opacity: 0;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Label = styled.p`
  width: 75%;
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s;
  animation: ${FadeIn} 0.7s 0.3s forwards;
  opacity: 0;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 75%;
  font-size: 2rem;
  padding: 1.2rem;
  border: 0.0625rem solid #ccc;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 2rem;
  border-radius: 1rem;
  transition: all 0.2s;
  animation: ${FadeIn} 0.7s 0.3s forwards;
  opacity: 0;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const PasswordInput = styled.input`
  font-size: 2rem;
  padding: 1.2rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  transition: all 0.2s;
  flex: 1;
`;

export const PasswordWrap = styled.div`
  width: 75%;
  transition: all 0.2s;
  border: 0.0625rem solid #ccc;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  animation: ${FadeIn} 0.7s 0.3s forwards;
  opacity: 0;
  @media (max-width: 720px) {
    width: 100%;
  }
`;


export const AutoLoginWrap = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  transition: all 0.2s;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Check = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  accent-color: ${POINT.primary};
  animation: ${FadeIn} 0.7s 0.3s forwards;
  opacity: 0;
`;

export const Button = styled.button`
  width: 75%;
  font-size: 2.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  text-align: center;
  background-color: ${POINT.primary};
  border-radius: 1rem;
  transition: all 0.2s;
  animation: ${FadeIn} 0.7s 0.6s forwards;
  opacity: 0;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Filler = styled.div`
  flex: 1;
  width: 100%;
`;

export const NavWrap = styled.div`
  width: 75%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  transition: all 0.2s;
  animation: ${FadeIn} 0.7s 0.7s forwards;
  opacity: 0;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Nav = styled(Link)`
  font-size: 1.2rem;
  color: #ccc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
