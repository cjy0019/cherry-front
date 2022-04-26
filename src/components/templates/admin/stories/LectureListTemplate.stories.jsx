import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LectureListTemplate from '../LectureListTemplate';

export default {
  title: 'templates/어드민',
  component: LectureListTemplate,
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

export const LectureList = () => <LectureListTemplate />;

LectureList.storyName = '강의 리스트 페이지';
