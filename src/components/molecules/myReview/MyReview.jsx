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
`;

const Confirm = styled.span`
  border-radius: 3px;
  padding: 4px 8px;

  font-weight: 500;
  font-size: 12px;

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
`;

const ConfirmContainer = styled.div`
  display: flex;
  margin-top: 34px;
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
`;

const LectureTittle = styled.h4`
  width: 500px;

  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;
`;

const LectureInfo = styled.div`
  margin-left: 27px;
  padding: 13px 0;
`;

const LectureImg = styled.img`
  width: 232px;
  height: 129px;
  border-radius: 8px;
`;

const ReviewLi = styled.li`
  all: unset;
  display: flex;
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
`;

const Title = styled.h3`
  padding-bottom: 30px;
  border-bottom: 1px solid #2a2a2a;

  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  opacity: 0.9;
`;

const Container = styled.div``;

export default MyReview;
