import React from 'react';
import LoadingTemplate from '../LoadingTemplate';

export default {
  title: 'templates/로딩 페이지',
  component: LoadingTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Loading = () => <LoadingTemplate />;

Loading.storyName = '로딩 페이지';
