import React from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';
import OfflineBadge from '../../UI/atoms/badges/OfflineBadge';
import BookMarkButton from '../../UI/atoms/buttons/BookMarkButton';

const ThumbnailWithBookMarkButton = ({
  imgUrl,
  mainTitle,
  markTop,
  markRight,
  offLineLeft,
  offLineTop,
}) => {
  return (
    <ThumbnailButton mainTitle={mainTitle}>
      <Thumbnail src={imgUrl} alt='썸네일 이미지' />
      <BookMarkButton top={markTop} right={markRight} absolute active={true} />
      <OfflineBadge top={offLineTop} left={offLineLeft} absolute />
    </ThumbnailButton>
  );
};

const ThumbnailButton = styled.div`
  position: relative;
  cursor: pointer;
  width: ${(props) => (props.mainTitle ? '30.2083vw' : '14.8438vw')};
  z-index: 1;

  ${(props) =>
    props.mainTitle &&
    css`
      &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        left: -9.2083vw;
        top: -4.42vw;
        width: 48.0729vw;
        height: 20.8333vw;
        background: radial-gradient(
          42.96% 98.15% at 50.05% 100%,
          rgba(255, 255, 255, 0.44) 9.29%,
          rgba(255, 255, 255, 0) 100%
        );
        @media ${responsive.tablet} {
          left: -100px;
          width: 625px;
          height: 271px;
          top: -65px;
        }
        @media ${responsive.mobile} {
          left: -100px;
          width: 500px;
          height: 231px;
          top: -57px;
        }
      }
    `}

  @media ${responsive.tablet} {
    width: 379px;
  }
  @media ${responsive.mobile} {
    width: 320px;
  }
`;

const Thumbnail = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
`;

export default ThumbnailWithBookMarkButton;
