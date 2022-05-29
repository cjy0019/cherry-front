import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import MobileSort from './MobileSort';

export default {
  title: 'molecules/모바일 정렬 UI',
  component: MobileSort,
  parameters: {
    layout: 'fullscreen',
  },
};

export const MobileSortStory = () => (
  <BrowserRouter>
    <Container>
      <MobileSort />
    </Container>
  </BrowserRouter>
);

MobileSortStory.storyName = '모바일 정렬 UI';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
