import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../style/palette';
import Footer from '../molecules/footer/Footer';
import SigninStep from '../molecules/signin/SigninStep';

import googlelogo from '../../assets/img/googlelogo.svg';
import kakaologo from '../../assets/img/kakaologo.svg';
import naverlogo from '../../assets/img/naverlogo.svg';
import githublogo from '../../assets/img/githublogo.svg';
import feedbacklogo from '../../assets/img/feedback.png';
import { responsive } from '../../style/responsive';

const SigninTemplate = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <CenterWrapper>
        <CenterBox>
          <SigninStep step='second' />

          <Title>
            <p>간편하고 빠른</p>
            <p>소셜 로그인</p>
          </Title>

          <ButtonContainer>
            <LoginButton theme='kakao'>
              <img src={kakaologo} alt='kakaologo' />
              <p>카카오로 로그인</p>
            </LoginButton>
            <LoginButton theme='google'>
              <img src={googlelogo} alt='googlelogo' />
              <p>구글로 로그인</p>
            </LoginButton>
            <LoginButton theme='naver'>
              <img src={naverlogo} alt='naverlogo' />
              <p>네이버로 로그인</p>
            </LoginButton>
            <LoginButton theme='github'>
              <img src={githublogo} alt='githublogo' />
              <p>Github로 로그인</p>
            </LoginButton>
          </ButtonContainer>

          <Goback onClick={() => navigate(-1)}>뒤로가기</Goback>
        </CenterBox>
      </CenterWrapper>
      <Footer login />
      <CherryPickLogo>
        <img src={feedbacklogo} alt='체리픽 로고' />
      </CherryPickLogo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100vh;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const CenterBox = styled.div`
  width: 340px;
  background-color: ${palette.backgroundBlack};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${palette.text2};
  margin: 32px 0 93px;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  height: 51px;
  border-radius: 6px;
  gap: 82px;
  cursor: pointer;

  & > img {
    margin-left: 17px;
  }

  ${(props) =>
    props.theme === 'kakao' &&
    css`
      background-color: ${palette.kakao};
      color: #000000;
    `}

  ${(props) =>
    props.theme === 'google' &&
    css`
      background-color: ${palette.textWhite};
      color: #000000;
    `}

  ${(props) =>
    props.theme === 'naver' &&
    css`
      background-color: ${palette.naver};
      color: ${palette.textWhite};
    `}

  
  ${(props) =>
    props.theme === 'github' &&
    css`
      background-color: #000000;
      color: #ffffff;
    `}
`;

const Goback = styled.button`
  all: unset;
  font-weight: 600;
  font-size: 0.75rem;
  color: ${palette.text2};
  text-decoration: underline;
  margin-top: 100px;
  cursor: pointer;

  &:active {
    color: ${palette.pointRed};
  }
`;

const CherryPickLogo = styled.div`
  position: absolute;
  left: 24px;
  bottom: 77px;

  & > img {
    width: 36px;
  }

  @media (max-width: 737px) {
    bottom: 150px;
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

export default SigninTemplate;
