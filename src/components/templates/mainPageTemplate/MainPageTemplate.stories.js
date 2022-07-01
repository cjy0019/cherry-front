import React from 'react';
import MainPageTemplate from './MainPageTemplate';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

export default {
  title: 'templates/서비스 페이지/메인 페이지',
  component: MainPageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const MainTemplate = () => (
  <BrowserRouter>
    <MainPageTemplate />
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </BrowserRouter>
);

MainTemplate.storyName = '메인 페이지';
