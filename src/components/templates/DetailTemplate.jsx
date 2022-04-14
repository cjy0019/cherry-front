import React from 'react';
import BackgroundOpacity from '../molecules/detail/BackgroundOpacity';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import LectureDetailTitle from '../molecules/detail/LectureDetailTitle';
import LectureInfo from '../molecules/detail/LectureInfo';
import SideBar from '../molecules/detail/SideBar';
import palette from '../../style/palette';
import AverageScore from '../molecules/detail/AverageScore';
import ReviewList from '../molecules/detail/ReviewList';

const DetailTemplate = () => {
  return (
    <>
      <Header NotMain />
      <BackgroundOpacity />
      <LectureDetailTitle />
      <VerticalContainer>
        <div>
          <LectureInfo />
          <AverageScore />
          <ReviewList />
        </div>
        <SideBar />
      </VerticalContainer>
    </>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 49px;
  background-color: ${palette.backgroundBlack};
`;

export default DetailTemplate;
