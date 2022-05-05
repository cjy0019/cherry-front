import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import SelectCategory from './SelectCategory';

export default {
  title: 'molecules/기술 카테고리 선택',
  component: SelectCategory,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SelectCategoryStory = () => (
  <Container>
    <SelectCategory />
  </Container>
);

SelectCategoryStory.storyName = '기술 카테고리 선택';

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
