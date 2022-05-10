import React from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';

import lectureImg from '../../../assets/img/lectureImg.png';

const MyReview = ({ className }) => {
  return (
    <Container className={className}>
      <Title>리뷰(3)</Title>
      <ReviewsUl>
        <ReviewLi>
          <LectureImg src={lectureImg} alt='강의 이미지' />
          <LectureInfo>
            <LectureTittle>
              웹 게임을 만들며 배우는 JavaScript(자바스크립트)
            </LectureTittle>
            <DateCreatedContainer>
              <DateCreated>작성일</DateCreated>
              <DateCreated>2022.2.4</DateCreated>
            </DateCreatedContainer>
            <ConfirmContainer>
              <Confirm confirm={false}>승인 대기중</Confirm>
              <Dots>
                <Dot />
                <Dot />
                <Dot />
              </Dots>
              <Confirm confirm={true}>승인 완료</Confirm>
              <MobileConfirm confirm={true}>승인 대기중</MobileConfirm>
            </ConfirmContainer>
          </LectureInfo>
        </ReviewLi>
        <ReviewLi>
          <LectureImg src={lectureImg} alt='강의 이미지' />
          <LectureInfo>
            <LectureTittle>
              웹 게임을 만들며 배우는 JavaScript(자바스크립트)
            </LectureTittle>
            <DateCreatedContainer>
              <DateCreated>작성일</DateCreated>
              <DateCreated>2022.2.4</DateCreated>
            </DateCreatedContainer>
            <ConfirmContainer>
              <Confirm confirm={true}>승인 대기중</Confirm>
              <Dots>
                <Dot />
                <Dot />
                <Dot />
              </Dots>
              <Confirm confirm={false}>승인 완료</Confirm>
              <MobileConfirm confirm={true}>승인 대기중</MobileConfirm>
            </ConfirmContainer>
          </LectureInfo>
        </ReviewLi>
        <ReviewLi>
          <LectureImg src={lectureImg} alt='강의 이미지' />
          <LectureInfo>
            <LectureTittle>
              웹 게임을 만들며 배우는 JavaScript(자바스크립트)
            </LectureTittle>
            <DateCreatedContainer>
              <DateCreated>작성일</DateCreated>
              <DateCreated>2022.2.4</DateCreated>
            </DateCreatedContainer>
            <ConfirmContainer>
              <Confirm confirm={false}>승인 대기중</Confirm>
              <Dots>
                <Dot />
                <Dot />
                <Dot />
              </Dots>
              <Confirm confirm={true}>승인 완료</Confirm>
              <MobileConfirm confirm={true}>승인 대기중</MobileConfirm>
            </ConfirmContainer>
          </LectureInfo>
        </ReviewLi>
        <ReviewLi>
          <LectureImg src={lectureImg} alt='강의 이미지' />
          <LectureInfo>
            <LectureTittle>
              웹 게임을 만들며 배우는 JavaScript(자바스크립트)
            </LectureTittle>
            <DateCreatedContainer>
              <DateCreated>작성일</DateCreated>
              <DateCreated>2022.2.4</DateCreated>
            </DateCreatedContainer>
            <ConfirmContainer>
              <Confirm confirm={true}>승인 대기중</Confirm>
              <Dots>
                <Dot />
                <Dot />
                <Dot />
              </Dots>
              <Confirm confirm={false}>승인 완료</Confirm>
              <MobileConfirm confirm={false}>승인 거절</MobileConfirm>
            </ConfirmContainer>
          </LectureInfo>
        </ReviewLi>
      </ReviewsUl>
    </Container>
  );
};

const Dot = styled.div`
  border-radius: 50%;

  width: 3px;
  height: 3px;

  background-color: #444444;
`;

const Dots = styled.div`
  display: flex;
  align-items: center;

  margin: 0 8px;

  & > div:not(:last-of-type) {
    margin-right: 7px;
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

const Confirm = styled.span`
  border-radius: 3px;
  padding: 4px 8px;

  font-weight: 500;
  font-size: 0.75rem;

  ${({ confirm }) =>
    confirm
      ? css`
          background-color: #36407d;
          color: #ffffff;
        `
      : css`
          background-color: #1f2026;
          color: #b4b4b4;
        `}

  @media ${responsive.tablet} {
    padding: 0.5208vw 1.0417vw;
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

const MobileConfirm = styled(Confirm)`
  display: none;

  @media ${responsive.mobile} {
    display: block;
  }
`;

const ConfirmContainer = styled.div`
  display: flex;
  margin-top: 34px;

  @media ${responsive.tablet} {
    margin-top: 4.4271vw;
  }

  @media ${responsive.mobile} {
    margin-top: 9.4444vw;
  }
`;

const DateCreated = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.8;
`;

const DateCreatedContainer = styled.div`
  margin-top: 18px;

  & > span:first-of-type {
    padding-right: 8px;
    border-right: 1px solid #444444;
  }
  & > span:last-of-type {
    padding-left: 8px;
  }

  @media ${responsive.tablet} {
    margin-top: 2.3438vw;

    & > span:first-of-type {
      padding-right: 1.0417vw;
    }
    & > span:last-of-type {
      padding-left: 1.0417vw;
    }
  }

  @media ${responsive.mobile} {
    margin-top: 4.1667vw;

    & > span:first-of-type {
      padding-right: 2.2222vw;
    }
    & > span:last-of-type {
      padding-left: 2.2222vw;
    }
  }
`;

const LectureTittle = styled.h4`
  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;
  line-height: 18px;
`;

const LectureInfo = styled.div`
  margin-left: 27px;
  padding: 13px 0;

  @media ${responsive.tablet} {
    margin-left: 3.5156vw;
    padding: 1.6927vw 0;
  }

  @media ${responsive.mobile} {
    margin-left: 3.3333vw;
    padding: 3.0556vw 0;
  }
`;

const LectureImg = styled.img`
  width: 232px;
  height: 129px;
  border-radius: 8px;

  @media ${responsive.tablet} {
    width: 30.2083vw;
    height: 16.7969vw;
  }

  @media ${responsive.mobile} {
    width: 38.8889vw;
    height: 38.8889vw;
  }
`;

const ReviewLi = styled.li`
  all: unset;
  display: flex;
  align-items: center;
`;

const ReviewsUl = styled.ul`
  all: unset;
  display: block;

  & > li {
    padding: 45px 0;
    border-bottom: 2px solid #1f2026;
  }

  & > li:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }

  @media ${responsive.tablet} {
    & > li {
      padding: 5.8594vw 0;
    }
  }

  @media ${responsive.mobile} {
    & > li {
      padding: 6.1111vw 0;
    }
  }
`;

const Title = styled.h3`
  padding-bottom: 30px;
  border-bottom: 1px solid #2a2a2a;

  font-weight: 700;
  font-size: 1.375rem;
  color: #ffffff;
  opacity: 0.9;

  @media ${responsive.mobile} {
    font-size: 1rem;
    padding-bottom: 25px;
  }
`;

const Container = styled.div``;

export default MyReview;
