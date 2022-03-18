import React from 'react';
import ReviewProsConsTextarea from './ReviewProsConsTextarea';

export default {
  title: 'atoms/입력창',
  component: ReviewProsConsTextarea,
};

export const ReviewTextarea = () => <ReviewProsConsTextarea />;

ReviewTextarea.storyName = '리뷰 장,단점';
