import React from 'react';
import styled from 'styled-components';

import thumbnail from '../../../assets/img/thumbnail.svg';
import palette from '../../../style/palette';
import LargeAgencyBadge from '../../UI/atoms/badges/LargeAgencyBadge';
import starRed from '../../../assets/img/star1_red.svg';

const LectureDetailTitle = () => {
  return (
    <Container>
      <FlexLeft>
        <img src={thumbnail} alt='강의 썸네일' />
      </FlexLeft>

      <FlexRight>
        <Title>웹 게임을 만들며 배우는 JavaScript (자바스크립트)</Title>
        <Badges>
          <LargeAgencyBadge>기관 groomedu</LargeAgencyBadge>
          <LargeAgencyBadge>강사 ZeroCho</LargeAgencyBadge>
        </Badges>

        <HashTags>
          <p>#수강가능</p>
          <p>#JavaScript</p>
          <p>#TypeScript</p>
        </HashTags>

        <StarPoints>
          <Points>4.5</Points>
          <Stars>
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
          </Stars>
          <Counter>(99+참여)</Counter>
        </StarPoints>
      </FlexRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 106px;
  gap: 7.4479vw;
`;

const FlexLeft = styled.div`
  width: 40%;
  border-radius: 10px;
  background-color: red;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
  width: 35%;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${palette.textWhite};
`;

const Badges = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 28px;
`;

const HashTags = styled.div`
  display: flex;
  gap: 12px;
  font-size: 1rem;
  font-weight: 400;
  color: ${palette.text4};
  margin-top: 12px;
`;

const StarPoints = styled.div`
  display: flex;
  align-items: center;
  margin-top: 71px;
`;

const Stars = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 16px 0 10px;
`;

const Points = styled.p`
  font-weight: 700;
  font-size: 1.75rem;
  color: ${palette.textWhite};
`;

const Counter = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  color: ${palette.text2};
`;

export default LectureDetailTitle;
