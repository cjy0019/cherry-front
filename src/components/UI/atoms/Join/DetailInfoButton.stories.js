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
    <DetailInfoButton select text='프론트엔드' />
    <DetailInfoButton text='프론트엔드' />
  </div>
);

export const DetailCareer = () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
    }}>
    <DetailInfoButton select text='학생' />
    <DetailInfoButton text='1년 미만' />
    <DetailInfoButton text='1~3년차' />
    <DetailInfoButton text='3~6년차' />
    <DetailInfoButton text='7년 이상' />
  </div>
);

export const DetailKnownPath = () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
    }}>
    <DetailInfoButton select text='검색' />
    <DetailInfoButton text='지인' />
    <DetailInfoButton text='SNS' />
    <DetailInfoButton text='카페' />
    <DetailInfoButton text='블로그' />
    <DetailInfoButton text='기타' />
  </div>
);

DetailCurJob.storyName = '현재 직무';
DetailCareer.storyName = '현재 경력';
DetailKnownPath.storyName = '알게된 경로';
