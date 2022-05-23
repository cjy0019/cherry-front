import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminStatisticsTemplate from './AdminStatisticsTemplate';

export default {
  title: 'templates/관리자 페이지',
  component: AdminStatisticsTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AdminStatisticsTemplateStory = () => (
  <BrowserRouter>
    <AdminStatisticsTemplate />
  </BrowserRouter>
);

AdminStatisticsTemplateStory.storyName = '관리자 통계 분석 페이지';
