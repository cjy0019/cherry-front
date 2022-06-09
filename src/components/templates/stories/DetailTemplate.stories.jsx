import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DetailTemplate from '../DetailTemplate';
import { rest } from 'msw';

export default {
  title: 'templates/서비스 페이지/상세 페이지',
  component: DetailTemplate,
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

export const DetailStory = () => <DetailTemplate />;

DetailStory.storyName = '상세 페이지';
