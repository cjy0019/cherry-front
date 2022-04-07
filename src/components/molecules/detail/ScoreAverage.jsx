import React from 'react';
import styled from 'styled-components';

import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';
import starIcon from '../../../assets/img/star1_red.svg';

const ScoreAverage = () => {
  return (
    <Container>
      <Title>평점</Title>

      <BoxContainer>
        <ReviewRecommendContainer>
          <ReviewScoreBox>
            <SubTitle>리뷰 평점</SubTitle>
            <HighLightScore>4.5</HighLightScore>
            <ParticipateCount>(133명 참여)</ParticipateCount>
            <IconContainer>
              <img src={starIcon} alt='평점 아이콘' />
              <img src={starIcon} alt='평점 아이콘' />
              <img src={starIcon} alt='평점 아이콘' />
              <img src={starIcon} alt='평점 아이콘' />
              <img src={starIcon} alt='평점 아이콘' />
            </IconContainer>

            <FrontBackTextContainer>
              <TextFlexWrapper>
                <p>프론트엔드</p>
                <p>2.2</p>
              </TextFlexWrapper>
              <TextFlexWrapper>
                <p>백엔드</p>
                <p>2.5</p>
              </TextFlexWrapper>
            </FrontBackTextContainer>
          </ReviewScoreBox>

          <RecommendBox>
            <SubTitle>강의 추천도</SubTitle>
            <div>
              <img />
              <p>92%</p>
              <div>추천해요</div>
            </div>
            <div>
              <img />
              <p>8%</p>
              <div>별로에요</div>
            </div>
          </RecommendBox>
        </ReviewRecommendContainer>

        <SatisfactionBox>
          <SubTitle>가격 대비 만족도</SubTitle>
        </SatisfactionBox>
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${palette.textWhite};

  @media ${responsive.mobile} {
    font-size: 18px;
    padding-bottom: 20px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 1.0417vw;
  margin-top: 1.4063vw;

  @media ${responsive.mobile} {
    margin-top: 20px;
  }
`;

const ReviewRecommendContainer = styled.div`
  display: flex;
  gap: 1.0417vw;
`;

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10.4167vw;
  background-color: ${palette.subNavy};
  border-radius: 8px;
  padding: 1.4063vw 0 1.3021vw;
  color: ${palette.text2};
`;

const ReviewScoreBox = styled(CommonBox)``;

const HighLightScore = styled.p`
  font-weight: 700;
  font-size: 1.6667vw;
  color: ${palette.textWhite};
  margin-top: 1.4583vw;
`;

const ParticipateCount = styled.p`
  font-size: 0.7292vw;
  margin-top: 4px;

  @media ${responsive.tablet} {
    font-size: 14px;
  }
  @media ${responsive.mobile} {
    font-size: 14px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12.49px;
  gap: 5.26px;

  & > img {
    width: 0.8224vw;
  }
`;

const FrontBackTextContainer = styled.div`
  display: flex;
  margin-top: 1.2865vw;
  gap: 1.5104vw;
`;

const TextFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  font-size: 0.7292vw;
`;

const RecommendBox = styled(CommonBox)``;

const SatisfactionBox = styled(CommonBox)`
  width: 17.0833vw;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 0.8333vw;
  color: ${palette.textWhite};

  @media ${responsive.tablet} {
    font-size: 16px;
  }

  @media ${responsive.mobile} {
    font-size: 16px;
  }
`;

export default ScoreAverage;
