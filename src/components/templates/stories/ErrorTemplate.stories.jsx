import React from 'react';
import ErrorTemplate from '../ErrorTemplate';

export default {
  title: 'templates/서비스 페이지/에러 페이지',
  component: ErrorTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Error = () => <ErrorTemplate />;

Error.storyName = '에러 페이지';
