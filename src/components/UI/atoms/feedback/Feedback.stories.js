import React from 'react';
import styled from 'styled-components';
import Feedback from './Feedback';

export default {
  title: 'atoms/피드백',
  component: Feedback,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FeedbackStory = () => (
  <Container>
    <Feedback />;
  </Container>
);

FeedbackStory.storyName = '피드백';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
