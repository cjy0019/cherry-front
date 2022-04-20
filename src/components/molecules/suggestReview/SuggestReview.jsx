import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import JobBadge from '../../UI/atoms/badges/JobBadge';

const SuggestReview = () => {
  const ReviewRef = useRef(null);
  let carouselN = 0;

  // 자동 슬라이더
  useEffect(() => {
    const timeoutId = setInterval(() => {
      if (carouselN === 3) {
        setTimeout(() => {
          ReviewRef.current.style.transition = '';
          ReviewRef.current.style.transitionDuration = '';
          ReviewRef.current.style.transitionProperty = '';
          ReviewRef.current.style.transitionTimingFunction = '';
          ReviewRef.current.style.transform = 'translateX(0px)';
          carouselN = 1;
        }, 2000);
        ReviewRef.current.style.transitionDuration = '2s';
        ReviewRef.current.style.transitionProperty = 'all';
        ReviewRef.current.style.transitionTimingFunction = 'ease-in-out';
        ReviewRef.current.style.transform = `translateX(${
          carouselN * -1200
        }px)`;
      } else {
        ReviewRef.current.style.transitionDuration = '2s';
        ReviewRef.current.style.transitionProperty = 'all';
        ReviewRef.current.style.transitionTimingFunction = 'ease-in-out';

        ReviewRef.current.style.transform = `translateX(${
          carouselN * -1200
        }px)`;
        carouselN++;
      }
    }, 5000);

    // return clearInterval(timeoutId);
  }, []);

  return (
    <Slider>
      <ReviewUl ref={ReviewRef}>
        <ReviewList>
          <Review>
            <Header>
              <Dots>
                <Dot red />
                <Dot />
                <Dot />
              </Dots>
              <JobBadge>11111</JobBadge>
              <JobBadge>1년차</JobBadge>
            </Header>
            <Contents>
              <Title>이렇게 전달력 좋게 설명한 강의는 처음이에요!</Title>
              <Texts>
                3시간이 아깝지 않은 강의 였습니다.
                <br /> 반복해서 듣고 복습하기에도 너무 좋은 것 같아요. 다른
                강의도 만들어주세요!{' '}
              </Texts>
              <CheckReview>강의 확인하기</CheckReview>
            </Contents>
          </Review>
        </ReviewList>
        <ReviewList>
          <Review>
            <Header>
              <Dots>
                <Dot />
                <Dot red />
                <Dot />
              </Dots>
              <JobBadge>22222</JobBadge>
              <JobBadge>1년차</JobBadge>
            </Header>
            <Contents>
              <Title>이렇게 전달력 좋게 설명한 강의는 처음이에요!</Title>
              <Texts>
                3시간이 아깝지 않은 강의 였습니다.
                <br /> 반복해서 듣고 복습하기에도 너무 좋은 것 같아요. 다른
                강의도 만들어주세요!{' '}
              </Texts>
              <CheckReview>강의 확인하기</CheckReview>
            </Contents>
          </Review>
        </ReviewList>
        <ReviewList>
          <Review>
            <Header>
              <Dots>
                <Dot />
                <Dot />
                <Dot red />
              </Dots>
              <JobBadge>33333</JobBadge>
              <JobBadge>1년차</JobBadge>
            </Header>
            <Contents>
              <Title>이렇게 전달력 좋게 설명한 강의는 처음이에요!</Title>
              <Texts>
                3시간이 아깝지 않은 강의 였습니다.
                <br /> 반복해서 듣고 복습하기에도 너무 좋은 것 같아요. 다른
                강의도 만들어주세요!{' '}
              </Texts>
              <CheckReview>강의 확인하기</CheckReview>
            </Contents>
          </Review>
        </ReviewList>
        <ReviewList>
          <Review>
            <Header>
              <Dots>
                <Dot red />
                <Dot />
                <Dot />
              </Dots>
              <JobBadge>11111</JobBadge>
              <JobBadge>1년차</JobBadge>
            </Header>
            <Contents>
              <Title>이렇게 전달력 좋게 설명한 강의는 처음이에요!</Title>
              <Texts>
                3시간이 아깝지 않은 강의 였습니다.
                <br /> 반복해서 듣고 복습하기에도 너무 좋은 것 같아요. 다른
                강의도 만들어주세요!{' '}
              </Texts>
              <CheckReview>강의 확인하기</CheckReview>
            </Contents>
          </Review>
        </ReviewList>
      </ReviewUl>
    </Slider>
  );
};

const ReviewList = styled.li`
  all: unset;
`;

const CheckReview = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 48px;

  color: #ffffff;
  font-weight: 400;
  font-size: 0.875rem;
  opacity: 0.9;

  background-color: #1f2026;
  border-radius: 8px;
`;

const Texts = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #b4b4b4;
  text-align: center;

  opacity: 0.6;
  line-height: 25px;

  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 1.375rem;
  font-weight: 600;
  color: #b4b4b4;

  margin-bottom: 20px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 62.5vw;
  height: 14.5833vw;
`;

const ReviewUl = styled.ul`
  all: unset;

  display: flex;
  position: absolute;
  top: 0;

  width: calc(1200px * 4);
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  margin-right: 4px;

  border-radius: 50%;

  ${({ red }) =>
    red
      ? css`
          background-color: #e72847;
        `
      : css`
          background-color: #1f2026;
        `};
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1104px;

  & > div:nth-last-of-type(1) {
    margin-left: 8px;
  }
`;

const Slider = styled.div`
  position: relative;

  width: 1200px;
  height: 280px;
  margin-top: 120px;

  overflow: hidden;

  background-color: #15161d;
  border-radius: 16px;
`;

export default SuggestReview;
