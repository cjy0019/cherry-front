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
import MobileSort from '../mobileSort/MobileSort';

import { useQuery } from 'react-query';
import { axiosInstance } from '../../../api';

const Hotsix = () => {
  const [isCategoryActive, setIsCategoryActive] = useState('프론트엔드');
  const { isLoading: IsInitDataLoading, data: lecturesData } = useQuery(
    ['hotSixLectures', isCategoryActive],
    async () => {
      let categoryNumber = '1';

      if (isCategoryActive === '프론트엔드') {
        categoryNumber = '1';
      } else if (isCategoryActive === '백엔드') {
        categoryNumber = '2';
      }

      return await axiosInstance.get(
        `/lectures?sort=reviewCount&page=1&size=6&depth=1&categoryId=${categoryNumber}`,
      );
    },
    {
      keepPreviousData: true,
    },
  );
  // ranks 이미지들을 불러온다면 ,useQueyr 캐시에서 불러오면된다.(나중에 지워주기)
  const rankSrcs = [rank1, rank2, rank3, rank4, rank5, rank6];

  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [sortIsClicked, setSortIsClicked] = useState(false);
  const [hotSixCurrentSort, setHotSixCurrentSort] = useState('최신순');

  const cardListRef = useRef(null);

  let isBack1121 = false;
  let startClientX = 0;
  let moveClientX = 0;
  let endClientX = 0;

  function checkSort(e) {
    const currentName = e.currentTarget.dataset.id;

    setSortIsClicked(false);
    setHotSixCurrentSort(currentName);
  }

  function openMobileSort(e) {
    setSortIsClicked(!sortIsClicked);
  }

  function selectCategory(e) {
    setIsCategoryActive(e.target.innerText);
  }

  function carouselMoveRight(e) {
    setCurrentCarousel(currentCarousel + 1);
  }
  function carouselMoveLeft(e) {
    setCurrentCarousel(currentCarousel - 1);
  }

  function touchStartCarousel(e) {
    startClientX = e.changedTouches[0].clientX;
  }
  function touchMoveCarousel(e) {
    moveClientX = -(startClientX - e.changedTouches[0].clientX);
    e.currentTarget.style.transform = `translateX(${
      endClientX + moveClientX
    }px)`;
  }
  function touchEndCarousel(e) {
    endClientX += -(startClientX - e.changedTouches[0].clientX);

    let responsiveWidth = (-1450 / 360) * window.innerWidth;
    if (responsiveWidth > endClientX) {
      endClientX = responsiveWidth;
      e.currentTarget.style.transform = `translateX(${endClientX}px)`;
    }
    if (endClientX > 0) {
      endClientX = 0;
      e.currentTarget.style.transform = `translateX(${endClientX}px)`;
    }
  }

  const handleResizeForHotSix = () => {
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
  };

  useEffect(() => {
    // 변수 함수를 넣으면 왜 안돼는지 검색
    window.addEventListener('resize', handleResizeForHotSix);

    return window.removeEventListener('resize', handleResizeForHotSix);
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
            data-id='1'
            isCategoryActive={isCategoryActive === '프론트엔드'}
            onClick={selectCategory}>
            프론트엔드
          </CategorySpan>
          <CategorySpan
            data-id='2'
            isCategoryActive={isCategoryActive === '백엔드'}
            onClick={selectCategory}>
            백엔드
          </CategorySpan>
          <MobileCategory onClick={openMobileSort}>
            {hotSixCurrentSort} <DownArrow src={categoryDown} alt='펼쳐 보기' />
          </MobileCategory>
          <StyledMobileSort
            currentSort={hotSixCurrentSort}
            checkSort={checkSort}
            setSortIsClicked={setSortIsClicked}
            sortIsClicked={sortIsClicked}
          />
        </Category>
      </Header>
      <CarrouselButton onClick={carouselMoveLeft} />
      <CarouselContainer>
        <CardsUl
          onTouchStart={touchStartCarousel}
          onTouchMove={touchMoveCarousel}
          onTouchEnd={touchEndCarousel}
          cardListRef={cardListRef}
          currentCarousel={currentCarousel}>
          {!IsInitDataLoading &&
            lecturesData.data.content.map((lectureData, i) => {
              return (
                <CardLi key={lectureData.id}>
                  <HotSixCard
                    // 메인 페이지에서, 프론트엔드, 백엔드, 강의 페이지 별로 저장되는 위치가 다름
                    category={isCategoryActive}
                    lectureData={lectureData}
                    three
                    rankSrc={rankSrcs[i]}
                  />
                </CardLi>
              );
            })}
        </CardsUl>
      </CarouselContainer>
      <CarrouselButton onClick={carouselMoveRight} />
    </Container>
  );
};

const StyledMobileSort = styled(MobileSort)`
  display: none;

  @media ${responsive.mobile} {
    ${({ sortIsClicked }) =>
      sortIsClicked
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}
    position: fixed;
    z-index: 9999;
    left: 0;
  }
`;

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
    display: none;
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
    transition: none;

    /* ${({ currentCarousel }) => css`
      transform: translateX(-${16.6666 * currentCarousel}%);
    `} */
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
    width: 94.4444vw;
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
  cursor: pointer;

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
      display: none;
      /* right: 5px; */
      /* 
      ${({ currentCarousel }) =>
        currentCarousel === 5
          ? css`
              display: none;
            `
          : ''} */
    }
  }
`;

export default Hotsix;
