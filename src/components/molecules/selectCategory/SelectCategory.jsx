import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import curiousEmoji from '../../../assets/img/emoji_hmm.png';
import palette from '../../../style/palette';

import arrowRight from '../../../assets/img/arrow_right.svg';
import arrowLeft from '../../../assets/img/arrow_left.svg';
import javascript from '../../../assets/img/JavaScript.png';

const skillArr = [
  javascript,
  javascript,
  javascript,
  javascript,
  javascript,
  javascript,
  javascript,
  javascript,
  javascript,
  javascript,
];

const SelectCategory = () => {
  const [firstCategoryIsClicked, setFirstCategoryIsClicked] =
    useState('프론트엔드');

  const [secondCategoryIsClicked, setSecondCategoryIsClicked] =
    useState('전체');

  const [sortIsClicked, setSortIsClicked] = useState('최신순');
  const [currentCarousel, setCurrentCarousel] = useState(0);

  function selectFirstCategory(e) {
    setFirstCategoryIsClicked(e.target.innerText);
  }
  function selectSecondCategory(e) {
    setSecondCategoryIsClicked(e.target.innerText);
  }
  function selectSort(e) {
    setSortIsClicked(e.target.innerText);
  }

  function sliderMoveRight(e) {
    setCurrentCarousel(currentCarousel + 1);
  }
  function sliderMoveLeft(e) {
    setCurrentCarousel(currentCarousel - 1);
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
      <ThirdCategoryContainer>
        <ThirdButton
          isHidden={currentCarousel === 0}
          onClick={sliderMoveLeft}
          src={arrowLeft}
          top='60px'
          left='-30px'
        />
        <ThirdCategorySliderContainer>
          <SliderUl currentCarousel={currentCarousel}>
            {skillArr.map((src, i) => (
              <>
                <SidlerLi>
                  <SkillImgContainer>
                    <SkillImg key={i} src={src} alt='자바스크립트' />
                  </SkillImgContainer>
                  <SkillTitle>Javascript</SkillTitle>
                </SidlerLi>
              </>
            ))}
          </SliderUl>
        </ThirdCategorySliderContainer>
        <ThirdButton
          isHidden={currentCarousel === Math.floor(skillArr.length / 8)}
          onClick={sliderMoveRight}
          src={arrowRight}
          top='60px'
          right='-30px'
        />
      </ThirdCategoryContainer>
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

const ThirdButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  width: 60px;
  height: 60px;

  ${({ src, top, left, right, isHidden }) => css`
    ${isHidden
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
    background-image: url(${src});
    top: ${top};
    ${left
      ? css`
          left: ${left};
        `
      : css`
          right: ${right};
        `}
  `}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 12px rgba(33, 33, 33, 0.08);
`;

const SkillTitle = styled.h5`
  width: 109px;

  text-align: center;
  font-weight: 400;
  font-size: 1.125rem;
  letter-spacing: -0.05em;
  color: #b4b4b4;
  opacity: 0.8;

  margin-top: 17px;

  /* 선택 되었을때 */
  /* color: #ffffff; */
`;

const SkillImg = styled.img`
  width: 43px;
  height: 43px;
`;

const SkillImgContainer = styled.div`
  width: 90px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #1f2026;
  border-radius: 64px;

  /* 선택되었을때 */
  /* background-color: #2a2a2a; */
`;

const SidlerLi = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: 47px;

  &:hover {
    transform: translateY(-13px);

    & > div {
      background-color: #2a2a2a;
    }

    & > h5 {
      color: #ffffff;
    }
  }
`;

const SliderUl = styled.ul`
  /* 예시 기술 이미지 10개 */
  width: calc((109px + 47px) * 10);
  margin-top: auto;

  transition: all 0.8s ease-in-out;
  ${({ currentCarousel }) => css`
    transform: translateX(-${80 * currentCarousel}%);
  `}

  display: flex;
`;

const ThirdCategorySliderContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: flex-end;

  width: 1200px;
  height: 165px;
`;

const ThirdCategoryContainer = styled.div`
  position: relative;
  margin-top: 13px;
`;

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

const SecondCategoryButton = styled.h4`
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

const FirstCategoryButton = styled.h3`
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
