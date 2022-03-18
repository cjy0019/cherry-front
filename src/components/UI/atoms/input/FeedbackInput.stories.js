import React from 'react';
import FeedbackInput from './FeedbackInput';

export default {
  title: 'atoms/입력창',
  component: FeedbackInput,
};

export const Feedback = () => <FeedbackInput />;

Feedback.storyName = '피드백';
