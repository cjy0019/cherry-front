import React from 'react';
import styled from 'styled-components';

import thumbnail from '../../../assets/img/thumbnail.svg';

const BackgroundOpacity = () => {
  return (
    <Background>
      <div />
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  background-image: url(${thumbnail});
  background-size: cover;
  background-position-y: 100px;
  width: 100%;
  height: 800px;

  & > div {
    width: 100%;
    height: 800px;
    background-color: rgba(0, 0, 128, 0.1);
    backdrop-filter: blur(15px);
  }
`;

export default BackgroundOpacity;
