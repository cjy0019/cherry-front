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

  function CarouselMoveRight(e) {
    setCurrentCarousel(currentCarousel + 1);
  }
  function CarouselMoveLeft(e) {
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
          <CategorySpan>프론트엔드</CategorySpan>
          <CategorySpan>백엔드</CategorySpan>
          <MobileCategory>
            백엔드 <DownArrow src={categoryDown} alt='펼쳐 보기' />
          </MobileCategory>
        </Category>
      </Header>
      <CarrouselButton onClick={CarouselMoveLeft} />
      <CarouselContainer>
        <CardsUl cardListRef={cardListRef} currentCarousel={currentCarousel}>
          <li>
            <HotSixCard src={rank1} alt='1위 강의' />
          </li>
          <li>
            <HotSixCard src={rank2} alt='2위 강의' />
          </li>
          <li>
            <HotSixCard src={rank3} alt='3위 강의' />
          </li>
          <li>
            <HotSixCard src={rank4} alt='4위 강의' />
          </li>
          <li>
            <HotSixCard src={rank5} alt='5위 강의' />
          </li>
          <li>
            <HotSixCard src={rank6} alt='6위 강의' />
          </li>
        </CardsUl>
      </CarouselContainer>
      <CarrouselButton onClick={CarouselMoveRight} />
    </Container>
  );
};

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

  @media ${responsive.mobile} {
    top: 56.4061vw;
  }
`;

const CardsUl = styled.ul`
  all: unset;
  & > li {
    all: unset;
  }

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

const HotSixCard = styled(LectureCard)`
  margin-right: 1.6146vw;

  @media (max-width: 1121px) {
    margin-right: 1.7857vw;
  }
  @media ${responsive.tablet} {
    margin-right: 12px;
  }

  @media ${responsive.mobile} {
    margin-right: 12px;
  }
`;

const CategorySpan = styled.span`
  color: ${palette.textWhite};
  font-size: 0.875rem;
  font-weight: 400;

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
