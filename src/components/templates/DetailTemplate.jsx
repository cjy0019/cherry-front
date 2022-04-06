import React from 'react';
import LectureInfo from '../molecules/detail/LectureInfo';
import styled from 'styled-components';

import Header from '../molecules/header/Header';

const DetailTemplate = () => {
  return (
    <Container>
      <Header NotMain />
      <LectureInfo />
    </Container>
  );
};

const Container = styled.div`
  background-color: yellowgreen;
  height: 100%;
`;

export default DetailTemplate;
