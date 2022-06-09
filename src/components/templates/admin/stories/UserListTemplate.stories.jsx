import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserListTemplate from '../UserListTemplate';

export default {
  title: 'templates/관리자 페이지/유저 리스트 페이지',
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
