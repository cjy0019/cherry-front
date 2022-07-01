import React from 'react';
import styled, { css } from 'styled-components';

import { responsive } from '../../../style/responsive';

const BackgroundOpacity = ({ lectureDetailInfoData }) => {
  return (
    <Background imageSrc={lectureDetailInfoData.data.desktopImgUrl}>
      <div />
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: -2;

  ${({ imageSrc }) => {
    return css`
      background-image: url(${imageSrc});
    `;
  }}

  background-size: cover;
  background-position-y: 100px;
  width: 100%;
  height: 800px;

  & > div {
    width: 100%;
    height: 800px;
    background-color: rgba(0, 0, 0, 0.65);

    /* backdrop-filter chrome, safari */
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
    }

    /* firefox 더 어둡게 적용 */
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: rgba(0, 0, 0, 0.87);
    }

    @media ${responsive.mobile} {
      height: 79.9479vw;
    }

    @media (max-width: 350px) {
      height: 83.3333vw;
    }
    @media (max-width: 320px) {
      height: 93.75vw;
    }
  }

  @media ${responsive.mobile} {
    height: 79.9479vw;
  }
  @media (max-width: 350px) {
    height: 83.3333vw;
  }
  @media (max-width: 320px) {
    height: 93.75vw;
  }
`;

export default BackgroundOpacity;
