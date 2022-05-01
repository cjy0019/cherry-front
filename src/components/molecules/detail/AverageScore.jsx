import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';

import starRed from '../../../assets/img/star1_red.svg';
import smileRed from '../../../assets/img/smile_red.svg';
import smileGrey from '../../../assets/img/smile_grey.svg';
import ProgressBar from './ProgressBar';

import RecommendBadge from '../../UI/atoms/badges/RecommendBadge';
import { responsive } from '../../../style/responsive';

const AverageScore = () => {
  return (
    <Container>
      <Title>평점</Title>

      <BoxContainer>
        <ReviewRecommendContainer>
          <ScoreBox>
            <p>리뷰 평점</p>

            <ScoreWrapper>
              <Score>4.5</Score>
              <Counter>(133명 참여)</Counter>
            </ScoreWrapper>

            <StarContainer>
              <img src={starRed} alt='포인트' />
              <img src={starRed} alt='포인트' />
              <img src={starRed} alt='포인트' />
              <img src={starRed} alt='포인트' />
              <img src={starRed} alt='포인트' />
            </StarContainer>

            <FrontBackContainer>
              <ScoreWithText>
                <p>프론트엔드</p>
                <p>2.2</p>
              </ScoreWithText>
              <ScoreWithText>
                <p>백엔드</p>
                <p>2.5</p>
              </ScoreWithText>
            </FrontBackContainer>
          </ScoreBox>

          <RecommendBox>
            <p>강의 추천도</p>

            <DivisionBox>
              <HalfBox red>
                <img src={smileRed} alt='추천해요 이미지' />
                <p>92%</p>
                <StyledRecommendBadge point>추천해요!</StyledRecommendBadge>
              </HalfBox>

              <HalfBox>
                <img src={smileGrey} alt='별로에요 이미지' />
                <p>8%</p>
                <StyledRecommendBadge>별로에요</StyledRecommendBadge>
              </HalfBox>
            </DivisionBox>
          </RecommendBox>
        </ReviewRecommendContainer>

        <SatisfactionBox>
          <p>가격 대비 만족도</p>

          <ProgressColContainer>
            <ProgressBar title='매우 만족' total={2} percentage='0.3' id='1' />
            <ProgressBar title='만족' total={4} percentage='0.9' id='2' />
            <ProgressBar title='보통' total={20} percentage='1' id='3' />
            <ProgressBar
              title='그저 그럼'
              total={100}
              percentage='0.5'
              id='4'
            />
          </ProgressColContainer>
        </SatisfactionBox>
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 60px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${palette.text2};

  @media ${responsive.mobile} {
    font-size: 1.125rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  gap: 20px;

  @media ${responsive.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

const ReviewRecommendContainer = styled.div`
  display: flex;
  width: 55%;
  gap: 20px;

  @media ${responsive.mobile} {
    gap: 8px;
    width: 100%;
  }
`;

const CommonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 27px 10px 0;

  height: 230px;
  border-radius: 8px;
  background-color: ${palette.subNavy};

  & > p:first-child {
    color: ${palette.text2};
    font-size: 1rem;
  }
`;

const ScoreBox = styled(CommonBox)`
  width: 100%;
  min-width: 105px;

  @media ${responsive.mobile} {
    width: 50%;
  }
`;

const ScoreWrapper = styled.div`
  margin-top: 28px;
`;

const Score = styled.p`
  text-align: center;

  font-size: 2rem;
  font-weight: 700;
  color: ${palette.textWhite};

  @media (min-width: 430px) and (max-width: 525px) {
    font-size: 1.625rem;
  }
`;

const Counter = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.text2};

  @media (min-width: 430px) and (max-width: 525px) {
    font-size: 0.6875rem;
  }
`;

const StarContainer = styled.div`
  display: flex;
  gap: 0.274vw;
  margin-top: 12.49px;

  & > img {
    width: 15.79px;

    @media (max-width: 520px) {
      width: 2.0833vw;
    }
  }
`;

const FrontBackContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5104vw;
  margin-top: 24.7px;
  width: 100%;
`;

const ScoreWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 0.875rem;
  color: ${palette.text2};

  @media (max-width: 670px) {
    font-size: 0.5208vw;
  }

  @media ${responsive.mobile} {
    font-size: 0.75rem;
  }
`;

const RecommendBox = styled(CommonBox)`
  width: 100%;

  & > p {
    word-break: keep-all;

    @media (min-width: 768px) and (max-width: 790px) {
      font-size: 0.875rem;
    }
  }

  @media ${responsive.mobile} {
    width: 50%;
  }
`;

const DivisionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0417vw;

  margin-top: 48px;
`;

const HalfBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    margin: 8px 0 16px;
    font-weight: 600;
    font-size: 1.25rem;

    color: ${(props) => (props.red ? palette.pointRed : palette.text4)};

    @media (min-width: 768px) and (max-width: 790px) {
      font-size: 1.0625rem;
    }

    @media (max-width: 615px) {
      font-size: 1.0625rem;
    }
  }

  & > img {
    @media (min-width: 768px) and (max-width: 790px) {
      width: 5.2083vw;
    }
    @media (max-width: 615px) {
      width: 20px;
    }
  }
`;

const StyledRecommendBadge = styled(RecommendBadge)`
  @media (min-width: 768px) and (max-width: 790px) {
    display: none;
  }

  @media (max-width: 614px) {
    display: none;
  }
`;

const SatisfactionBox = styled(CommonBox)`
  width: 60%;

  @media ${responsive.mobile} {
    width: 100%;
  }
`;

const ProgressColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 17px;
  margin-top: 45px;
  color: ${palette.text2};
`;

export default AverageScore;
