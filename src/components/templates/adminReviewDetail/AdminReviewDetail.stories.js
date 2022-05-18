import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminReviewDetail from './AdminReviewDetail';

export default {
  title: 'templates/관리자 리뷰 상세',
  component: AdminReviewDetail,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AdminReviewDetailStory = () => (
  <BrowserRouter>
    <AdminReviewDetail />
  </BrowserRouter>
);

AdminReviewDetailStory.storyName = '관리자 리뷰 상세';
