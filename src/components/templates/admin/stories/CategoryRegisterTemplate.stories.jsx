import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryRegisterTemplate from '../CategoryRegisterTemplate';

export default {
  title: 'templates/어드민',
  component: CategoryRegisterTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const CategoryRegister = () => <CategoryRegisterTemplate />;

CategoryRegister.storyName = '카테고리 추가 페이지';
