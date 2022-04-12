import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';
import JobBadge from '../../UI/atoms/badges/JobBadge';

const LecturePrice = () => {
  return (
    <Container>
      <Title>강의 정보</Title>
      <TextInfoContainer>
        <BadgeContainer>
          <JobBadge>프론트</JobBadge>
          <JobBadge>1년차</JobBadge>
          <p>가 많이 들은 강의 입니다.</p>
        </BadgeContainer>
        <p>
          '끝말잇기'부터 '테트리스'까지! 실제로 동작하는 웹 게임을 개발하여 쉽고
          재밌는 자바스크립트를 배울 수 있는 강의 입니다.
        </p>
      </TextInfoContainer>

      <PriceBox>
        <PriceContainer>
          <p>가격</p>
          <p>17,000</p>
        </PriceContainer>
        <PriceDescription>
          * 할인 가격이므로, 정확한 가격정보는 원본 링크를 통해 확인하세요.
        </PriceDescription>
      </PriceBox>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;

  @media ${responsive.mobile} {
    width: 320px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${palette.textWhite};
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 1.25vw;

  @media ${responsive.mobile} {
    font-size: 1.125rem;
    padding-bottom: 20px;
  }
`;

const TextInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.0938vw;

  & > p {
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 1.0938vw;
    word-break: break-all;
    color: ${palette.text6};
  }

  @media ${responsive.mobile} {
    margin-top: 12px;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 36px;
  width: 100%;
  background: ${palette.subNavy};
  border-radius: 4px;
  margin-top: 28px;
  @media ${responsive.wideTablet} {
    flex-direction: column;
    gap: 15px;
  }

  @media ${responsive.mobile} {
    flex-direction: column;
    gap: 8px;
    padding: 13px 12px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > p:nth-of-type(1) {
    font-weight: 400;
    font-size: 0.8125rem;
    color: ${palette.text2};
  }

  & > p:nth-of-type(2) {
    font-weight: 700;
    font-size: 0.875rem;
    color: ${palette.textWhite};
  }
`;

const PriceDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${palette.text5};

  @media ${responsive.mobile} {
    font-size: 10px;
  }
`;

export default LecturePrice;
