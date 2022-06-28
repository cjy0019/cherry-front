import React from 'react';
import BackgroundOpacity from '../molecules/detail/BackgroundOpacity';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import Footer from '../molecules/footer/Footer';
import LoadingPage from '../pages/LoadingPage';
import LectureDetailTitle from '../molecules/detail/LectureDetailTitle';
import LectureInfo from '../molecules/detail/LectureInfo';
import SideBar from '../molecules/detail/SideBar';
import palette from '../../style/palette';
import AverageScore from '../molecules/detail/AverageScore';
import ReviewList from '../molecules/detail/ReviewList';
import { responsive } from '../../style/responsive';
import { useQuery } from 'react-query';
import { axiosInstance } from '../../api';

const DetailTemplate = () => {
  const {
    data: lectureDetailInfoData,
    isLoading: isLectureDetailInfoDataLoading,
  } = useQuery(
    'lectureDetailInfoData',
    async () => {
      return await axiosInstance.get('/lectures/2');
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <>
      <Header notMain />
      {isLectureDetailInfoDataLoading ? (
        <LoadingPage />
      ) : (
        <>
          <BackgroundOpacity />
          <LectureDetailTitle
            lectureDetailInfoData={lectureDetailInfoData?.data}
          />
          <VerticalContainer>
            <div>
              <LectureInfo
                lectureDetailInfoData={lectureDetailInfoData?.data}
              />
              <AverageScore
                lectureDetailInfoData={lectureDetailInfoData?.data}
              />
              <ReviewList />
            </div>
            <SideBar lectureDetailInfoData={lectureDetailInfoData?.data} />
          </VerticalContainer>
        </>
      )}
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
