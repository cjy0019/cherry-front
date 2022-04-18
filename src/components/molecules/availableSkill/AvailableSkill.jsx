import React from 'react';
import styled, { keyframes } from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

import emojiStart from '../../../assets/img/emoji_star.png';
import javascript from '../../../assets/img/JavaScript.png';
import angular from '../../../assets/img/Angular.png';
import c from '../../../assets/img/C.png';
import django from '../../../assets/img/Django.png';
import docker from '../../../assets/img/Docker.png';
import java from '../../../assets/img/Java.png';
import laravel from '../../../assets/img/Laravel.png';
import mysql from '../../../assets/img/Mysql.png';
import oracle from '../../../assets/img/Oracle.png';
import python from '../../../assets/img/Python.png';
import react from '../../../assets/img/React.png';
import redux from '../../../assets/img/Redux.png';
import ruby from '../../../assets/img/Ruby.png';
import sCSS from '../../../assets/img/SCSS.png';
import spring from '../../../assets/img/Spring.png';
import styledComponent from '../../../assets/img/styled component.png';
import typeScript from '../../../assets/img/TypeScript.png';
import vue from '../../../assets/img/Vue.png';
import vuex from '../../../assets/img/Vuex.png';
import webpack from '../../../assets/img/webpack.png';

const imgList = [
  javascript,
  c,
  django,
  java,
  react,
  mysql,
  python,
  redux,
  styledComponent,
  ruby,
  sCSS,
  spring,
  laravel,
  typeScript,
  angular,
  oracle,
  vue,
  docker,
  vuex,
  webpack,
  javascript,
  c,
  django,
  java,
  react,
  mysql,
  python,
  redux,
  styledComponent,
  ruby,
  sCSS,
  spring,
  laravel,
  typeScript,
  angular,
  oracle,
  vue,
  docker,
  vuex,
  webpack,
];

const AvailableSkill = () => {
  return (
    <Container>
      <TitleSection>
        <Title>현재 배울 수 있는 기술 </Title>
        <EmojiStartImg src={emojiStart} alt='smile emoji' />
      </TitleSection>
      <AutoSlider>
        <ImagesUl>
          {imgList.map((src, i) => (
            <>
              <ImageLi key={i}>
                <SkillImg src={src} />
              </ImageLi>
            </>
          ))}
        </ImagesUl>
      </AutoSlider>
    </Container>
  );
};

const slidingPc = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-110px * 20));
  }
`;
const slidingTablet = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-84px * 20));
  }
`;
const slidingMobile = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(calc(-56px * 20));
}
`;

const AutoSlider = styled.div`
  width: 79.17vw;
  height: 70px;

  overflow: hidden;
  position: absolute;
  top: 63px;
  left: -12.76vw;

  &::before,
  &::after {
    content: '';
    width: calc(110px * 2 + 70px);
    height: 70px;
    position: absolute;

    background: linear-gradient(
      to right,
      rgba(24, 25, 32, 1) 0%,
      rgba(24, 25, 32, 0.8) 50%,
      rgba(24, 25, 32, 0) 100%
    );

    z-index: 2;
  }

  &::after {
    right: -1px;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  @media ${responsive.tablet} {
    /* width : 766px */
    width: 93.75vw;
    height: 49px;

    top: 59px;
    left: 0;

    &::before,
    &::after {
      content: '';
      width: calc(84px * 2 + 48px);
      height: 49px;
      position: absolute;
    }
  }

  @media ${responsive.mobile} {
    width: 100vw;
    height: 44px;

    top: 44px;
    left: -8.06vw;

    &::before,
    &::after {
      content: '';
      width: calc(56px * 2 + 44px);
      height: 44px;
      position: absolute;
    }
  }
`;

const SkillImg = styled.img`
  width: 70px;
  height: 70px;

  @media ${responsive.tablet} {
    width: 48px;
    height: 48px;
  }

  @media ${responsive.mobile} {
    width: 44px;
    height: 44px;
  }
`;

const ImageLi = styled.li`
  display: inline-block;
  margin-left: 40px;

  @media ${responsive.tablet} {
    margin-left: 36px;
  }

  @media ${responsive.mobile} {
    margin-left: 12px;
  }
`;

const ImagesUl = styled.ul`
  position: absolute;
  display: flex;

  /* 이미지 20 * 2개 */
  width: calc(110px * 40);

  animation: ${slidingPc} 30s linear infinite;

  @media ${responsive.tablet} {
    animation: ${slidingTablet} 30s linear infinite;
    width: calc(84px * 40);
  }

  @media ${responsive.mobile} {
    animation: ${slidingMobile} 30s linear infinite;
    width: calc(56px * 40);
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;

  /* Slider 높이 만큼 추가 */
  margin-bottom: 109px;

  @media ${responsive.tablet} {
    margin-bottom: 89px;
  }

  @media ${responsive.mobile} {
    margin-bottom: 68px;
  }
`;

const EmojiStartImg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 3px;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 1rem;
  color: ${palette.textWhite};
`;

const Container = styled.div`
  position: relative;
  height: 130px;

  @media ${responsive.tablet} {
    height: 107px;
  }

  @media ${responsive.mobile} {
    height: 86px;
  }
`;

export default AvailableSkill;
