import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import palette from '../../style/palette';
import { responsive } from '../../style/responsive';
import feedbacklogo from '../../assets/img/feedback.png';

import SigninStep from '../molecules/signin/SigninStep';

import JoinSubmitButton from '../UI/atoms/Join/JoinSubmitButton';
import DetailInfoButton from '../UI/atoms/Join/DetailInfoButton';
import Footer from '../molecules/footer/Footer';

const SignUpTemplate = () => {
  const [userInfo, setUserInfo] = useState({
    currentJob: '',
    career: '',
    knownPath: '',
  });
  const careerSlider = useRef(null);
  const knownPathSlider = useRef(null);

  const careerSliderObj = {
    isDown: false,
    initialX: 0,
    scrollLeft: 0,
  };

  const knownPathSliderObj = {
    isDown: false,
    initialX: 0,
    scrollLeft: 0,
  };

  const selectCurrentJob = (e) => {
    setUserInfo({ ...userInfo, currentJob: e.target.dataset.value });
  };

  const selectCareer = (e) => {
    setUserInfo({ ...userInfo, career: e.target.dataset.value });
  };

  const selectKnownPath = (e) => {
    setUserInfo({ ...userInfo, knownPath: e.target.dataset.value });
  };

  const checkIsSelected = () => {
    let allChecked = true;
    for (let key in userInfo) {
      if (!userInfo[key]) allChecked = false;
    }
    return allChecked;
  };

  const initMoveStart = (obj, reference, event) => {
    obj.isDown = true;
    obj.initialX = event.pageX - reference.current.offsetLeft;
    obj.scrollLeft = reference.current.scrollLeft;
  };

  const moveSlides = (obj, reference, event) => {
    if (!obj.isDown) return;
    event.preventDefault();
    const x = event.pageX - reference.current.offsetLeft;
    const move = (x - obj.initialX) * 1.5;
    reference.current.scrollLeft = obj.scrollLeft - move;
  };

  const gestureStart = (e) => {
    const { name } = e.currentTarget.dataset;

    if (name === 'career') initMoveStart(careerSliderObj, careerSlider, e);
    else if (name === 'knownPath')
      initMoveStart(knownPathSliderObj, knownPathSlider, e);
  };

  const gestureMove = (e) => {
    const { name } = e.currentTarget.dataset;

    if (name === 'career') moveSlides(careerSliderObj, careerSlider, e);
    else if (name === 'knownPath')
      moveSlides(knownPathSliderObj, knownPathSlider, e);
  };

  const gestureFinish = (e) => {
    const { name } = e.currentTarget.dataset;

    if (name === 'career') careerSliderObj.isDown = false;
    else if (name === 'knownPath') knownPathSliderObj.isDown = false;
  };

  useEffect(() => {
    careerSlider.current.addEventListener('pointerdown', gestureStart);
    careerSlider.current.addEventListener('pointermove', gestureMove);
    careerSlider.current.addEventListener('pointerleave', gestureFinish);
    careerSlider.current.addEventListener('pointerup', gestureFinish);

    knownPathSlider.current.addEventListener('pointerdown', gestureStart);
    knownPathSlider.current.addEventListener('pointermove', gestureMove);
    knownPathSlider.current.addEventListener('pointerleave', gestureFinish);
    knownPathSlider.current.addEventListener('pointerup', gestureFinish);

    return () => {
      careerSlider.current.removeEventListener('pointerdown', gestureStart);
      careerSlider.current.removeEventListener('pointermove', gestureMove);
      careerSlider.current.removeEventListener('pointerleave', gestureFinish);
      careerSlider.current.removeEventListener('pointerup', gestureFinish);

      knownPathSlider.current.removeEventListener('pointerdown', gestureStart);
      knownPathSlider.current.removeEventListener('pointermove', gestureMove);
      knownPathSlider.current.removeEventListener(
        'pointerleave',
        gestureFinish,
      );
      knownPathSlider.current.removeEventListener('pointerup', gestureFinish);
    };
  }, []);

  return (
    <Container>
      <CenterWrapper>
        <CenterBox>
          <SigninStep step='first' />

          <Title>
            <p>기본 정보를</p>
            <p>선택해주세요.</p>
          </Title>

          <QuestionContainer>
            <QuestionBox>
              <SubTitle>
                <p>1. 현재 직무</p>
                <p>선택한 직무가 메인 페이지에 보여집니다.</p>
              </SubTitle>

              <DetailInfoContainer>
                <DetailInfoButton
                  value='frontend'
                  select={userInfo.currentJob}
                  handleClick={selectCurrentJob}>
                  프론트엔드
                </DetailInfoButton>
                <DetailInfoButton
                  value='backend'
                  select={userInfo.currentJob}
                  handleClick={selectCurrentJob}>
                  백엔드
                </DetailInfoButton>
              </DetailInfoContainer>
            </QuestionBox>

            <QuestionBox>
              <SubTitle>
                <p>2. 경력</p>
              </SubTitle>
              <DetailInfoContainer data-name='career' ref={careerSlider}>
                <DetailInfoButton
                  value='student'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  학생
                </DetailInfoButton>
                <DetailInfoButton
                  value='1year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  1년 미만
                </DetailInfoButton>
                <DetailInfoButton
                  value='3year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  1~3년차
                </DetailInfoButton>
                <DetailInfoButton
                  value='6year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  3~6년차
                </DetailInfoButton>
                <DetailInfoButton
                  value='7year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  7년 이상
                </DetailInfoButton>
              </DetailInfoContainer>
            </QuestionBox>

            <QuestionBox>
              <SubTitle>
                <p>3. 알게 된 경로</p>
              </SubTitle>

              <DetailInfoContainer data-name='knownPath' ref={knownPathSlider}>
                <DetailInfoButton
                  value='search'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  검색
                </DetailInfoButton>
                <DetailInfoButton
                  value='friends'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  지인
                </DetailInfoButton>
                <DetailInfoButton
                  value='sns'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  SNS
                </DetailInfoButton>
                <DetailInfoButton
                  value='cafe'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  카페
                </DetailInfoButton>
                <DetailInfoButton
                  value='blog'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  블로그
                </DetailInfoButton>
                <DetailInfoButton
                  value='others'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  기타
                </DetailInfoButton>
              </DetailInfoContainer>
            </QuestionBox>
          </QuestionContainer>
        </CenterBox>
        <JoinSubmitButton clicked={!checkIsSelected()} />
      </CenterWrapper>
      <Footer login></Footer>
      <CherryPickLogo>
        <img src={feedbacklogo} alt='체리픽 로고' />
      </CherryPickLogo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: relative;

  background-color: ${palette.backgroundBlack};
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 195px 0 100px;

  @media ${responsive.mobile} {
    padding: 0 21px;
    height: 100vh;
  }
`;

const CenterBox = styled.div`
  width: 340px;

  @media ${responsive.mobile} {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 1.5rem;
  font-weight: 700;
  color: ${palette.text2};

  margin-top: 32px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 8px;

  margin: 24px 0 16px;
  padding: 28px 20px;

  background-color: #15161d;

  @media ${responsive.mobile} {
    width: 100%;

    background-color: ${palette.backgroundBlack};

    padding: 0;
    margin: 86px 0 0;
  }
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & > p:nth-of-type(1) {
    color: ${palette.text2};
    font-size: 1rem;
    font-weight: 400;
  }

  & > p:nth-of-type(2) {
    color: ${palette.text5};
    font-size: 0.75rem;
  }
`;

const DetailInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media ${responsive.mobile} {
    flex-wrap: nowrap;
    overflow: hidden;
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

export default SignUpTemplate;
