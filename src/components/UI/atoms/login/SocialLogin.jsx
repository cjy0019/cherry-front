import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';
import kakaoImg from '../../../../assets/img/kakao.png';
import naverImg from '../../../../assets/img/naver.png';
import githubImg from '../../../../assets/img/github.png';
import googleImg from '../../../../assets/img/google.png';

const loginInfo = {
  kakao: {
    text: '카카오',
    backgroundColor: palette.kakao,
    imgSrc: kakaoImg,
    postion: { top: '16px', left: '15px' },
  },
  naver: {
    text: '네이버',
    backgroundColor: palette.naver,
    fontColor: palette.textWhite,
    imgSrc: naverImg,
    postion: { top: '16px', left: '15px' },
  },
  github: {
    text: 'Github',
    backgroundColor: '#000000',
    fontColor: palette.textWhite,
    imgSrc: githubImg,
    postion: { top: '14px', left: '17px' },
  },
  google: {
    text: '구글',
    backgroundColor: palette.textWhite,
    imgSrc: googleImg,
    postion: { top: '14px', left: '17px' },
  },
};

const Button = styled.button`
  position: relative;
  width: 340px;
  height: 48px;
  border-radius: 6px;
  border-style: none;
  background-color: ${({ sns }) => loginInfo[sns].backgroundColor};

  & > p {
    font-weight: 400;
    font-size: 14px;
    color: ${({ sns }) => loginInfo[sns].fontColor};
  }

  & > img {
    position: absolute;
    top: ${({ sns }) => loginInfo[sns].postion.top};
    left: ${({ sns }) => loginInfo[sns].postion.left};
  }

  @media ${responsive.mobile} {
    width: 320px;
  }
`;

const SocialLogin = ({ sns }) => {
  return (
    <Button sns={sns}>
      <img alt='img' src={loginInfo[sns].imgSrc} />
      <p sns={sns}>{loginInfo[sns].text}로 로그인</p>
    </Button>
  );
};

export default SocialLogin;
