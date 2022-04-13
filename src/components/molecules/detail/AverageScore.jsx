import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import starRed from '../../../assets/img/star1_red.svg';

const AverageScore = () => {
  return (
    <Container>
      <Title>평점</Title>

      <BoxContainer>
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
        </RecommendBox>

        <SatisfactionBox>
          <p>가격 대비 만족도</p>
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
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  gap: 20px;
`;

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 230px;
  border-radius: 8px;
  background-color: ${palette.subNavy};
  padding: 27px 0 25.5px 0;

  & > p:first-child {
    color: ${palette.text2};
    font-size: 1rem;
  }
`;

const ScoreBox = styled(CommonBox)``;

const ScoreWrapper = styled.div`
  margin-top: 28px;
`;

const Score = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  line-height: 100%;
  color: ${palette.textWhite};
`;

const Counter = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 100%;
  color: ${palette.text2};
`;

const StarContainer = styled.div`
  display: flex;
  gap: 5.26px;
  margin-top: 12.49px;

  & > img {
    width: 15.79px;
  }
`;

const FrontBackContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 29px;
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
`;

const RecommendBox = styled(CommonBox)``;

const SatisfactionBox = styled(CommonBox)`
  width: 40%;
`;

export default AverageScore;
