import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../../style/responsive';

import Notification from './Notification';

export default {
  title: 'atoms/헤더 알림',
  component: Notification,
  parameters: {
    layout: 'fullscreen',
  },
};

export const NotificationStory = () => (
  <Container>
    <Notification />
  </Container>
);

NotificationStory.storyName = '헤더 알림';

const Container = styled.div`
  width: 62.5vw;
  margin: 0 auto;

  @media ${responsive.mobile} {
    width: 88.8889vw;
    margin: 0 auto;
  }
`;
