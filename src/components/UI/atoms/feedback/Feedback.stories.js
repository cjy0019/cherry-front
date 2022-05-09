import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../../style/responsive';
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
    <Feedback />
  </Container>
);

FeedbackStory.storyName = '피드백';

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 300px;

  @media ${responsive.mobile} {
    justify-content: flex-end;
  }
  background: indigo;
`;
