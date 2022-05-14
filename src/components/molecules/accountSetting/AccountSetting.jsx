import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import cherryPickImg from '../../../assets/img/feedback.png';
import { responsive } from '../../../style/responsive';

const AccountSetting = ({ className }) => {
  const [currentJob, setCurrentJob] = useState('프론트엔드');
  const [currentCareer, setCurrentCareer] = useState('학생');
  const [currentWay, setCurrentWay] = useState('검색');

  let mobileSecondSlider = useRef({
    startX: 0,
    moveX: 0,
    endX: 0,
    lastElementLocation: 0,
    isFirstTouch: false,
  });
  let mobileThirdSlider = useRef({
    startX: 0,
    moveX: 0,
    endX: 0,
    lastElementLocation: 0,
    isFirstTouch: false,
  });

  function selectJob(e) {
    setCurrentJob(e.currentTarget.dataset.name);
  }
  function selectCareer(e) {
    setCurrentCareer(e.currentTarget.dataset.name);
  }
  function selectWay(e) {
    setCurrentWay(e.currentTarget.dataset.name);
  }

  function touchStartSecondSlider(e) {
    e.stopPropagation();
    mobileSecondSlider.current.startX = e.changedTouches[0].clientX;
    if (!mobileSecondSlider.current.isFirstTouch) {
      mobileSecondSlider.current.lastElementLocation =
        e.currentTarget.lastElementChild.getBoundingClientRect().right;
    }
    mobileSecondSlider.current.isFirstTouch = true;
  }
  function touchMoveSecondSlider(e) {
    e.stopPropagation();
    mobileSecondSlider.current.moveX = -(
      mobileSecondSlider.current.startX - e.changedTouches[0].clientX
    );

    e.currentTarget.style.transform = `translateX(${
      mobileSecondSlider.current.endX + mobileSecondSlider.current.moveX
    }px)`;
  }
  function touchEndSecondSlider(e) {
    e.stopPropagation();
    let responsiveWidth = (340 / 360) * window.innerWidth;
    mobileSecondSlider.current.endX += -(
      mobileSecondSlider.current.startX - e.changedTouches[0].clientX
    );

    if (
      responsiveWidth - mobileSecondSlider.current.lastElementLocation >
      mobileSecondSlider.current.endX
    ) {
      mobileSecondSlider.current.endX =
        responsiveWidth - mobileSecondSlider.current.lastElementLocation;
      e.currentTarget.style.transform = `translateX(${mobileSecondSlider.current.endX}px)`;
    }

    if (mobileSecondSlider.current.endX > 0) {
      mobileSecondSlider.current.endX = 0;
      e.currentTarget.style.transform = `translateX(${mobileSecondSlider.current.endX}px)`;
    }
  }

  function touchStartThirdSlider(e) {
    e.stopPropagation();
    mobileThirdSlider.current.startX = e.changedTouches[0].clientX;
    if (!mobileThirdSlider.current.isFirstTouch) {
      mobileThirdSlider.current.lastElementLocation =
        e.currentTarget.lastElementChild.getBoundingClientRect().right;
    }
    mobileThirdSlider.current.isFirstTouch = true;
  }
  function touchMoveThirdSlider(e) {
    e.stopPropagation();
    mobileThirdSlider.current.moveX = -(
      mobileThirdSlider.current.startX - e.changedTouches[0].clientX
    );

    e.currentTarget.style.transform = `translateX(${
      mobileThirdSlider.current.endX + mobileThirdSlider.current.moveX
    }px)`;
  }
  function touchEndThirdSlider(e) {
    e.stopPropagation();
    let responsiveWidth = (340 / 360) * window.innerWidth;
    mobileThirdSlider.current.endX += -(
      mobileThirdSlider.current.startX - e.changedTouches[0].clientX
    );

    if (
      responsiveWidth - mobileThirdSlider.current.lastElementLocation >
      mobileThirdSlider.current.endX
    ) {
      mobileThirdSlider.current.endX =
        responsiveWidth - mobileThirdSlider.current.lastElementLocation;
      e.currentTarget.style.transform = `translateX(${mobileThirdSlider.current.endX}px)`;
    }

    if (mobileThirdSlider.current.endX > 0) {
      mobileThirdSlider.current.endX = 0;
      e.currentTarget.style.transform = `translateX(${mobileThirdSlider.current.endX}px)`;
    }
  }

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
              <SelectBox
                current={currentJob === '프론트엔드'}
                onClick={selectJob}
                data-name='프론트엔드'>
                프론트엔드
              </SelectBox>
              <SelectBox
                current={currentJob === '백엔드'}
                onClick={selectJob}
                data-name='백엔드'>
                백엔드
              </SelectBox>
            </SelectBoxContainer>
          </FirstBasicInfoBox>
          <SecondBasicInfoBox>
            <BasicInfoPartTitle>2. 경력</BasicInfoPartTitle>
            <SelectBoxContainer
              onTouchStart={touchStartSecondSlider}
              onTouchMove={touchMoveSecondSlider}
              onTouchEnd={touchEndSecondSlider}>
              <SelectBox
                current={currentCareer === '학생'}
                data-name='학생'
                onClick={selectCareer}>
                학생
              </SelectBox>
              <SelectBox
                current={currentCareer === '1~3년차'}
                data-name='1~3년차'
                onClick={selectCareer}>
                1~3년차
              </SelectBox>
              <SelectBox
                current={currentCareer === '1년 미만'}
                data-name='1년 미만'
                onClick={selectCareer}>
                1년 미만
              </SelectBox>
              <SelectBox
                current={currentCareer === '3~6년차'}
                data-name='3~6년차'
                onClick={selectCareer}>
                3~6년차
              </SelectBox>
              <SelectBox
                current={currentCareer === '7년 이상'}
                data-name='7년 이상'
                onClick={selectCareer}>
                7년 이상
              </SelectBox>
            </SelectBoxContainer>
          </SecondBasicInfoBox>
          <ThirdBasicInfoBox>
            <BasicInfoPartTitle>3. 알게 된 경로</BasicInfoPartTitle>
            <SelectBoxContainer
              onTouchStart={touchStartThirdSlider}
              onTouchMove={touchMoveThirdSlider}
              onTouchEnd={touchEndThirdSlider}>
              <SelectBox
                current={currentWay === '검색'}
                onClick={selectWay}
                data-name='검색'>
                검색
              </SelectBox>
              <SelectBox
                current={currentWay === '지인'}
                onClick={selectWay}
                data-name='지인'>
                지인
              </SelectBox>
              <SelectBox
                current={currentWay === 'SNS'}
                onClick={selectWay}
                data-name='SNS'>
                SNS
              </SelectBox>
              <SelectBox
                current={currentWay === '카페'}
                onClick={selectWay}
                data-name='카페'>
                카페
              </SelectBox>
              <SelectBox
                current={currentWay === '블로그'}
                onClick={selectWay}
                data-name='블로그'>
                블로그
              </SelectBox>
              <SelectBox
                current={currentWay === '기타'}
                onClick={selectWay}
                data-name='기타'>
                기타
              </SelectBox>
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

  @media ${responsive.mobile} {
    flex-direction: column;
    background-color: transparent;
  }
`;

const SelectBox = styled.span`
  cursor: pointer;
  display: inline-block;

  padding: 14px 20px;
  background-color: #1f2026;
  /* background-color: tomato; */
  border-radius: 6px;

  font-weight: 600;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.9;

  margin-right: 8px;
  margin-top: 8px;

  ${({ current }) =>
    current
      ? css`
          border: 0.6px solid #e72847;
        `
      : css`
          border: none;
        `}

  @media (max-width: 1150px) {
    padding: 1.2174vw 1.7391vw;
  }

  @media ${responsive.tablet} {
    padding: 1.8229vw 2.6042vw;
  }

  @media ${responsive.mobile} {
    padding: 14px 20px;
  }
`;

const SelectBoxContainer = styled.div`
  margin-top: 8px;

  @media ${responsive.mobile} {
    width: 1000px;
  }
`;

const BasicInfoPartTitle = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;
`;

const BasicInfoBox = styled.div``;

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
    overflow: hidden;
    padding: 28px 0 28px 0;
    width: 88.8889vw;
  }
`;

const SecondBasicInfoBox = styled(BasicInfoBox)`
  width: 280px;
  padding: 28px 0 28px 0;

  @media (max-width: 1150px) {
    width: 23.4783vw;
    padding: 28px 0 28px 0;
  }

  @media ${responsive.tablet} {
    width: 35.1563vw;
  }
  @media ${responsive.mobile} {
    padding: 28px 0 28px 0;
    overflow: hidden;
    width: 88.8889vw;
  }
`;

const ThirdBasicInfoBox = styled(BasicInfoBox)`
  width: 340px;
  overflow: hidden;
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
    padding: 28px 0 28px 0;
    overflow: hidden;
    width: 88.8889vw;
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
