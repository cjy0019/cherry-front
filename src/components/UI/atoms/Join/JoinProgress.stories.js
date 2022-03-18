import React from 'react';
import JoinProgress from './JoinProgress';

export default {
  title: 'atoms/회원가입/진행 과정',
  component: JoinProgress,
};

export const JoinFirstStep = () => <JoinProgress step='first' />;
export const JoinSecondStep = () => <JoinProgress step='second' />;

JoinFirstStep.storyName = '첫 번째 과정';
JoinSecondStep.storyName = '두 번째 과정';
