import React from 'react';
import JobBadge from '../../UI/atoms/badges/JobBadge';
import styled from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const LectureInfo = () => {
  return (
    <Container>
      <Title>강의 정보</Title>

      <Badges>
        <JobBadge>프론트</JobBadge>
        <JobBadge>1년차</JobBadge>
        <p>가 많이 들은 강의입니다.</p>
      </Badges>
      <Description>
        '끝말잇기'부터 '테트리스'까지! 실제로 동작하는 웹 게임을 개발하며 쉽고
        재밌는 자바스크립트를 배울 수 있는 강의입니다.
      </Description>
      <Box>
        <PriceWrapper>
          <p>가격</p>
          <p>17,000</p>
        </PriceWrapper>
        <SmallText>
          * 할인 가격이므로, 정확한 가격정보는 원본링크를 통해 확인하세요.
        </SmallText>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 49px;
  margin-top: 72px;

  @media ${responsive.tablet} {
    width: 100%;
    padding-right: 0;
  }

  @media ${responsive.mobile} {
    width: 100%;
    padding-right: 0;
  }
`;

const Title = styled.h2`
  color: ${palette.text2};
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid ${palette.subNavy3};
  padding-bottom: 24px;
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${palette.textWhite};
  margin-top: 25px;
  gap: 6px;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${palette.text4};
  margin-top: 21px;
  word-break: keep-all;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 36px;
  background-color: ${palette.subNavy};
  border-radius: 4px;
  height: 40px;
  margin-top: 28px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > p:first-child {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${palette.text2};
    white-space: nowrap;
  }

  & > p:last-child {
    font-weight: 700;
    font-size: 0.875rem;
    color: ${palette.textWhite};
  }
`;

const SmallText = styled.p`
  font-size: 0.75rem;
  line-height: 100%;
  color: ${palette.text5};
`;

export default LectureInfo;
