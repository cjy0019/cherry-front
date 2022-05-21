import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminFeedbackTemplate from './AdminFeedbackTemplate';

export default {
  title: 'templates/관리자 피드백',
  component: AdminFeedbackTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AdminFeedbackTemplateStory = () => (
  <BrowserRouter>
    <AdminFeedbackTemplate />
  </BrowserRouter>
);

AdminFeedbackTemplateStory.storyName = '관리자 피드백';
