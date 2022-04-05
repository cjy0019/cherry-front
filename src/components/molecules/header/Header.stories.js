import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'molecules/헤더',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const HeaderNotLoginMainPage = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

// 로그인 확인 여부를 UI 작업할때는 확인할 수 없으니 임시적으로 props전달로 로그인 처리하겠습니다.
export const HeaderLoginMain = () => (
  <BrowserRouter>
    <Header login />
  </BrowserRouter>
);

export const HeaderLoginTheOtherPage = () => (
  <BrowserRouter>
    <Header login NotMain />
  </BrowserRouter>
);

export const HeaderNotLoginTheOtherPage = () => (
  <BrowserRouter>
    <Header NotMain />
  </BrowserRouter>
);

HeaderNotLoginMainPage.storyName = '비 로그인 메인페이지';
HeaderLoginMain.storyName = '로그인 메인페이지';
HeaderLoginTheOtherPage.storyName = '로그인 메인 외 다른페이지';
HeaderNotLoginTheOtherPage.storyName = '비 로그인 메인 외 다른페이지';
