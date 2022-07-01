import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import LectureListTemplate from '../LectureListTemplate';

export default {
  title: 'templates/관리자 페이지',
  component: LectureListTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

export const LectureList = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <LectureListTemplate />
    </QueryClientProvider>
  </BrowserRouter>
);

LectureList.storyName = '강의 리스트 페이지';
