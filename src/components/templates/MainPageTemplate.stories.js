import React from 'react';
import MainPageTemplate from './MainPageTemplate';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'templates/메인 페이지',
  component: MainPageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const MainTemplate = () => (
  <>
    <BrowserRouter>
      <MainPageTemplate />
    </BrowserRouter>
  </>
);

MainTemplate.storyName = '메인 페이지';
