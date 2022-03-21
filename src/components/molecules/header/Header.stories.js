import React from 'react';
import Header from './Header';

export default {
  title: 'molecules/헤더',
  component: Header,
};

export const HeaderNotLoginMainPage = () => <Header />;
export const HeaderLoginMain = () => <Header />;
export const HeaderLoginTheOtherPage = () => <Header />;

HeaderNotLoginMainPage.storyName = '비 로그인 메인페이지';
HeaderLoginMain.storyName = '로그인 메인페이지';
HeaderLoginTheOtherPage.storyName = '로그인 메인 외 다른페이지';
