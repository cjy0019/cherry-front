import React from 'react';
import JoinSubmitButton from './JoinSubmitButton';

export default {
  title: 'atoms/회원가입/상세정보 등록 버튼',
  component: JoinSubmitButton,
};

export const CompleteInfo = () => <JoinSubmitButton clicked hover />;
export const IncompleteInfo = () => <JoinSubmitButton hover />;

CompleteInfo.storyName = '모든 상세정보 클릭 완료시';
IncompleteInfo.storyName = '모든 상세정보 클릭 전';
