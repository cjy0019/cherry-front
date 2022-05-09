import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import Header from '../../molecules/header/Header';

const SearchResultTemplate = () => {
  return (
    <Container>
      <Header notMain login />
    </Container>
  );
};

const Container = styled.div``;

export default SearchResultTemplate;
