import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import MyReview from './MyReview';

export default {
  title: 'molecules/내가 쓴 리뷰',
  component: MyReview,
  parameters: {
    layout: 'fullscreen',
  },
};

export const MyReviewStory = () => (
  <BrowserRouter>
    <Container>
      <MyReview />
    </Container>
  </BrowserRouter>
);

MyReviewStory.storyName = '내가 쓴 리뷰';

const Container = styled.div`
  width: 62.5vw;
  margin: 0 auto;
`;
