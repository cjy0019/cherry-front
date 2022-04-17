import React from 'react';
import styled, { keyframes } from 'styled-components';

import palette from '../../style/palette';
import LoadingImg from '../../assets/img/loading.png';

const LoadingTemplate = () => {
  return (
    <Container>
      <StyledImg src={LoadingImg} alt='로딩 이미지' />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.backgroundBlack};
`;

const rotateImg = keyframes`
  100% {
    transform: rotate(720deg);
  }
`;

const StyledImg = styled.img`
  animation: ${rotateImg} 4s ease-in-out infinite;
  transform-origin: 50% 50%;
  width: 20%;
`;

export default LoadingTemplate;
