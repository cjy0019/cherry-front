import React from 'react';
import MainPageTemplate from './MainPageTemplate';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

export default {
  title: 'templates/서비스 페이지/메인 페이지',
  component: MainPageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

const queryClient = new QueryClient();

export const MainTemplate = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <MainPageTemplate />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </BrowserRouter>
  </QueryClientProvider>
);

MainTemplate.storyName = '메인 페이지';
