import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../../style/responsive';
import MobileLectureCard from './MobileLectureCard';

export default {
  title: 'atoms/모바일 강의 카드',
  component: MobileLectureCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SelectCategoryStory = () => (
  <Container>
    <MobileLectureCard />
  </Container>
);

SelectCategoryStory.storyName = '기술 카테고리 선택';

const Container = styled.div`
  @media ${responsive.mobile} {
    width: 88.8889vw;
    margin: 0 auto;
  }
`;
