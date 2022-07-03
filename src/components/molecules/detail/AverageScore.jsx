import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';

import starRed from '../../../assets/img/star1_red.svg';
import starHalfRed from '../../../assets/img/star0.5_red.svg';
import starEmptyRed from '../../../assets/img/star0_red.svg';

import smileRed from '../../../assets/img/smile_red.svg';
import smileGrey from '../../../assets/img/smile_grey.svg';
import ProgressBar from './ProgressBar';

import RecommendBadge from '../../UI/atoms/badges/RecommendBadge';
import { responsive } from '../../../style/responsive';
import { useMemo } from 'react';

const AverageScore = ({ lectureDetailInfoData }) => {
  const { review } = lectureDetailInfoData;
  const { count, costPerformance, totalRating } = review;

  const verySatisfactionCnt = useMemo(
    () => costPerformance.verySatisfaction / count,
    [count, costPerformance],
  );
  const satisfactionCnt = useMemo(
    () => costPerformance.satisfaction / count,
    [count, costPerformance],
  );
  const middleCnt = useMemo(
    () => costPerformance.middle / count,
    [count, costPerformance],
  );
  const sosoCnt = useMemo(
    () => costPerformance.soso / count,
    [count, costPerformance],
  );
  const starArray = Array.from({ length: 5 }, () => false);
  const fullStarCount = Math.floor(totalRating);

  for (let i = 0; i < fullStarCount; i++) {
    starArray[i] = 'full';
  }

  let halfStar = (totalRating * 10) % 10 >= 5 ? 'half' : 'empty';
  if (!(fullStarCount === 5)) {
    starArray[fullStarCount] = halfStar;
  }

  for (let i = 0; i < starArray.length; i++) {
    if (!starArray[i]) {
      starArray[i] = 'empty';
    }
  }

  return (
    <Container>
      <Title>평점</Title>

      <BoxContainer>
        <ReviewRecommendContainer>
          <ScoreBox>
            <p>리뷰 평점</p>

            <ScoreWrapper>
              <Score>{review.totalRating.toFixed(1)}</Score>
              <Counter>({review.count}명 참여)</Counter>
            </ScoreWrapper>

            <StarContainer>
              {starArray.map((value, i) => {
                if (value === 'full')
                  return <img key={i} src={starRed} alt='별점' />;
                else if (value === 'half')
                  return <img key={i} src={starHalfRed} alt='별점' />;
                else if (value === 'empty')
                  return <img key={i} src={starEmptyRed} alt='별점' />;
              })}
            </StarContainer>

            <FrontBackContainer>
              <ScoreWithText>
                <p>프론트엔드</p>
                <p>{review.frontendRating}</p>
              </ScoreWithText>
              <ScoreWithText>
                <p>백엔드</p>
                <p>{review.backendRating}</p>
              </ScoreWithText>
            </FrontBackContainer>
          </ScoreBox>

          <RecommendBox>
            <p>강의 추천도</p>

            <DivisionBox>
              <HalfBox red>
                <img src={smileRed} alt='추천해요 이미지' />
                <p>{review.recommendation.good}%</p>
                <StyledRecommendBadge point>추천해요!</StyledRecommendBadge>
              </HalfBox>

              <HalfBox>
                <img src={smileGrey} alt='별로에요 이미지' />
                <p>{review.recommendation.bad}%</p>
                <StyledRecommendBadge>별로에요</StyledRecommendBadge>
              </HalfBox>
            </DivisionBox>
          </RecommendBox>
        </ReviewRecommendContainer>

        <SatisfactionBox>
          <p>가격 대비 만족도</p>

          <ProgressColContainer>
            <ProgressBar
              title='매우 만족'
              total={review.costPerformance.verySatisfaction}
              percentage={String(verySatisfactionCnt)}
              id='1'
            />
            <ProgressBar
              title='만족'
              total={review.costPerformance.satisfaction}
              percentage={String(satisfactionCnt)}
              id='2'
            />
            <ProgressBar
              title='보통'
              total={review.costPerformance.middle}
              percentage={String(middleCnt)}
              id='3'
            />
            <ProgressBar
              title='그저 그럼'
              total={review.costPerformance.soso}
              percentage={String(sosoCnt)}
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
  width: 40vw;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 1120px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ReviewRecommendContainer = styled.div`
  display: flex;
  width: 55%;
  gap: 20px;

  @media (max-width: 1120px) {
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

  @media (max-width: 500px) {
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
`;

const Counter = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.text2};
`;

const StarContainer = styled.div`
  display: flex;
  gap: 0.274vw;
  margin-top: 12.49px;

  & > img {
    width: 15.79px;

    @media (min-width: 501px) and (max-width: 520px) {
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

  font-size: 0.7292vw;
  color: ${palette.text2};

  @media (max-width: 768px) {
    font-size: 0.875rem;
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

  @media (max-width: 500px) {
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
  }

  & > img {
    width: 32px;
  }
`;

const StyledRecommendBadge = styled(RecommendBadge)`
  font-size: 0.625rem;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SatisfactionBox = styled(CommonBox)`
  width: 45%;

  @media (max-width: 1120px) {
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
