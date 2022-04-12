import React from 'react';
import LectureInfo from '../molecules/detail/LectureInfo';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import LecturePrice from '../molecules/detail/LecturePrice';
import palette from '../../style/palette';
import SideBar from '../molecules/detail/SideBar';
import ScoreAverage from '../molecules/detail/ScoreAverage';

const DetailTemplate = () => {
  return (
    <>
      <Header NotMain />
      <Container>
        <LectureInfo />
        <VerticalDivision>
          <div>
            <LecturePrice />
            <ScoreAverage />
          </div>
          <SideBar />
        </VerticalDivision>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${palette.backgroundBlack};
`;

const VerticalDivision = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 45px;
`;

export default DetailTemplate;
