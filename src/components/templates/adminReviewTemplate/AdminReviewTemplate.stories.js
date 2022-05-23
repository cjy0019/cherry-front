import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminReviewTemplate from './AdminReviewTemplate';

export default {
  title: 'templates/관리자 페이지/관리자 리뷰 관리',
  component: AdminReviewTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AdminReviewTemplateStory = () => (
  <BrowserRouter>
    <AdminReviewTemplate />
  </BrowserRouter>
);

AdminReviewTemplateStory.storyName = '관리자 리뷰 관리';
