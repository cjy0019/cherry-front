import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import SuggestCherryPick from './SuggestCherryPick';

export default {
  title: 'molecules/체리픽 시작하기 추천',
  component: SuggestCherryPick,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SuggestCherryPickStory = () => (
  <BrowserRouter>
    <SuggestCherryPick />
  </BrowserRouter>
);

SuggestCherryPickStory.storyName = '체리픽 시작하기 추천';
