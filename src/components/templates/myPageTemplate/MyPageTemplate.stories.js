import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyPageTemplate from './MyPageTemplate';

export default {
  title: 'templates/마이 페이지',
  component: MyPageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const MyPageTemplateStory = () => (
  <BrowserRouter>
    <MyPageTemplate />
  </BrowserRouter>
);

MyPageTemplateStory.storyName = '마이 페이지';
