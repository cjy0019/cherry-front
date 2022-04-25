import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import curiousEmoji from '../../../assets/img/emoji_hmm.png';
import palette from '../../../style/palette';

const SelectCategory = () => {
  const [firstCategoryIsClicked, setFirstCategoryIsClicked] =
    useState('프론트엔드');

  const [secondCategoryIsClicked, setSecondCategoryIsClicked] =
    useState('전체');

  const [sortIsClicked, setSortIsClicked] = useState('최신순');

  function selectFirstCategory(e) {
    setFirstCategoryIsClicked(e.target.innerText);
  }
  function selectSecondCategory(e) {
    setSecondCategoryIsClicked(e.target.innerText);
  }
  function selectSort(e) {
    setSortIsClicked(e.target.innerText);
  }

  return (
    <Container>
      <Title>
        리뷰가 궁금한 강의 살펴보기
        <TitleEmoji src={curiousEmoji} alt='궁금한 이모티콘' />
      </Title>
      <FirstCategoryContainer>
        <FirstCategoryButton
          firstCategoryIsClicked={firstCategoryIsClicked === '프론트엔드'}
          onClick={selectFirstCategory}>
          프론트엔드
        </FirstCategoryButton>
        <FirstCategoryButton
          firstCategoryIsClicked={firstCategoryIsClicked === '백엔드'}
          onClick={selectFirstCategory}>
          백엔드
        </FirstCategoryButton>
      </FirstCategoryContainer>
      <SecondCategoryContainer>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === '전체'}
          onClick={selectSecondCategory}>
          전체
        </SecondCategoryButton>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === '언어'}
          onClick={selectSecondCategory}>
          언어
        </SecondCategoryButton>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === '프레임워크'}
          onClick={selectSecondCategory}>
          프레임워크
        </SecondCategoryButton>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === '스타일링'}
          onClick={selectSecondCategory}>
          스타일링
        </SecondCategoryButton>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === '상태관리'}
          onClick={selectSecondCategory}>
          상태관리
        </SecondCategoryButton>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === '테스팅'}
          onClick={selectSecondCategory}>
          테스팅
        </SecondCategoryButton>
        <SecondCategoryButton
          secondCategoryIsClicked={secondCategoryIsClicked === 'Tools'}
          onClick={selectSecondCategory}>
          Tools
        </SecondCategoryButton>
      </SecondCategoryContainer>
      <SortContainer>
        <SortCategory
          sortIsClicked={sortIsClicked === '최신순'}
          onClick={selectSort}>
          최신순
        </SortCategory>
        <SortCategory
          sortIsClicked={sortIsClicked === '인기순'}
          onClick={selectSort}>
          인기순
        </SortCategory>
        <SortCategory
          sortIsClicked={sortIsClicked === '가격↑'}
          onClick={selectSort}>
          가격↑
        </SortCategory>
        <SortCategory
          sortIsClicked={sortIsClicked === '가격↓'}
          onClick={selectSort}>
          가격↓
        </SortCategory>
      </SortContainer>
      {/* <LectureCardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </LectureCardContainer> */}
      {/* <Pagination>
        <Prev></Prev>
        <PaginationNumber></PaginationNumber>
        <PaginationNumber></PaginationNumber>
        <PaginationNumber></PaginationNumber>
        <PaginationNumber></PaginationNumber>
        <PaginationNumber></PaginationNumber>
        <Next></Next>
      </Pagination> */}
    </Container>
  );
};

const SortCategory = styled.button`
  all: unset;
  cursor: pointer;

  margin-left: 12px;

  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.5;

  ${({ sortIsClicked }) =>
    sortIsClicked &&
    css`
      opacity: 1;
      transition: all 0.3s linear;
    `}
`;

const SortContainer = styled.div`
  display: block;
  margin-top: 65px;
  margin-left: auto;
`;

const SecondCategoryButton = styled.button`
  all: unset;
  cursor: pointer;

  padding: 0.625vw 1.4583vw;
  margin-right: 17px;

  border-radius: 100px;
  border: 1px solid #444444;

  color: #ffffff;
  letter-spacing: -0.05em;
  opacity: 0.5;
  font-weight: 400;

  ${({ secondCategoryIsClicked }) =>
    secondCategoryIsClicked &&
    css`
      background-color: #ffffff;
      color: #e72847;
      font-weight: 700;
      font-size: 1rem;

      border: none;
      opacity: unset;

      transition: all 0.3s linear;
    `};
`;

const SecondCategoryContainer = styled.div`
  margin-top: 28px;
  display: flex;
`;

const FirstCategoryButton = styled.button`
  all: unset;
  cursor: pointer;

  font-weight: 400;
  font-size: 2rem;
  color: #444444;
  letter-spacing: -0.05em;

  margin-right: 20px;

  ${({ firstCategoryIsClicked }) =>
    firstCategoryIsClicked &&
    css`
      font-weight: 600;
      font-size: 2rem;
      color: #e72847;

      transition: all 0.3s linear;
    `};
`;

const FirstCategoryContainer = styled.div`
  margin-top: 16px;
`;

const TitleEmoji = styled.img`
  width: 18px;
  height: 18px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 1rem;
  color: ${palette.textWhite};
  opacity: 0.8;
  margin-right: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 120px;

  /* 디버깅 */
  border: 1px solid tomato;
  /* background-color: yellowgreen; */
`;

export default SelectCategory;
