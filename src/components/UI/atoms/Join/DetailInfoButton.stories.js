import React from 'react';
import DetailInfoButton from './DetailInfoButton';

export default {
  title: 'atoms/회원가입/상세 정보 버튼',
  component: DetailInfoButton,
};

export const DetailCurJob = () => (
  <div
    style={{
      display: 'flex',
      gap: '10px',
    }}>
    <DetailInfoButton select>프론트엔드</DetailInfoButton>
    <DetailInfoButton>백엔드</DetailInfoButton>
  </div>
);

export const DetailCareer = () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
    }}>
    <DetailInfoButton select>학생</DetailInfoButton>
    <DetailInfoButton>1년 미만</DetailInfoButton>
    <DetailInfoButton>1~3년차</DetailInfoButton>
    <DetailInfoButton>3~6년차</DetailInfoButton>
    <DetailInfoButton>7년 이상</DetailInfoButton>
  </div>
);

export const DetailKnownPath = () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
    }}>
    <DetailInfoButton select>검색</DetailInfoButton>
    <DetailInfoButton>지인</DetailInfoButton>
    <DetailInfoButton>SNS</DetailInfoButton>
    <DetailInfoButton>카페</DetailInfoButton>
    <DetailInfoButton>블로그</DetailInfoButton>
    <DetailInfoButton>기타</DetailInfoButton>
  </div>
);

DetailCurJob.storyName = '현재 직무';
DetailCareer.storyName = '현재 경력';
DetailKnownPath.storyName = '알게된 경로';
