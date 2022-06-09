import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignupTemplate from '../SignupTemplate';

export default {
  title: 'templates/서비스 페이지/회원정보 입력 페이지',
  component: SignupTemplate,
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

export const Signup = () => <SignupTemplate />;

Signup.storyName = '회원정보 입력 페이지';
