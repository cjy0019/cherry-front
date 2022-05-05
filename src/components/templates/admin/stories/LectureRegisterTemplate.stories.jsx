import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LectureRegisterTemplate from '../LectureRegisterTemplate';

export default {
  title: 'templates/어드민/강의추가 페이지',
  component: LectureRegisterTemplate,
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

export const LectureRegister = () => <LectureRegisterTemplate />;

LectureRegister.storyName = '강의추가 페이지';
