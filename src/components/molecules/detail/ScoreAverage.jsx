import React from 'react';
import styled from 'styled-components';

import RecommendBadge from '../../UI/atoms/badges/RecommendBadge';

import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';
import starIcon from '../../../assets/img/star1_red.svg';
import smileRed from '../../../assets/img/smile_red.svg';
import smileGrey from '../../../assets/img/smile_grey.svg';

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
            <PercentageFlex>
              <ImgContainer>
                <img src={smileRed} />
                <p>92%</p>
                <RecommendBadge point>추천해요!</RecommendBadge>
              </ImgContainer>
              <ImgContainer>
                <img src={smileGrey} />
                <p>8%</p>
                <RecommendBadge>별로에요</RecommendBadge>
              </ImgContainer>
            </PercentageFlex>
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
  font-size: 1.5rem;
  font-weight: 700;
  color: ${palette.textWhite};

  @media ${responsive.mobile} {
    font-size: 18px;
    padding-bottom: 20px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1.4063vw;

  @media ${responsive.wideTablet} {
    gap: 16px;
  }

  @media ${responsive.mobile} {
    margin-top: 20px;
  }
`;

const ReviewRecommendContainer = styled.div`
  display: flex;
  gap: 20px;

  @media ${responsive.wideTablet} {
    gap: 16px;
  }
`;

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 27px 0 25px 0;
  width: 200px;
  background-color: ${palette.subNavy};
  border-radius: 8px;
  color: ${palette.text2};

  @media ${responsive.tablet} {
    width: 180px;
  }
`;

const ReviewScoreBox = styled(CommonBox)``;

const HighLightScore = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: ${palette.textWhite};
  margin-top: 1.4583vw;
`;

const ParticipateCount = styled.p`
  font-size: 0.875rem;
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
    width: 0.9375rem;
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
  font-size: 0.875rem;
`;

const RecommendBox = styled(CommonBox)``;

const PercentageFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5521vw;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  & > img {
    width: 32px;
    display: flex;
  }
  & > p {
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

const SatisfactionBox = styled(CommonBox)`
  width: 328px;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  color: ${palette.textWhite};

  @media ${responsive.tablet} {
    font-size: 16px;
  }

  @media ${responsive.mobile} {
    font-size: 16px;
  }
`;

export default ScoreAverage;
