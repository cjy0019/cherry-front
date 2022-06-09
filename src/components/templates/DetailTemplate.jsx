import React from 'react';
import BackgroundOpacity from '../molecules/detail/BackgroundOpacity';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import Footer from '../molecules/footer/Footer';
import LectureDetailTitle from '../molecules/detail/LectureDetailTitle';
import LectureInfo from '../molecules/detail/LectureInfo';
import SideBar from '../molecules/detail/SideBar';
import palette from '../../style/palette';
import AverageScore from '../molecules/detail/AverageScore';
import ReviewList from '../molecules/detail/ReviewList';
import { responsive } from '../../style/responsive';

const DetailTemplate = () => {
  return (
    <>
      <Header notMain />
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
      <Footer />
    </>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5521vw;

  background-color: ${palette.backgroundBlack};

  padding: 0 15px;

  @media ${responsive.tablet} {
    padding: 0 35px;
  }

  @media ${responsive.mobile} {
    padding: 0 20px 0 21px;
  }
`;

export default DetailTemplate;
