import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingBar = () => {
  return (
    <Container>
      <Dot />
      <Dot />
      <Dot />
    </Container>
  );
};

export default LoadingBar;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Container = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #2f3648;
  border-radius: 50%;
  margin: 0 8px;
  animation: ${bounce} 1.5s infinite;
  animation-delay: ${(props) => props.delay || "0s"};

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`;
