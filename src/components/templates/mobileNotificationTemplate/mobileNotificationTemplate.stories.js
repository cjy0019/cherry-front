import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MobileNotificationTemplate from './MobileNotificationTemplate';

export default {
  title: 'templates/서비스 페이지/헤더 알림 페이지',
  component: MobileNotificationTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const MobileNotificationTemplateStory = () => (
  <BrowserRouter>
    <MobileNotificationTemplate />
  </BrowserRouter>
);

MobileNotificationTemplateStory.storyName = '헤더 알림 페이지';
