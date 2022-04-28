import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DetailTemplate from '../DetailTemplate';

export default {
  title: 'templates/상세 페이지',
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

Error.storyName = '상세 페이지';
