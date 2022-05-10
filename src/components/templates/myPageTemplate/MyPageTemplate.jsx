import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import Header from '../../molecules/header/Header';

const MyPageTemplate = () => {
  return (
    <Container>
      <Header login notMain />
    </Container>
  );
};

const Container = styled.div``;

export default MyPageTemplate;
