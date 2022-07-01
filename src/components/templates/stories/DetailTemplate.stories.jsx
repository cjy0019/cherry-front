import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import DetailTemplate from '../DetailTemplate';

export default {
  title: 'templates/서비스 페이지/상세 페이지',
  component: DetailTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};
const queryClient = new QueryClient();

export const DetailTemplateStory = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <DetailTemplate />
    </QueryClientProvider>
  </BrowserRouter>
);

DetailTemplateStory.storyName = '상세 페이지';
