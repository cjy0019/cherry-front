import React from 'react';
import LectureRegisterTemplate from '../LectureRegisterTemplate';

export default {
  title: 'templates/어드민/강의추가 페이지',
  component: LectureRegisterTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LectureRegister = () => <LectureRegisterTemplate />;

LectureRegister.storyName = '강의추가 페이지';
