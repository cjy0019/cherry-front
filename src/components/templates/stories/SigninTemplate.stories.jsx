import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SigninTemplate from '../SigninTemplate';

export default {
  title: 'templates/서비스 페이지/로그인 페이지',
  component: SigninTemplate,
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

export const Signin = () => <SigninTemplate />;

Signin.storyName = '로그인 페이지';
