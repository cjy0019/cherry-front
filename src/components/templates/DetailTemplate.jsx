import React from 'react';
import BackgroundOpacity from '../molecules/detail/BackgroundOpacity';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import LectureDetailTitle from '../molecules/detail/LectureDetailTitle';
import LectureInfo from '../molecules/detail/LectureInfo';

const DetailTemplate = () => {
  return (
    <>
      <Header NotMain />
      <BackgroundOpacity />
      <LectureDetailTitle />
      <VerticalContainer>
        <div>
          <LectureInfo />
        </div>
        <SideBar>sidebar</SideBar>
      </VerticalContainer>
    </>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 49px;
`;

const SideBar = styled.div`
  background-color: yellowgreen;
  width: 376px;
`;

export default DetailTemplate;
