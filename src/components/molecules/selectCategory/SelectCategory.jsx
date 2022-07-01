import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';
import palette from '../../../style/palette';

import LectureCard from '../../UI/atoms/lectureCard/ThreeLectureCard';
import MobileLectureCard from '../../UI/atoms/mobileLectureCard/MobileLectureCard';

import curiousEmoji from '../../../assets/img/emoji_hmm.png';
import arrowRight from '../../../assets/img/arrow_right.svg';
import arrowLeft from '../../../assets/img/arrow_left.svg';
import closeDark from '../../../assets/img/close_dark.svg';

import Sorts from '../../UI/atoms/sorts/Sorts';
import { axiosInstance } from '../../../api';
import { useQuery } from 'react-query';

const SelectCategory = () => {
  const [firstCategoryIsClicked, setFirstCategoryIsClicked] =
    useState('프론트엔드');
  const [secondCategoryIsClicked, setSecondCategoryIsClicked] =
    useState('전체');
  const [thirdCategoryIsClicked, setThirdCategoryIsClicked] = useState([]);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  let mobileSecondSlider = useRef({
    startX: 0,
    moveX: 0,
    endX: 0,
    lastElementLocation: 0,
    isFirstTouch: false,
  });
  let mobileThirdSlider = useRef({
    startX: 0,
    moveX: 0,
    endX: 0,
    lastElementLocation: 0,
    isFirstTouch: false,
  });
  let isThirdSliderMoved = false;

  function selectFirstCategory(e) {
    setFirstCategoryIsClicked(e.target.innerText);
  }
  function selectSecondCategory(e) {
    setSecondCategoryIsClicked(e.target.innerText);
  }
  function selectThirdCategory(e) {
    e.preventDefault();
    if (isThirdSliderMoved) {
      isThirdSliderMoved = false;
      return;
    }

    const dataSetId = e.currentTarget.dataset.id;
    const indexOf = thirdCategoryIsClicked.indexOf(dataSetId);
    let res = [];
    if (indexOf !== -1) {
      res = [
        ...thirdCategoryIsClicked.slice(0, indexOf),
        ...thirdCategoryIsClicked.slice(indexOf + 1),
      ];
    } else {
      res = [...thirdCategoryIsClicked, dataSetId];
    }
    setThirdCategoryIsClicked(res);
  }
  function unselectThirdCategory(e) {
    const datasetName = e.target.dataset.name;
    const indexOf = thirdCategoryIsClicked.indexOf(datasetName);

    setThirdCategoryIsClicked([
      ...thirdCategoryIsClicked.slice(0, indexOf),
      ...thirdCategoryIsClicked.slice(indexOf + 1),
    ]);
  }

  function sliderMoveRight(e) {
    setCurrentCarousel(currentCarousel + 1);
  }
  function sliderMoveLeft(e) {
    setCurrentCarousel(currentCarousel - 1);
  }

  function touchStartSecondSlider(e) {
    e.stopPropagation();
    mobileSecondSlider.current.startX = e.changedTouches[0].clientX;
    if (!mobileSecondSlider.current.isFirstTouch) {
      mobileSecondSlider.current.lastElementLocation =
        e.currentTarget.lastElementChild.getBoundingClientRect().right;
    }
    mobileSecondSlider.current.isFirstTouch = true;
  }
  function touchMoveSecondSlider(e) {
    e.stopPropagation();
    mobileSecondSlider.current.moveX = -(
      mobileSecondSlider.current.startX - e.changedTouches[0].clientX
    );

    e.currentTarget.style.transform = `translateX(${
      mobileSecondSlider.current.endX + mobileSecondSlider.current.moveX
    }px)`;
  }
  function touchEndSecondSlider(e) {
    e.stopPropagation();
    let responsiveWidth = (340 / 360) * window.innerWidth;
    mobileSecondSlider.current.endX += -(
      mobileSecondSlider.current.startX - e.changedTouches[0].clientX
    );

    if (
      responsiveWidth - mobileSecondSlider.current.lastElementLocation >
      mobileSecondSlider.current.endX
    ) {
      mobileSecondSlider.current.endX =
        responsiveWidth - mobileSecondSlider.current.lastElementLocation;
      e.currentTarget.style.transform = `translateX(${mobileSecondSlider.current.endX}px)`;
    }

    if (mobileSecondSlider.current.endX > 0) {
      mobileSecondSlider.current.endX = 0;
      e.currentTarget.style.transform = `translateX(${mobileSecondSlider.current.endX}px)`;
    }
  }

  function touchStartThirdSlider(e) {
    isThirdSliderMoved = false;
    mobileThirdSlider.current.startX = e.changedTouches[0].clientX;
    if (!mobileThirdSlider.current.isFirstTouch) {
      mobileThirdSlider.current.lastElementLocation =
        e.currentTarget.lastElementChild.getBoundingClientRect().right;
    }

    mobileThirdSlider.current.isFirstTouch = true;
  }
  function touchMoveThirdSlider(e) {
    isThirdSliderMoved = true;
    mobileThirdSlider.current.moveX = -(
      mobileThirdSlider.current.startX - e.changedTouches[0].clientX
    );

    e.currentTarget.style.transform = `translateX(${
      mobileThirdSlider.current.endX + mobileThirdSlider.current.moveX
    }px)`;
  }
  function touchEndThirdSlider(e) {
    let responsiveWidth = (340 / 360) * window.innerWidth;
    mobileThirdSlider.current.endX += -(
      mobileThirdSlider.current.startX - e.changedTouches[0].clientX
    );

    if (
      responsiveWidth - mobileThirdSlider.current.lastElementLocation >
      mobileThirdSlider.current.endX
    ) {
      mobileThirdSlider.current.endX =
        responsiveWidth - mobileThirdSlider.current.lastElementLocation;
      e.currentTarget.style.transform = `translateX(${mobileThirdSlider.current.endX}px)`;
    }

    if (mobileThirdSlider.current.endX > 0) {
      mobileThirdSlider.current.endX = 0;
      e.currentTarget.style.transform = `translateX(${mobileThirdSlider.current.endX}px)`;
    }
  }

  const { data: categoryData, isLoading: isCategoryDataLoading } = useQuery(
    ['category', 1],
    async () => {
      const firstCategory = await axiosInstance.get('/category?depth=1');
      const secondCategory = await axiosInstance.get(
        '/category?depth=2&parentId=1',
      );
      const thirdCategory = await axiosInstance.get(
        `/category?depth=3&parentId=${secondCategory.data[0].id}`,
      );

      return [firstCategory.data, secondCategory.data, thirdCategory.data];
    },
  );

  return (
    <Container>
      <Title>
        리뷰가 궁금한 강의 살펴보기
        <TitleEmoji src={curiousEmoji} alt='궁금한 이모티콘' />
      </Title>
      {!isCategoryDataLoading && (
        <>
          <FirstCategoryContainer>
            {categoryData[0].map(({ id, name }) => (
              <FirstCategoryButton
                key={id + name}
                firstCategoryIsClicked={firstCategoryIsClicked === name}
                onClick={selectFirstCategory}>
                {name}
              </FirstCategoryButton>
            ))}
          </FirstCategoryContainer>
          <SecondCategoryContainer>
            <SecondCategorySlider
              onTouchStart={touchStartSecondSlider}
              onTouchMove={touchMoveSecondSlider}
              onTouchEnd={touchEndSecondSlider}>
              {categoryData[1].map(({ id, name }) => (
                <SecondCategoryButton
                  key={id + name}
                  secondCategoryIsClicked={secondCategoryIsClicked === name}
                  onClick={selectSecondCategory}>
                  {name}
                </SecondCategoryButton>
              ))}
            </SecondCategorySlider>
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
              <SliderUl
                onTouchStart={touchStartThirdSlider}
                onTouchMove={touchMoveThirdSlider}
                onTouchEnd={touchEndThirdSlider}
                length={categoryData[2].length}
                currentCarousel={currentCarousel}>
                {categoryData[2].map(({ categoryImgUrl, name, id }) => (
                  <SidlerLi
                    key={id + name}
                    onClick={selectThirdCategory}
                    onTouchEnd={selectThirdCategory}
                    thirdCategoryIsClicked={thirdCategoryIsClicked.includes(
                      `${name}`,
                    )}
                    data-id={name}>
                    <SkillImgContainer>
                      <SkillImg src={categoryImgUrl} alt={name} />
                    </SkillImgContainer>
                    <SkillTitle>{name}</SkillTitle>
                  </SidlerLi>
                ))}
              </SliderUl>
            </ThirdCategorySliderContainer>
            <ThirdButton
              length={categoryData[2].length}
              currentCarousel={currentCarousel}
              onClick={sliderMoveRight}
              src={arrowRight}
              bottom='2.6042vw'
              right='-1.5625vw'
              right1120='-2.6786vw'
            />
          </ThirdCategoryContainer>
        </>
      )}

      {/* 여기까지 */}

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
      <SelectSorts />
      <PcMobileLectureCard>
        {/* <PcLectureCardsContainer>
          <PcLectureCardLi>
            <CategoryLectureCard category='javascript' three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
          <PcLectureCardLi>
            <CategoryLectureCard three />
          </PcLectureCardLi>
        </PcLectureCardsContainer>
        <MobileLectureCardContainer>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
          <MobileLectureCardLi>
            <MobileLectureCard />
          </MobileLectureCardLi>
        </MobileLectureCardContainer>*/}
      </PcMobileLectureCard>
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
        <TabletMobilePagination>강의 전체 보기 ↓</TabletMobilePagination>
      </Pagination>
    </Container>
  );
};

const SelectSorts = styled(Sorts)`
  margin-top: 60px;
  margin-left: auto;

  @media ${responsive.mobile} {
    margin-top: 32px;
  }
`;

const PcMobileLectureCard = styled.div``;

const MobileLectureCardLi = styled.li`
  all: unset;
  display: block;

  padding: 22px 0px;
  border-bottom: 1px solid #2a2a2a;
`;

const MobileLectureCardContainer = styled.ul`
  display: none;

  @media ${responsive.mobile} {
    display: block;
    margin-top: 16px;

    & > li:last-of-type {
      padding-bottom: 0;
      border: none;
    }

    & > li:first-of-type {
      padding-top: 0;
    }
  }
`;

const SecondCategorySlider = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${responsive.mobile} {
    flex-wrap: nowrap;

    width: 1000px;
  }
`;

const TabletMobilePagination = styled.div`
  display: none;

  @media ${responsive.tablet} {
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
  }

  @media ${responsive.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 88.6111vw;
    height: 44px;

    background-color: #1f2026;
    border-radius: 3px;

    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
  }
`;

const PcPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${responsive.tablet} {
    display: none;
  }

  @media ${responsive.mobile} {
    display: none;
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

  @media ${responsive.mobile} {
    margin-top: 32px;
  }
`;

const PcLectureCardLi = styled.li`
  all: unset;
`;

const CategoryLectureCard = styled(LectureCard)`
  margin-top: 32px;
`;

const PcLectureCardsContainer = styled.ul`
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

  @media ${responsive.mobile} {
    display: none;
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

  background-color: #1f2026;
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
    thirdCategoryIsClicked
      ? css`
          transform: translateY(-13px);

          & > div {
            background-color: #2a2a2a;
          }

          & > h5 {
            color: #ffffff;
          }
        `
      : css`
          transform: translateY(0px);

          & > div {
            background-color: #1f2026;
          }

          & > h5 {
            color: #b4b4b4;
          }
        `}

  @media (hover: hover) {
    &:hover {
      transform: translateY(-13px);

      & > div {
        background-color: #2a2a2a;
      }

      & > h5 {
        color: #ffffff;
      }
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
    transition: none;
    width: 5000px;
  }
`;

const ThirdCategorySliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: flex-end;
  overflow: hidden;

  width: 62.5vw;
  height: 10.4167vw;

  @media (max-width: 1120px) {
    height: 180px;
  }

  @media ${responsive.tablet} {
    width: 93.75vw;
    height: 130px;
  }

  @media ${responsive.mobile} {
    width: 88.8889vw;
    height: 120px;
  }
`;

const ThirdCategoryContainer = styled.div`
  position: relative;
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

    padding: 2.2222vw 4.4444vw;

    font-size: 0.875rem;

    margin-right: 8px;
    margin-top: 0px;
  }
`;

const SecondCategoryContainer = styled.div`
  margin-top: 19px;
  overflow: hidden;

  @media ${responsive.tablet} {
    margin-top: 15px;
  }

  @media ${responsive.mobile} {
    flex-wrap: nowrap;

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

  margin-top: 120px;
`;

export default SelectCategory;
