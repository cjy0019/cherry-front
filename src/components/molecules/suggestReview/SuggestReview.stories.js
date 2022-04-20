import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import SuggestReview from './SuggestReview';

export default {
  title: 'molecules/중간 정보란 리뷰',
  component: SuggestReview,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SuggestReviewStory = () => (
  <Container>
    <SuggestReview />
  </Container>
);

SuggestReviewStory.storyName = '중간 정보란 리뷰';

const Container = styled.div`
  width: 62.5vw;
  margin: 0 auto;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 89.1667vw;
  }
`;
