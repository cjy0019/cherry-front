import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import ReviewWriteTemplate from '../ReviewWriteTemplate';

export default {
  title: 'templates/서비스 페이지/리뷰 작성 페이지',
  component: ReviewWriteTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

export const ReviewWrite = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReviewWriteTemplate />
    </QueryClientProvider>
  </BrowserRouter>
);

ReviewWrite.storyName = '리뷰 작성 페이지';
