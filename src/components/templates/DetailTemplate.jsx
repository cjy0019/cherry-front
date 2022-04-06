import React from 'react';
import LectureInfo from '../molecules/detail/LectureInfo';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import LecturePrice from '../molecules/detail/LecturePrice';
import palette from '../../style/palette';
import SideBar from '../molecules/detail/SideBar';
import { useCalculateViewPort } from '../../hooks/useCalulateViewport';

const DetailTemplate = () => {
  const { viewPort } = useCalculateViewPort();

  return (
    <>
      <Header NotMain />
      <Container>
        <LectureInfo />
        <VerticalDivision>
          <div>
            <LecturePrice />
          </div>
          {viewPort >= 769 && <SideBar />}
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
  height: 100%;
`;

const VerticalDivision = styled.div`
  display: flex;
  width: 62.1354vw;
  gap: 2.5521vw;
`;

export default DetailTemplate;
