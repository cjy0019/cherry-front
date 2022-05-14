import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import AccountSetting from './AccountSetting';

export default {
  title: 'molecules/계정 설정',
  component: AccountSetting,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AccountSettingStory = () => (
  <BrowserRouter>
    <Container>
      <AccountSetting />
    </Container>
  </BrowserRouter>
);

AccountSettingStory.storyName = '계정 설정';

const Container = styled.div`
  width: 62.5vw;
  margin: 0 auto;
`;
