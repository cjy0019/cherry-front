import React from 'react';
import ReviewWriteTemplate from '../ReviewWriteTemplate';

export default {
  title: 'templates/리뷰 작성 페이지',
  component: ReviewWriteTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const ReviewWrite = () => <ReviewWriteTemplate />;

ReviewWrite.storyName = '리뷰 작성 페이지';
