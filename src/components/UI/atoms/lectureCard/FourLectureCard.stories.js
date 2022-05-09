import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import FourLectureCard from './FourLectureCard';

export default {
  title: 'atoms/강의 카드',
  component: FourLectureCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FourLectureCardStory = () => (
  <Container>
    <BrowserRouter>
      <FourLectureCard />
    </BrowserRouter>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

FourLectureCardStory.storyName = '한 줄에 4개 강의 카드';
