import React from 'react';
import SocialLogin from './SocialLogin';

export default {
  title: 'Login',
  component: SocialLogin,
};

export const Kakao = () => <SocialLogin sns='kakao' />;
export const Google = () => <SocialLogin sns='google' />;
export const Github = () => <SocialLogin sns='github' />;
export const Naver = () => <SocialLogin sns='naver' />;
