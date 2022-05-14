import React from 'react';
import styled, { css } from 'styled-components';

import cherryPickImg from '../../../assets/img/feedback.png';
import { responsive } from '../../../style/responsive';

const AccountSetting = ({ className }) => {
  return (
    <Container className={className}>
      <ProfileContainer>
        <ProfileTitle>프로필</ProfileTitle>
        <Profile>
          <CircleBackground>
            <CherryPickImg src={cherryPickImg} alt='프로필 사진' />
          </CircleBackground>
          <UserId>김혜주님</UserId>
          <SnsLogin>카카오 로그인</SnsLogin>
          <Email>sooy0501@gmail.com</Email>
        </Profile>
      </ProfileContainer>
      <BasicInfoContainer>
        <BasicInfoTitle>기본정보</BasicInfoTitle>
        <AlignCenter>
          <FirstBasicInfoBox>
            <BasicInfoPartTitle>1. 현재 직무</BasicInfoPartTitle>
            <SelectBoxContainer>
              <SelectBox>프론트엔드</SelectBox>
              <SelectBox>백엔드</SelectBox>
            </SelectBoxContainer>
          </FirstBasicInfoBox>
          <SecondBasicInfoBox>
            <BasicInfoPartTitle>2. 경력</BasicInfoPartTitle>
            <SelectBoxContainer>
              <SelectBox>학생</SelectBox>
              <SelectBox>1~3년차</SelectBox>
              <SelectBox>1년 미만</SelectBox>
              <SelectBox>3~6년차</SelectBox>
              <SelectBox>7년 이상</SelectBox>
            </SelectBoxContainer>
          </SecondBasicInfoBox>
          <ThirdBasicInfoBox>
            <BasicInfoPartTitle>3. 알게 된 경로</BasicInfoPartTitle>
            <SelectBoxContainer>
              <SelectBox>검색</SelectBox>
              <SelectBox>지인</SelectBox>
              <SelectBox>SNS</SelectBox>
              <SelectBox>카페</SelectBox>
              <SelectBox>블로그</SelectBox>
              <SelectBox>기타</SelectBox>
            </SelectBoxContainer>
          </ThirdBasicInfoBox>
        </AlignCenter>
      </BasicInfoContainer>
      <SignOutMessage>
        체리픽을 더 이상 이용하길 원하지 않는 경우
      </SignOutMessage>
      <SignOut>탈퇴하기</SignOut>
    </Container>
  );
};

const SignOut = styled.span`
  display: inline-block;

  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.5;
  text-decoration-line: underline;
`;

const SignOutMessage = styled.span`
  display: inline-block;

  margin-top: 120px;
  margin-right: 10px;

  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.7;
`;

const AlignCenter = styled.div`
  display: inline-flex;
  background-color: #15161d;
  border-radius: 8px;
`;

const SelectBox = styled.span`
  cursor: pointer;
  display: inline-block;

  padding: 14px 20px;
  background-color: #1f2026;
  border-radius: 6px;

  font-weight: 600;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.9;

  margin-right: 8px;
  margin-top: 8px;

  @media (max-width: 1150px) {
    padding: 1.2174vw 1.7391vw;
  }

  @media ${responsive.tablet} {
    padding: 1.8229vw 2.6042vw;
  }

  @media ${responsive.mobile} {
  }
`;

const SelectBoxContainer = styled.div`
  margin-top: 8px;
`;

const BasicInfoPartTitle = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;
`;

const BasicInfoBox = styled.div`
  display: inline-block;

  ${({ width }) =>
    css`
      width: ${width};
    `}

  @media ${responsive.tablet} {
  }

  @media ${responsive.mobile} {
  }
`;

const FirstBasicInfoBox = styled(BasicInfoBox)`
  width: 240px;

  padding: 28px 20px 28px 20px;

  @media (max-width: 1150px) {
    width: 20.8696vw;
    padding: 28px 1.7391vw 28px 1.7391vw;
  }

  @media ${responsive.tablet} {
    width: 27.7344vw;
    padding: 28px 1.3021vw 28px 1.3021vw;
  }

  @media ${responsive.mobile} {
  }
`;

const SecondBasicInfoBox = styled(BasicInfoBox)`
  width: 270px;
  padding: 28px 0 28px 0;

  @media (max-width: 1150px) {
    width: 23.4783vw;
    padding: 28px 0 28px 0;
  }

  @media ${responsive.tablet} {
    width: 35.1563vw;
  }

  @media ${responsive.mobile} {
  }
`;

const ThirdBasicInfoBox = styled(BasicInfoBox)`
  width: 340px;
  padding: 28px 20px 28px 20px;

  @media (max-width: 1150px) {
    width: 29.5652vw;
    padding: 28px 1.7391vw 28px 1.7391vw;
  }

  @media ${responsive.tablet} {
    width: 31.901vw;
    padding: 28px 0.651vw 28px 1.3021vw;
  }

  @media ${responsive.mobile} {
  }
`;

const BasicInfoTitle = styled.h3`
  font-weight: 700;
  font-size: 1.375rem;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 30px;
`;

const BasicInfoContainer = styled.div`
  margin-top: 100px;
`;

const Email = styled.p`
  width: 139px;
  height: 20px;

  padding: 4px 8px;

  background-color: #1d1c21;
  border-radius: 3px;

  font-weight: 600;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.7;

  margin-top: 20px;
`;

const SnsLogin = styled.p`
  background-color: #000000;
  border-radius: 3px;

  padding: 6px 4px;
  margin-top: 10px;

  font-weight: 500;
  font-size: 0.6875rem;
  color: #ffffff;
`;

const UserId = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;

  margin-top: 24px;
`;

const CircleBackground = styled.div`
  width: 87px;
  height: 87px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.05);
`;

const CherryPickImg = styled.img`
  width: 43px;
  height: 55.94px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 240px;

  margin-top: 30px;

  background-color: #1f2026;
  border-radius: 8px;
`;

const ProfileContainer = styled.div``;

const ProfileTitle = styled.h3`
  font-weight: 700;
  font-size: 1.375rem;
  color: #ffffff;
  opacity: 0.9;
`;

const Container = styled.div``;

export default AccountSetting;
