import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';

import feedbackChecked from '../../../assets/img/feedbackChecked.svg';

const MobileSort = ({ className, checkSort, hotSixCurrentSort }) => {
  return (
    <Container className={className}>
      <Title>정렬</Title>
      <SortsUl>
        <SortLi
          hotSixCurrentSort={hotSixCurrentSort === '최신순'}
          data-id='최신순'
          onClick={checkSort}>
          <SortName>최신순</SortName>
          <Checked src={feedbackChecked} alt='체크' />
        </SortLi>
        <SortLi
          hotSixCurrentSort={hotSixCurrentSort === '인기순'}
          data-id='인기순'
          onClick={checkSort}>
          <SortName>인기순</SortName>
          <Checked src={feedbackChecked} alt='체크' />
        </SortLi>
        <SortLi
          hotSixCurrentSort={hotSixCurrentSort === '가격↑'}
          data-id='가격↑'
          onClick={checkSort}>
          <SortName>가격↑</SortName>
          <Checked src={feedbackChecked} alt='체크' />
        </SortLi>
        <SortLi
          hotSixCurrentSort={hotSixCurrentSort === '가격↓'}
          data-id='가격↓'
          onClick={checkSort}>
          <SortName>가격↓</SortName>
          <Checked src={feedbackChecked} alt='체크' />
        </SortLi>
      </SortsUl>
    </Container>
  );
};

const Checked = styled.img`
  display: none;
`;

const SortName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #000000;
  opacity: 0.9;
`;

const SortLi = styled.li`
  cursor: pointer;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;

  ${({ hotSixCurrentSort }) =>
    hotSixCurrentSort
      ? css`
          & > p {
            font-weight: 600;
            font-size: 1rem;
            color: #e72847;
            opacity: 0.9;
          }

          & > img {
            display: inline-block;
          }
        `
      : css`
          & > img {
            display: none;
          }
        `}
`;

const SortsUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 16px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  color: #000000;
  opacity: 0.9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 263px;

  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;

  padding: 17px 20px 24px 20px;
`;

export default MobileSort;
