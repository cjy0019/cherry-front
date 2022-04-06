import React from 'react';
import LectureInfo from '../molecules/detail/LectureInfo';
import styled from 'styled-components';

import Header from '../molecules/header/Header';
import LecturePrice from '../molecules/detail/LecturePrice';
import palette from '../../style/palette';

const DetailTemplate = () => {
  return (
    <>
      <Header NotMain />
      <Container>
        <LectureInfo />
        <LecturePrice />
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

export default DetailTemplate;
