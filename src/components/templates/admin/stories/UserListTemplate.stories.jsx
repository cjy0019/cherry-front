import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import UserListTemplate from '../UserListTemplate';

export default {
  title: 'templates/관리자 페이지/유저 리스트 페이지',
  component: UserListTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

export const LectureList = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserListTemplate />
    </QueryClientProvider>
  </BrowserRouter>
);

LectureList.storyName = '유저 리스트 페이지';
