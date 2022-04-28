import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';
import palette from '../../../style/palette';

import LectureCard from '../../UI/atoms/lectureCard/LectureCard';

import curiousEmoji from '../../../assets/img/emoji_hmm.png';
import categoryDown from '../../../assets/img/categoryDown.svg';
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
  let mobileSecondSlider = {
    startX: 0,
    moveX: 0,
    endX: 0,
    lastElementLocation: 0,
    isFirstTouch: false,
  };

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

  function touchStartSecondSlider(e) {
    mobileSecondSlider.startX = e.changedTouches[0].clientX;
    if (!mobileSecondSlider.isFirstTouch) {
      mobileSecondSlider.lastElementLocation =
        e.currentTarget.lastElementChild.getBoundingClientRect().right;
    }
    mobileSecondSlider.isFirstTouch = true;
  }
  function touchMoveSecondSlider(e) {
    mobileSecondSlider.moveX = -(
      mobileSecondSlider.startX - e.changedTouches[0].clientX
    );

    e.currentTarget.style.transform = `translateX(${
      mobileSecondSlider.endX + mobileSecondSlider.moveX
    }px)`;
  }
  function touchEndSecondSlider(e) {
    let responsiveWidth = (340 / 360) * window.innerWidth;
    mobileSecondSlider.endX += -(
      mobileSecondSlider.startX - e.changedTouches[0].clientX
    );

    if (
      responsiveWidth - mobileSecondSlider.lastElementLocation >
      mobileSecondSlider.endX
    ) {
      mobileSecondSlider.endX =
        responsiveWidth - mobileSecondSlider.lastElementLocation;
      e.currentTarget.style.transform = `translateX(${mobileSecondSlider.endX}px)`;
    }

    if (mobileSecondSlider.endX > 0) {
      mobileSecondSlider.endX = 0;
      e.currentTarget.style.transform = `translateX(${mobileSecondSlider.endX}px)`;
    }
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
      <SecondCategoryContainer
        onTouchStart={touchStartSecondSlider}
        onTouchMove={touchMoveSecondSlider}
        onTouchEnd={touchEndSecondSlider}>
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
          <SliderUl length={skillArr.length} currentCarousel={currentCarousel}>
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
        <SortPcTablet>
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
        </SortPcTablet>
        <SortMobile>
          <CurrentSort>백엔드</CurrentSort>
          <DownArrow src={categoryDown} alt='펼쳐 보기' />
        </SortMobile>
      </SortContainer>
      <LectureCardsContainer>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
        <LectureCardLi>
          <CategoryLectureCard />
        </LectureCardLi>
      </LectureCardsContainer>
      <Pagination>
        <PcPagination>
          <Prev>← PREV</Prev>
          <PaginationNumberContainer>
            <PaginationNumber>1</PaginationNumber>
            <PaginationNumber>2</PaginationNumber>
            <PaginationNumber>3</PaginationNumber>
            <PaginationNumber>4</PaginationNumber>
            <PaginationNumber>5</PaginationNumber>
          </PaginationNumberContainer>
          <Next>Next →</Next>
        </PcPagination>
        <TabletPagination>강의 전체 보기↓</TabletPagination>
      </Pagination>
    </Container>
  );
};

const TabletPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 93.75vw;
  height: 44px;

  background-color: #1f2026;
  border-radius: 3px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const PcPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${responsive.tablet} {
    display: none;
  }

  @media ${responsive.mobile} {
  }
`;

const PaginationNumberContainer = styled.div`
  display: flex;

  & > a:not(:last-of-type) {
    margin-right: 12px;
  }
`;

const Next = styled.a`
  cursor: pointer;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;

  margin-left: 20px;
`;

const PaginationNumber = styled.a`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  font-weight: 500;
  font-size: 0.75rem;
  color: #ffffff;

  &:hover {
    border-radius: 50%;
    background-color: #1f2026;
    color: #e72847;
  }
`;

const Prev = styled.a`
  cursor: pointer;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;

  margin-right: 20px;
`;

const Pagination = styled.div`
  margin-top: 90px;

  @media ${responsive.tablet} {
    margin-top: 32px;
  }
`;

const LectureCardLi = styled.li`
  all: unset;
`;

const CategoryLectureCard = styled(LectureCard)`
  margin-top: 32px;
`;

const LectureCardsContainer = styled.ul`
  all: unset;
  margin-top: 1px;

  & > li:not(:nth-of-type(3n)) {
    margin-right: 1.5104vw;
  }

  @media (max-width: 1120px) {
    & > li:nth-of-type(2n) {
      margin-right: 0;
    }

    & > li:not(:nth-of-type(2n)) {
      margin-right: 3.3036vw;
    }
  }

  @media ${responsive.tablet} {
    & > li:not(:nth-of-type(2n)) {
      margin-right: 0;
    }

    & > li:not(:nth-of-type(3n)) {
      margin-right: 1.3021vw;
    }
  }
  @media (max-width: 666px) {
    & > li:nth-of-type(2n) {
      margin-right: 0;
    }

    & > li:not(:nth-of-type(2n)) {
      margin-right: 3.3036vw;
    }
  }
`;

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
  font-size: 0.875rem;
  color: #b4b4b4;

  margin-right: 8px;

  @media ${responsive.tablet} {
    font-size: 0.625rem;
  }

  @media ${responsive.mobile} {
    font-size: 0.625rem;
  }
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

  @media ${responsive.mobile} {
    margin-top: 24px;
  }
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

  @media ${responsive.mobile} {
    display: none;
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
    width: 9.5536vw;
    font-size: 1.125rem;
  }

  @media ${responsive.tablet} {
    width: 8.5938vw;
    font-size: 1.5625vw;
  }

  @media ${responsive.mobile} {
    width: 18.3333vw;
    font-size: 0.75rem;
  }
`;

const SkillImg = styled.img`
  width: 2.2396vw;
  height: 2.2396vw;

  @media (max-width: 1120px) {
    width: 3.8393vw;
    height: 3.8393vw;
  }

  @media ${responsive.tablet} {
    width: 3.9844vw;
    height: 3.9844vw;
  }

  @media ${responsive.mobile} {
    width: 7vw;
    height: 7vw;
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

  @media ${responsive.tablet} {
    width: 8.3333vw;
    height: 8.3333vw;
  }

  @media ${responsive.mobile} {
    width: 14.4444vw;
    height: 14.4444vw;
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

  @media ${responsive.tablet} {
    width: 8.5938vw;
    margin-right: 3.6458vw;
  }

  @media ${responsive.mobile} {
    width: 18.3333vw;
    margin-right: 5.5556vw;
  }
`;

const SliderUl = styled.ul`
  /* 예시 기술 이미지 10개 */
  display: flex;

  ${({ length }) =>
    css`
      width: calc((5.6771vw + 2.4479vw) * ${Number(length)});
    `}
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

  @media ${responsive.tablet} {
    ${({ length }) => css`
      width: calc((8.5938vw + 3.6458vw) * ${Number(length)});
    `}

    ${({ currentCarousel }) => css`
      transform: translateX(-${80 * currentCarousel}%);
    `}
  }

  @media ${responsive.mobile} {
    width: auto;
  }
`;

const ThirdCategorySliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: flex-end;

  width: 62.5vw;
  height: 130px;

  @media (max-width: 1120px) {
    height: 180px;
  }

  @media ${responsive.tablet} {
    width: 93.75vw;
    height: 130px;
  }

  @media ${responsive.mobile} {
    overflow: visible;
    width: auto;
  }
`;

const ThirdCategoryContainer = styled.div`
  position: relative;
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

const CurrentSort = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const DownArrow = styled.img`
  margin-left: 4px;
`;

const SortMobile = styled.div`
  display: none;

  @media ${responsive.mobile} {
    cursor: pointer;

    display: flex;
    align-items: center;

    background-color: #1f2026;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;

    padding: 8px 12px;
  }
`;

const SortPcTablet = styled.div`
  @media ${responsive.mobile} {
    display: none;
  }
`;

const SortContainer = styled.div`
  display: block;
  margin-top: 60px;
  margin-left: auto;

  @media ${responsive.mobile} {
    margin-top: 32px;
  }
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
  font-size: 1rem;

  ${({ secondCategoryIsClicked }) =>
    secondCategoryIsClicked &&
    css`
      background-color: #ffffff;
      color: #e72847;
      font-weight: 700;

      border: none;
      opacity: unset;

      transition: all 0.3s linear;
    `};

  @media ${responsive.tablet} {
    padding: 1.0417vw 2.6042vw;
    font-size: 0.875rem;
    margin-top: 10px;
  }

  @media ${responsive.mobile} {
    display: flex;
    flex-direction: row;

    padding: 2.2222vw 4.4444vw;

    font-size: 0.875rem;

    margin-right: 8px;
    margin-top: 0px;
  }
`;

const SecondCategoryContainer = styled.div`
  display: flex;

  margin-top: 19px;

  @media ${responsive.tablet} {
    margin-top: 15px;
  }

  @media ${responsive.mobile} {
    flex-wrap: nowrap;

    width: 1000px;
    margin-top: 16px;
  }
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
      color: #e72847;

      transition: all 0.3s linear;
    `};

  @media ${responsive.tablet} {
    font-size: 1.75rem;
  }

  @media ${responsive.mobile} {
  }
`;

const FirstCategoryContainer = styled.div`
  margin-top: 16px;

  @media ${responsive.mobile} {
    margin-top: 12px;
  }
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

  @media ${responsive.mobile} {
    font-size: 0.875rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin-top: 120px;

  /* 디버깅 */
  border: 1px solid tomato;
  /* background-color: yellowgreen; */
`;

export default SelectCategory;
