import React from 'react';
import JobBadge from '../../UI/atoms/badges/JobBadge';
import styled from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const LectureInfo = ({ lectureDetailInfoData }) => {
  const { mostViewUserGroup, price, info } = lectureDetailInfoData;

  return (
    <Container>
      <Title>강의 정보</Title>

      <Badges>
        <JobBadge>{mostViewUserGroup.job}</JobBadge>
        <JobBadge>{mostViewUserGroup.career}</JobBadge>
        <p>가 많이 들은 강의입니다.</p>
      </Badges>
      <Description>{info}</Description>

      <Box>
        <PriceWrapper>
          <p>가격</p>
          <p>{price.toLocaleString()}</p>
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
  margin-top: 72px;
  width: 40vw;

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

  @media ${responsive.mobile} {
    font-size: 1.125rem;

    padding-bottom: 20px;
  }
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 0.875rem;
  color: ${palette.textWhite};

  margin-top: 20px;

  @media ${responsive.mobile} {
    margin-top: 12px;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${palette.text4};

  margin-top: 21px;

  word-break: keep-all;
  line-height: 1.5;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 13px 36px;
  margin-top: 28px;

  background-color: ${palette.subNavy};
  border-radius: 4px;

  @media ${responsive.mobile} {
    align-items: flex-start;
    flex-direction: column;

    padding: 12px 12px;
  }
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

  @media ${responsive.mobile} {
    font-size: 0.625rem;
  }
`;

export default LectureInfo;
