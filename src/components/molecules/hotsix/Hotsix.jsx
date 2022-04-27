import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';
import LectureCard from '../../UI/atoms/lectureCard/LectureCard';

import emojiFire from '../../../assets/img/emoji_fire.png';
import categoryDown from '../../../assets/img/categoryDown.svg';
import arrowLeft from '../../../assets/img/arrow_left.svg';
import arrowRight from '../../../assets/img/arrow_right.svg';
import rank1 from '../../../assets/img/rank01.svg';
import rank2 from '../../../assets/img/rank02.svg';
import rank3 from '../../../assets/img/rank03.svg';
import rank4 from '../../../assets/img/rank04.svg';
import rank5 from '../../../assets/img/rank05.svg';
import rank6 from '../../../assets/img/rank06.svg';

const Hotsix = () => {
  // 프론트엔드, 백엔드 선택후 CSS 변경 구현
  const [isCategoryActive, setIsCategoryActive] = useState('프론트엔드');
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const cardListRef = useRef(null);
  let isBack1121 = false;

  function selectCategory(e) {
    setIsCategoryActive(e.target.innerText);
  }

  function carouselMoveRight(e) {
    setCurrentCarousel(currentCarousel + 1);
  }
  function carouselMoveLeft(e) {
    setCurrentCarousel(currentCarousel - 1);
  }

  useEffect(() => {
    // 변수 함수를 넣으면 왜 안돼는지 검색
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1121 && window.innerWidth > 768) {
        isBack1121 = true;
        return;
      }

      if (window.innerWidth > 1121 && isBack1121) {
        setCurrentCarousel(1);
        isBack1121 = false;
        return;
      }

      if (window.innerWidth < 769) {
        setCurrentCarousel(0);
        return;
      }
    });

    // return window.removeEventListener('resize', checkViewPort);
  }, []);

  return (
    <Container currentCarousel={currentCarousel}>
      <Header>
        <TitleSection>
          <Title>
            HOT6
            <EmojiFire src={emojiFire} alt='fire' />
          </Title>
        </TitleSection>
        <Category>
          <CategorySpan
            isCategoryActive={isCategoryActive === '프론트엔드'}
            onClick={selectCategory}>
            프론트엔드
          </CategorySpan>
          <CategorySpan
            isCategoryActive={isCategoryActive === '백엔드'}
            onClick={selectCategory}>
            백엔드
          </CategorySpan>
          <MobileCategory>
            백엔드 <DownArrow src={categoryDown} alt='펼쳐 보기' />
          </MobileCategory>
        </Category>
      </Header>
      <CarrouselButton onClick={carouselMoveLeft} />
      <CarouselContainer>
        <CardsUl cardListRef={cardListRef} currentCarousel={currentCarousel}>
          <CardLi>
            <HotSixCard />
            <HoverDark />
            <RankImg src={rank1} alt='1위 강의' />
          </CardLi>
          <CardLi>
            <HotSixCard />
            <HoverDark />
            <RankImg src={rank2} alt='2위 강의' />
          </CardLi>
          <CardLi>
            <HotSixCard />
            <HoverDark />
            <RankImg src={rank3} alt='3위 강의' />
          </CardLi>
          <CardLi>
            <HotSixCard />
            <HoverDark />
            <RankImg src={rank4} alt='4위 강의' />
          </CardLi>
          <CardLi>
            <HotSixCard />
            <HoverDark />
            <RankImg src={rank5} alt='5위 강의' />
          </CardLi>
          <CardLi>
            <HotSixCard />
            <HoverDark />
            <RankImg src={rank6} alt='6위 강의' />
          </CardLi>
        </CardsUl>
      </CarouselContainer>
      <CarrouselButton onClick={carouselMoveRight} />
    </Container>
  );
};

const CardLi = styled.li`
  all: unset;
  cursor: pointer;
  position: relative;

  margin-right: 1.6146vw;

  @media (max-width: 1121px) {
    margin-right: 1.7857vw;
  }

  @media ${responsive.tablet} {
    margin-right: 12px;
  }
  @media (max-width: 666px) {
    margin-right: 2.9985vw;
  }

  @media ${responsive.mobile} {
    margin-right: 12px;
  }
`;

const RankImg = styled.img`
  position: absolute;
  top: 7.5vw;
  right: 0;

  transition: all 0.2s ease-in-out;

  width: 6.7188vw;
  height: 2.1354vw;

  opacity: 0;

  @media (max-width: 1121px) {
    top: 11.1964vw;

    width: 10.03vw;
    height: 3.1878vw;
  }

  @media ${responsive.tablet} {
    width: 10.2875vw;
    height: 3.2694vw;
  }

  @media ${responsive.mobile} {
    top: 30.0833vw;

    width: 26.9489vw;
    height: 8.5633vw;
  }
`;

const HoverDark = styled.div`
  position: absolute;
  top: 0;

  width: 19.74vw;
  height: 10.99vw;

  background-color: #000000;
  opacity: 0;
  border-radius: 8px 8px 0px 0px;

  transition: all 0.2s ease-in-out;

  &:hover {
    & + img {
      opacity: 1;
    }

    opacity: 0.7;
  }

  @media (max-width: 1121px) {
    width: 29.4643vw;
    height: 16.4063vw;
  }
  @media ${responsive.tablet} {
    /* width: 232px;
    height: 129px; */
    width: 30.21vw;
    height: 16.8vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    width: 200.891px;
    height: 111.719px;
  }

  @media ${responsive.mobile} {
    width: 79.1667vw;
    height: 44.1667vw;
  }
`;

const CarrouselButton = styled.button`
  all: unset;
  cursor: pointer;

  position: absolute;
  top: 14.0625vw;
  z-index: 10;

  width: 60px;
  height: 60px;

  @media (max-width: 1121px) {
    top: 20.9933vw;
  }
  @media (max-width: 666px) {
    top: 31.934vw;
  }

  @media ${responsive.mobile} {
    top: 56.4061vw;
  }
`;

const CardsUl = styled.ul`
  all: unset;

  display: flex;

  /* Card 6개 + margin-right 31px 6개 */
  width: calc(19.7396vw * 6 + 1.6146vw * 6);

  transition: all 0.8s ease-in-out;
  ${({ currentCarousel }) => css`
    transform: translateX(-${50 * currentCarousel}%);
  `}

  @media (max-width: 1121px) {
    width: calc(29.4643vw * 6 + 1.7857vw * 5);

    ${({ currentCarousel }) => css`
      /* transform: translateX(-${33.3333 * currentCarousel}%); */
      transform: translateX(-${currentCarousel * 33.333333}%);
    `}
  }

  @media ${responsive.tablet} {
    width: calc(30.2083vw * 6 + 1.5625vw * 6);

    ${({ currentCarousel }) => css`
      transform: translateX(-${50 * currentCarousel}%);
    `}
  }

  @media (max-width: 666px) {
    width: calc(44.9775vw * 6 + 2.9985vw * 6);

    ${({ currentCarousel }) => css`
      /* transform: translateX(-${33.3333 * currentCarousel}%); */
      transform: translateX(-${currentCarousel * 33.333333}%);
    `}
  }

  @media ${responsive.mobile} {
    width: calc(82.5vw * 6);
    ${({ currentCarousel }) => css`
      transform: translateX(-${16.6666 * currentCarousel}%);
    `}
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 62.5vw;
  overflow: hidden;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    overflow: none;
    width: calc(82.5vw * 6);
  }
`;

const DownArrow = styled.img`
  margin-left: 4px;
`;

const MobileCategory = styled.div`
  display: none;

  @media ${responsive.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 72px;
    height: 28px;

    color: ${palette.textWhite};
    font-size: 0.75rem;

    background: ${palette.subNavy};
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;
  }
`;

const HotSixCard = styled(LectureCard)``;

const CategorySpan = styled.span`
  cursor: pointer;

  color: ${palette.textWhite};
  font-size: 0.875rem;
  font-weight: 400;
  opacity: 0.5;

  transition: all 0.2s;

  ${({ isCategoryActive }) =>
    isCategoryActive &&
    css`
      opacity: 1;
    `}

  @media ${responsive.tablet} {
    font-size: 0.875rem;
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  & > span:first-child {
    margin-right: 12px;
  }
`;

const EmojiFire = styled.img`
  width: 26px;
  height: 26px;

  @media ${responsive.tablet} {
    width: 23px;
    height: 23px;
  }

  @media ${responsive.mobile} {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${palette.textWhite};
  font-weight: 600;
  opacity: 0.9;

  @media ${responsive.tablet} {
    font-size: 1.25rem;
  }

  @media ${responsive.mobile} {
    font-size: 1.125rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 28px;
`;

const Container = styled.div`
  margin-top: 120px;
  position: relative;
  /* 캐러셀 이전 버튼 */
  & > button:nth-of-type(1) {
    left: -30px;
    background-image: url(${arrowLeft});
    ${({ currentCarousel }) =>
      currentCarousel === 0
        ? css`
            display: none;
          `
        : ''}
  }

  /* 캐러셀 다음 버튼 */
  & > button:nth-of-type(2) {
    right: -30px;
    background-image: url(${arrowRight});

    ${({ currentCarousel }) =>
      currentCarousel === 1
        ? css`
            display: none;
          `
        : ''}
  }

  @media (max-width: 1121px) {
    & > button:nth-of-type(2) {
      right: -13px;
      display: block;

      ${({ currentCarousel }) =>
        currentCarousel === 2
          ? css`
              display: none;
            `
          : ''}
    }

    & > button:nth-of-type(1) {
      left: -27px;
    }
  }
  @media (max-width: 1121px) {
    & > button:nth-of-type(2) {
      right: -13px;
      display: block;

      ${({ currentCarousel }) =>
        currentCarousel === 2
          ? css`
              display: none;
            `
          : ''}
    }

    & > button:nth-of-type(1) {
      left: -27px;
    }
  }

  @media ${responsive.tablet} {
    & > button:nth-of-type(2) {
      right: -30px;

      ${({ currentCarousel }) =>
        currentCarousel === 1
          ? css`
              display: none;
            `
          : ''}
    }
  }

  @media (max-width: 666px) {
    & > button:nth-of-type(2) {
      display: block;

      ${({ currentCarousel }) =>
        currentCarousel === 2
          ? css`
              display: none;
            `
          : ''}
    }

    & > button:nth-of-type(1) {
      left: -27px;
    }
  }

  @media ${responsive.mobile} {
    & > button:nth-of-type(2) {
      display: block;
      right: 5px;

      ${({ currentCarousel }) =>
        currentCarousel === 5
          ? css`
              display: none;
            `
          : ''}
    }
  }
`;

export default Hotsix;
