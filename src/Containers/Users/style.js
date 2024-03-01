import styled from "styled-components";
import Background from "../../Assets/bg image2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 80px;
  color: rgba(255, 255, 255, 1);
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  border: 1px solid #ffffff;
  margin-top: 132px;

  background: transparent;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: rotateY(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;
  width: 342px;
  height: 58px;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
