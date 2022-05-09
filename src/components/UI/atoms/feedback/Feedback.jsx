import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import zeroStart from '../../../../assets/img/star0_dark.svg';
import halfStart from '../../../../assets/img/star0.5_dark.svg';
import fullStart from '../../../../assets/img/star1_dark.svg';
import closeButtonImg from '../../../../assets/img/feddback_close.svg';
import feedbackImg from '../../../../assets/img/feedback.png';
import { responsive } from '../../../../style/responsive';

const Feedback = ({ className }) => {
  const [feedbackIsClicked, setFeedbackIsClicked] = useState(false);

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
            <StartLabel htmlFor='rate1' />
            <StartInput type='radio' name='rating' value='1' id='rate1' />
            <StartLabel htmlFor='rate2' />
            <StartInput type='radio' name='rating' value='2' id='rate2' />
            <StartLabel htmlFor='rate3' />
            <StartInput type='radio' name='rating' value='3' id='rate3' />
            <StartLabel htmlFor='rate4' />
            <StartInput type='radio' name='rating' value='4' id='rate4' />
            <StartLabel htmlFor='rate5' />
            <StartInput type='radio' name='rating' value='5' id='rate5' />
          </StartFieldset>
        </StartForm>
        <FeedbackTextArea
          cols='8'
          placeholder='추가하고 싶은 강의/불편한 점/건의사항이 있으신가요?'
        />
        <Submit>제출하기</Submit>
        <CloseButton onClick={openFeedback} />
      </FeedbackContainer>
    </Container>
  );
};

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

const StartInput = styled.input`
  display: none;
`;

const StartLabel = styled.label`
  display: inline-block;
  width: 24px;
  height: 22.5px;
  margin-right: 8px;

  background-image: url(${zeroStart});
`;

const StartFieldset = styled.fieldset`
  all: unset;
  display: flex;
  justify-content: center;

  & > label:last-of-type {
    margin-right: 0;
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
  }
`;

export default Feedback;
