import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminReviewDetailTemplate from './AdminReviewDetailTemplate';

export default {
  title: 'templates/관리자 페이지',
  component: AdminReviewDetailTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AdminReviewDetailTemplateStory = () => (
  <BrowserRouter>
    <AdminReviewDetailTemplate />
  </BrowserRouter>
);

AdminReviewDetailTemplateStory.storyName = '관리자 리뷰 상세';
