import React from 'react';
import styled from 'styled-components';
import ThreeLectureCard from './ThreeLectureCard';

import rank1 from '../../../../assets/img/rank01.svg';

export default {
  title: 'atoms/강의 카드',
  component: ThreeLectureCard,
};

export const ThreeLectureCardStory = () => (
  <Container>
    <ThreeLectureCard rankSrc={rank1} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

ThreeLectureCardStory.storyName = '한 줄에 3개 강의 카드';
