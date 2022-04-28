import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserListTemplate from '../UserListTemplate';

export default {
  title: 'templates/어드민',
  component: UserListTemplate,
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

export const LectureList = () => <UserListTemplate />;

LectureList.storyName = '유저 리스트 페이지';
