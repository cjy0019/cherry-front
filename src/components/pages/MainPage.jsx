import React from 'react';
import styled from 'styled-components';
import palette from '../../style/palette';
import MainPageTemplate from '../templates/MainPageTemplate';

const MainPage = () => {
  return (
    <Container>
      <MainPageTemplate />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${palette.backgroundBlack};
`;

export default MainPage;
