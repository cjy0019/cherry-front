import React from 'react';
import Header from './Header';

export default {
  title: 'molecules/헤더',
  component: Header,
};

export const HeaderNotLoginMainPage = () => <Header />;

// 로그인 확인 여부를 UI 작업할때는 확인할 수 없으니 임시적으로 props전달로 로그인 처리하겠습니다.
export const HeaderLoginMain = () => <Header login />;
export const HeaderLoginTheOtherPage = () => <Header login />;

HeaderNotLoginMainPage.storyName = '비 로그인 메인페이지';
HeaderLoginMain.storyName = '로그인 메인페이지';
HeaderLoginTheOtherPage.storyName = '로그인 메인 외 다른페이지';
