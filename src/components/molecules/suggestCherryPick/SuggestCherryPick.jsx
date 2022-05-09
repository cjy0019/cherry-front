import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';

import feedbackImg from '../../../assets/img/feedback.png';
import Feedback from '../../UI/atoms/feedback/Feedback';

const SuggestCherryPick = () => {
  const [feedbackIsClicked, setFeedbackIsClicked] = useState(false);

  const openFeedback = useCallback(() => {
    setFeedbackIsClicked(!feedbackIsClicked);
  }, [feedbackIsClicked]);

  return (
    <Container>
      <FitSizeContainer>
        <Title>
          누구나 첫 리뷰 작성하면
          <Br /> 전체 열람 가능
        </Title>
        <Info>
          들을까 말까 한 강의들을 계속 비교하느라 지치셨죠?
          <br /> 체리픽은 익명으로 솔직하게 리뷰를 남기고, <Br />
          강의 퀄리티를 판단할 수 있습니다.
        </Info>
        <StartButton to='#'>체리픽 시작하기</StartButton>
        <FeedbackButton onClick={openFeedback} />
        <CherryPickFeedback
          openFeedback={openFeedback}
          feedbackIsClicked={feedbackIsClicked}
        />
      </FitSizeContainer>
    </Container>
  );
};

const FitSizeContainer = styled.div`
  position: relative;

  width: 62.5vw;
  height: 340px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${responsive.tablet} {
    width: 100vw;
    height: 300px;
  }

  @media ${responsive.mobile} {
    width: 100vw;
    height: 284px;
  }
`;

const CherryPickFeedback = styled(Feedback)`
  position: absolute;
  top: 0;
  left: -5.4167vw;

  ${({ feedbackIsClicked }) =>
    feedbackIsClicked
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  @media ${responsive.tablet} {
    top: -14px;
    left: 2.9948vw;
  }

  @media ${responsive.mobile} {
    top: -30px;
    left: 0;
  }
`;

const FeedbackButton = styled.button`
  all: unset;
  cursor: pointer;
  display: block;

  position: absolute;
  bottom: 35.54px;
  left: -5.4167vw;

  width: 36px;
  height: 47px;

  background-image: url(${feedbackImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.tablet} {
    bottom: 13.54px;
    left: 2.9948vw;
  }

  @media ${responsive.mobile} {
    width: 32px;
    height: 41px;

    bottom: 11.7px;
    left: 85.5556vw;
  }
`;

const Br = styled.br`
  display: none;

  @media ${responsive.mobile} {
    display: block;
  }
`;

const StartButton = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 160px;
  height: 48px;

  background-color: #e72847;
  box-shadow: 0px 0px 12px rgba(231, 40, 71, 0.5);
  border-radius: 8px;

  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;

  margin-top: 32px;

  @media ${responsive.tablet} {
    margin-top: 36px;
  }

  @media ${responsive.mobile} {
  }
`;

const Info = styled.p`
  color: #b4b4b4;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  opacity: 0.6;

  line-height: 25px;

  margin-top: 20px;

  @media ${responsive.tablet} {
    font-size: 0.875rem;
  }

  @media ${responsive.mobile} {
    line-height: 20px;

    margin-top: 16px;
    font-size: 0.75rem;
  }
`;

const Title = styled.h2`
  all: unset;

  color: #b4b4b4;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;

  @media ${responsive.tablet} {
    font-size: 1.25rem;
  }

  @media ${responsive.mobile} {
    font-size: 1.125rem;
    line-height: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  background-color: #15161d;

  @media ${responsive.tablet} {
    margin-top: 60px;
  }

  @media ${responsive.mobile} {
  }
`;

export default SuggestCherryPick;
