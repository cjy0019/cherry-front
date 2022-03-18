import React from 'react';
import FeedbackTextarea from './FeedbackTextarea';

export default {
  title: 'atoms/입력창',
  component: FeedbackTextarea,
};

export const Feedback = () => <FeedbackTextarea />;

Feedback.storyName = '피드백';
