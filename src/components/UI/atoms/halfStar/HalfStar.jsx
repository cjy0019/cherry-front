import React from 'react';
import styled from 'styled-components';

import leftFullDarkStar from '../../../../assets/img/star1_LeftFullDark.svg';
import rightFullDarkStar from '../../../../assets/img/star1_RightFullDark.svg';
import leftEmptyDarkStar from '../../../../assets/img/star0_LeftEmptyDark.svg';
import rightEmptyDarkStar from '../../../../assets/img/star0_RightEmptyDark.svg';

import LeftHalfStar from './LeftHalfStar';
import RightHalfStar from './RightHalfStar';

const HalfStar = () => {
  return (
    <>
      <StyledRightHalfStar />
      <StyledLeftHalfStar />

      <LeftFullDarkStarImg
        src={leftFullDarkStar}
        alt='왼쪽 별 반개'></LeftFullDarkStarImg>
      <RightFullDarkStarImg
        src={rightFullDarkStar}
        alt='오른쪽 별 반개'></RightFullDarkStarImg>

      <LeftEmptyDarkStar
        src={leftEmptyDarkStar}
        alt='오른쪽 별 반개'></LeftEmptyDarkStar>
      <RightEmptyDarkStar
        src={rightEmptyDarkStar}
        alt='오른쪽 별 반개'></RightEmptyDarkStar>
    </>
  );
};

const StyledLeftHalfStar = styled(LeftHalfStar)`
  &:hover path {
    cursor: pointer;
    fill: black;
  }
`;

const StyledRightHalfStar = styled(RightHalfStar)`
  &:hover path {
    cursor: pointer;
    fill: black;
  }
`;

const LeftEmptyDarkStar = styled.img`
  display: inline-block;
  margin-right: 10px;
`;

const RightEmptyDarkStar = styled.img`
  display: inline-block;
  margin-right: 10px;
`;

const LeftFullDarkStarImg = styled.img`
  display: inline-block;
`;

const RightFullDarkStarImg = styled.img`
  margin-right: 10px;
  display: inline-block;
`;

export default HalfStar;
