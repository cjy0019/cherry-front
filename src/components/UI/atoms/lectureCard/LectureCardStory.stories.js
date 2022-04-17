import React from 'react';
import styled from 'styled-components';
import LectureCard from './LectureCard';

export default {
  title: 'atoms/카드',
  component: LectureCard,
};

export const LectureCardStory = () => (
  <Container>
    <LectureCard />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

LectureCardStory.storyName = '강의 카드';
