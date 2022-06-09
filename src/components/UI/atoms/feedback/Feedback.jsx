import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../../style/responsive';

import zeroStart from '../../../../assets/img/star0_dark.svg';

import closeButtonImg from '../../../../assets/img/feddback_close.svg';
import feedbackImg from '../../../../assets/img/feedback.png';
import closeButton from '../../../../assets/img/close_w.svg';

import LeftHalfStar from '../halfStar/LeftHalfStar';
import RightHalfStar from '../halfStar/RightHalfStar';

const Feedback = ({ className }) => {
  const [feedbackIsClicked, setFeedbackIsClicked] = useState(true);

  const openFeedback = () => {
    setFeedbackIsClicked(!feedbackIsClicked);
  };

  return (
    <Container className={className}>
      <FeedbackButton onClick={openFeedback} />
      <FeedbackContainer feedbackIsClicked={feedbackIsClicked}>
        <Title>
          Cherry Pick에
          <br /> 만족하셨나요?
        </Title>
        <StartForm>
          <StartFieldset>
            <StarInput name='rateGroup' id='rate5' type='radio' data-id='5' />
            <StyledRightHalfStar htmlFor='rate5' />

            <StarInput
              name='rateGroup'
              id='rate4.5'
              type='radio'
              data-id='4.5'
            />
            <StyledLeftHalfStar htmlFor='rate4.5' />

            <StarInput name='rateGroup' id='rate4' type='radio' data-id='4' />
            <StyledRightHalfStar htmlFor='rate4' />

            <StarInput
              name='rateGroup'
              id='rate3.5'
              type='radio'
              data-id='3.5'
            />
            <StyledLeftHalfStar htmlFor='rate3.5' />

            <StarInput name='rateGroup' id='rate3' type='radio' data-id='3' />
            <StyledRightHalfStar htmlFor='rate3' />

            <StarInput
              name='rateGroup'
              id='rate2.5'
              type='radio'
              data-id='2.5'
            />
            <StyledLeftHalfStar htmlFor='rate2.5' />

            <StarInput name='rateGroup' id='rate2' type='radio' data-id='2' />
            <StyledRightHalfStar htmlFor='rate2' />

            <StarInput
              name='rateGroup'
              id='rate1.5'
              type='radio'
              data-id='1.5'
            />
            <StyledLeftHalfStar htmlFor='rate1.5' />

            <StarInput name='rateGroup' id='rate1' type='radio' data-id='1' />
            <StyledRightHalfStar htmlFor='rate1' />

            <StarInput
              name='rateGroup'
              id='rate0.5'
              type='radio'
              data-id='0.5'
            />
            <StyledLeftHalfStar htmlFor='rate0.5' />
          </StartFieldset>
        </StartForm>
        <FeedbackTextArea
          cols='8'
          placeholder='추가하고 싶은 강의/불편한 점/건의사항이 있으신가요?'
        />
        <Submit>제출하기</Submit>
        <CloseButton onClick={openFeedback} />
      </FeedbackContainer>
      <MobileFeedbackContainer feedbackIsClicked={feedbackIsClicked}>
        <CloseFeedbackButton onClick={openFeedback} />
        <FeedbackTitle>Cheery Pick에 만족하셨나요?</FeedbackTitle>
        <StarsUl>
          <StarLi>
            <StarImg src={zeroStart} alt='별점'></StarImg>
          </StarLi>
          <StarLi>
            <StarImg src={zeroStart} alt='별점'></StarImg>
          </StarLi>
          <StarLi>
            <StarImg src={zeroStart} alt='별점'></StarImg>
          </StarLi>
          <StarLi>
            <StarImg src={zeroStart} alt='별점'></StarImg>
          </StarLi>
          <StarLi>
            <StarImg src={zeroStart} alt='별점'></StarImg>
          </StarLi>
        </StarsUl>
        <MobileFeedbackTextArea
          cols='8'
          placeholder='추가하고 싶은 강의/불편한 점/건의사항이 있으신가요?'
        />
        <MobileSubmitButton>제출하기</MobileSubmitButton>
      </MobileFeedbackContainer>
    </Container>
  );
};

const CloseFeedbackButton = styled.button`
  all: unset;
  box-sizing: border-box;

  background-image: url(${closeButton});
  background-position: center;
  background-repeat: no-repeat;

  position: absolute;
  top: -44px;
  right: 20px;

  width: 32px;
  height: 32px;

  margin-bottom: 12px;
`;

const MobileSubmitButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;

  margin-top: 20px;
  background-color: #000000;
  border-radius: 3px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const MobileFeedbackTextArea = styled.textarea`
  all: unset;
  box-sizing: border-box;

  width: 100%;
  height: 84px;

  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 3px;

  margin-top: 24px;
  padding: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;

  color: #000000;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;

    color: #000000;
    opacity: 0.3;
  }
`;

const StarImg = styled.img`
  width: 24px;
  height: 24px;
`;

const StarLi = styled.li`
  list-style: none;
`;

const StarsUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  gap: 8px;
`;

const FeedbackTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  color: #000000;
`;

const MobileFeedbackContainer = styled.div`
  display: none;

  @media ${responsive.mobile} {
    ${({ feedbackIsClicked }) =>
      feedbackIsClicked
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}

    flex-direction: column;
    align-items: center;

    position: fixed;
    right: 0;
    bottom: 0;

    width: 100%;

    padding: 36px 20px 24px 20px;

    background-color: #ffffff;
    border-radius: 20px 20px 0px 0px;
  }
`;

const FeedbackButton = styled.button`
  all: unset;

  cursor: pointer;
  display: block;

  width: 36px;
  height: 47px;

  background-image: url(${feedbackImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.mobile} {
    width: 32px;
    height: 41px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 5000;
`;

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;

  position: absolute;
  top: 17px;
  right: 16px;

  width: 28px;
  height: 28px;

  background-image: url(${closeButtonImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Submit = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 34px;

  background-color: #000000;
  border-radius: 3px;

  margin-top: 12px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const FeedbackTextArea = styled.textarea`
  all: unset;

  width: 274px;
  height: 38px;

  margin-top: 16px;
  padding: 12px;

  border: 1px solid #eeeeee;
  border-radius: 3px;

  font-weight: 400;
  font-size: 12px;

  &::placeholder {
    font-size: 0.75rem;
    font-weight: 400;
    color: #000000;
    opacity: 0.3;
  }
`;

const StarInput = styled.input`
  /* display: none; */
`;

const StyledRightHalfStar = styled(RightHalfStar)`
  cursor: pointer;
  display: inline-block;

  &:hover path {
    fill: black;
  }
`;

const StyledLeftHalfStar = styled(LeftHalfStar)`
  cursor: pointer;
  display: inline-block;

  &:hover path {
    fill: black;
  }
`;

const StartFieldset = styled.fieldset`
  all: unset;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  & > input {
    display: none;
  }

  & > label:nth-of-type(odd) {
    padding-right: 8px;
  }

  & label:first-of-type {
    margin-right: 0;
  }

  & > label:hover ~ label > svg {
    path {
      fill: black;
    }
  }

  input:checked ~ label > svg {
    path {
      fill: black;
    }
  }
`;

const StartForm = styled.form`
  margin-top: 16.75px;
`;

const Title = styled.h3`
  display: block;

  line-height: 25px;
  font-weight: 700;
  font-size: 1.125rem;
  color: #000000;
`;

const FeedbackContainer = styled.div`
  position: absolute;
  top: -262.75px;

  ${({ feedbackIsClicked }) =>
    feedbackIsClicked
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  width: 332px;

  padding: 16px;

  background-color: #ffffff;
  border-radius: 8px;

  @media ${responsive.mobile} {
    right: 0;

    display: none;
  }
`;

export default Feedback;
