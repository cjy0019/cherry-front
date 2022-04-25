import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import curiousEmoji from '../../../assets/img/emoji_hmm.png';
import palette from '../../../style/palette';

import arrowRight from '../../../assets/img/arrow_right.svg';
import arrowLeft from '../../../assets/img/arrow_left.svg';
import closeDark from '../../../assets/img/close_dark.svg';
import javascript from '../../../assets/img/JavaScript.png';

const skillArr = [
  { src: javascript, name: 'Javascript', id: 1 },
  { src: javascript, name: 'Javascript1', id: 2 },
  { src: javascript, name: 'Javascript2', id: 3 },
  { src: javascript, name: 'Javascript3', id: 4 },
  { src: javascript, name: 'Javascript4', id: 5 },
  { src: javascript, name: 'Javascript5', id: 6 },
  { src: javascript, name: 'Javascript6', id: 7 },
  { src: javascript, name: 'Javascript7', id: 8 },
  { src: javascript, name: 'Javascript8', id: 9 },
  { src: javascript, name: 'Javascript9', id: 10 },
];

const SelectCategory = () => {
  const [firstCategoryIsClicked, setFirstCategoryIsClicked] =
    useState('프론트엔드');

  const [secondCategoryIsClicked, setSecondCategoryIsClicked] =
    useState('전체');

  const [thirdCategoryIsClicked, setThirdCategoryIsClicked] = useState([
    'Javascript3',
    'Javascript1',
    'Javascript5',
  ]);

  const [sortIsClicked, setSortIsClicked] = useState('최신순');
  const [currentCarousel, setCurrentCarousel] = useState(0);

  function selectFirstCategory(e) {
    setFirstCategoryIsClicked(e.target.innerText);
  }
  function selectSecondCategory(e) {
    setSecondCategoryIsClicked(e.target.innerText);
  }
  function selectThirdCategory(e) {
    const dataSetId = e.currentTarget.dataset.id;
    const indexOf = thirdCategoryIsClicked.indexOf(dataSetId);
    if (indexOf !== -1) {
      setThirdCategoryIsClicked([
        ...thirdCategoryIsClicked.slice(0, indexOf),
        ...thirdCategoryIsClicked.slice(indexOf + 1),
      ]);
    } else {
      setThirdCategoryIsClicked([...thirdCategoryIsClicked, dataSetId]);
    }
  }
  function unselectThirdCategory(e) {
    const datasetName = e.target.dataset.name;
    const indexOf = thirdCategoryIsClicked.indexOf(datasetName);

    setThirdCategoryIsClicked([
      ...thirdCategoryIsClicked.slice(0, indexOf),
      ...thirdCategoryIsClicked.slice(indexOf + 1),
    ]);
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
          bottom='2.6042vw'
          left='-1.5625vw'
          left1120='-2.6786vw'
        />
        <ThirdCategorySliderContainer>
          <SliderUl currentCarousel={currentCarousel}>
            {skillArr.map(({ src, name, id }) => (
              <SidlerLi
                onClickCapture={selectThirdCategory}
                thirdCategoryIsClicked={thirdCategoryIsClicked.includes(
                  `${name}`,
                )}
                data-id={name}
                key={id}>
                <SkillImgContainer>
                  <SkillImg src={src} alt='자바스크립트' />
                </SkillImgContainer>
                <SkillTitle>{name}</SkillTitle>
              </SidlerLi>
            ))}
          </SliderUl>
        </ThirdCategorySliderContainer>
        <ThirdButton
          length={skillArr.length}
          currentCarousel={currentCarousel}
          onClick={sliderMoveRight}
          src={arrowRight}
          bottom='2.6042vw'
          right='-1.5625vw'
          right1120='-2.6786vw'
        />
      </ThirdCategoryContainer>
      <ThirdCategoryResultContainer>
        {thirdCategoryIsClicked.map((name, i) => (
          <CategoryResult key={i}>
            <CategoryName>{name}</CategoryName>
            <CloseCategoryButton
              onClick={unselectThirdCategory}
              data-name={name}
            />
          </CategoryResult>
        ))}
      </ThirdCategoryResultContainer>
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

const CloseCategoryButton = styled.button`
  all: unset;
  cursor: pointer;

  width: 18px;
  height: 18px;

  background-image: url(${closeDark});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CategoryName = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #b4b4b4;

  margin-right: 8px;
`;

const CategoryResult = styled.li`
  display: inline-flex;
  align-items: center;

  padding: 5px 6px;
  margin-top: 5px;
  margin-right: 8px;

  background-color: #2a2a2a;
  border-radius: 3px;
`;

const ThirdCategoryResultContainer = styled.ul`
  margin-top: 35px;
`;

const ThirdButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  width: 3.125vw;
  height: 3.125vw;

  ${({ src, bottom, left, right, currentCarousel, isHidden, length }) => {
    let isDisplayHidden = false;

    if (length % 8 !== 0) {
      if (currentCarousel === Math.floor(length / 8)) {
        isDisplayHidden = true;
      } else {
        isDisplayHidden = false;
      }
    } else {
      if (currentCarousel === length / 8 - 1) {
        isDisplayHidden = true;
      } else {
        isDisplayHidden = false;
      }
    }

    return css`
      ${isDisplayHidden
        ? css`
            display: none;
          `
        : css`
            display: block;
          `}
      ${isHidden &&
      css`
        display: none;
      `}
      background-image: url(${src});
      bottom: ${bottom};
      ${left
        ? css`
            left: ${left};
          `
        : css`
            right: ${right};
          `}
    `;
  }}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 12px rgba(33, 33, 33, 0.08);

  @media (max-width: 1120px) {
    display: block;

    width: 5.3571vw;
    height: 3.2143vw;

    bottom: 5.3571vw;
    ${({ right1120, left1120 }) =>
      left1120
        ? css`
            left: ${left1120};
          `
        : css`
            right: ${right1120};
          `}

    ${({ currentCarousel, length }) => {
      let isDisplayHidden = false;
      if (length % 5 !== 0) {
        if (currentCarousel === Math.floor(length / 5)) {
          isDisplayHidden = true;
        } else {
          isDisplayHidden = false;
        }
      } else {
        if (currentCarousel === length / 5 - 1) {
          isDisplayHidden = true;
        } else {
          isDisplayHidden = false;
        }
      }

      return css`
        ${isDisplayHidden
          ? css`
              display: none;
            `
          : css`
              display: block;
            `}
      `;
    }}
    ${({ isHidden }) =>
      isHidden &&
      css`
        display: none;
      `};
  }
`;

const SkillTitle = styled.h5`
  width: 5.6771vw;

  word-wrap: break-word;

  text-align: center;
  font-weight: 400;
  font-size: 1.125rem;
  letter-spacing: -0.05em;
  color: #b4b4b4;
  opacity: 0.8;

  margin-top: 17px;

  @media (max-width: 1440px) {
    font-size: 0.875rem;
  }
  @media (max-width: 1120px) {
    font-size: 1.125rem;
  }
`;

const SkillImg = styled.img`
  width: 2.2396vw;
  height: 2.2396vw;

  @media (max-width: 1120px) {
    width: 3.8393vw;
    height: 3.8393vw;
  }
`;

const SkillImgContainer = styled.div`
  width: 4.6875vw;
  height: 4.6875vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #1f2026;
  border-radius: 64px;

  @media (max-width: 1120px) {
    width: 8.0357vw;
    height: 8.0357vw;
  }
`;

const SidlerLi = styled.li`
  cursor: pointer;
  width: 5.7292vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 2.4479vw;
  transition: all 0.2s ease-in-out;

  ${({ thirdCategoryIsClicked }) =>
    thirdCategoryIsClicked &&
    css`
      transform: translateY(-13px);

      & > div {
        background-color: #2a2a2a;
      }

      & > h5 {
        color: #ffffff;
      }
    `}

  &:hover {
    transform: translateY(-13px);

    & > div {
      background-color: #2a2a2a;
    }

    & > h5 {
      color: #ffffff;
    }
  }

  @media (max-width: 1120px) {
    width: 9.8214vw;
    margin-right: 3.2143vw;
  }
`;

const SliderUl = styled.ul`
  /* 예시 기술 이미지 10개 */
  display: flex;

  width: calc((5.6771vw + 2.4479vw) * 10);
  margin-top: auto;

  transition: all 0.8s ease-in-out;
  ${({ currentCarousel }) => css`
    transform: translateX(-${80 * currentCarousel}%);
  `}

  @media (max-width: 1120px) {
    width: calc((9.7321vw + 3.2143vw) * 10);

    ${({ currentCarousel }) => css`
      transform: translateX(-${50 * currentCarousel}%);
    `}
  }
`;

const ThirdCategorySliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: flex-end;

  width: 62.5vw;
  height: 160px;
`;

const ThirdCategoryContainer = styled.div`
  position: relative;
  /* margin-top: 13px; */
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
  margin-top: 60px;
  margin-left: auto;
`;

const SecondCategoryButton = styled.h4`
  all: unset;
  cursor: pointer;

  padding: 0.625vw 1.4583vw;
  margin-right: 17px;
  margin-top: 12px;

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
  margin-top: 19px;
  display: flex;
  flex-wrap: wrap;
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
