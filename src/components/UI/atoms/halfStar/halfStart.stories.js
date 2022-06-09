import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import HalfStar from './HalfStar';

export default {
  title: 'atoms/별 반개',
  component: HalfStar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const HalfStarStory = () => (
  <BrowserRouter>
    <Container>
      <HalfStar />
    </Container>
  </BrowserRouter>
);

HalfStarStory.storyName = '별 반개';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`;
