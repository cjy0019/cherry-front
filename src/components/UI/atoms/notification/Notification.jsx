import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../../style/responsive';

import lectureImg from '../../../../assets/img/lectureImg.png';
import emojiHi from '../../../../assets/img/emoji_hi.png';
import closeDark from '../../../../assets/img/close_dark.svg';

const Notification = forwardRef(
  ({ className, notificationIsOpen, activeNotification }, ref) => {
    return (
      <Container
        ref={ref}
        notificationIsOpen={notificationIsOpen}
        className={className}>
        <Title>알림(2)</Title>
        <ReviewsNotificationContainer>
          <ReviewsNotificationLi>
            <ReviewImg src={lectureImg} alt='강의 이미지' />
            <ReviewInfoContainer>
              <ReviewTittle>웹 게임 만들며 배우는...</ReviewTittle>
              <ReviewState>리뷰가 승인되었습니다.</ReviewState>
            </ReviewInfoContainer>
            <UpdateDate>하루 전</UpdateDate>
          </ReviewsNotificationLi>
          <ReviewsNotificationLi>
            <ReviewImg src={lectureImg} alt='강의 이미지' />
            <ReviewInfoContainer>
              <ReviewTittle>웹 게임 만들며 배우는...</ReviewTittle>
              <ReviewState>리뷰가 승인되었습니다.</ReviewState>
            </ReviewInfoContainer>
            <UpdateDate>하루 전</UpdateDate>
          </ReviewsNotificationLi>
          <ReviewsNotificationLi>
            <ReviewImg src={lectureImg} alt='강의 이미지' />
            <ReviewInfoContainer>
              <ReviewTittle>웹 게임 만들며 배우는...</ReviewTittle>
              <ReviewState>리뷰가 승인되었습니다.</ReviewState>
            </ReviewInfoContainer>
            <UpdateDate>하루 전</UpdateDate>
          </ReviewsNotificationLi>
        </ReviewsNotificationContainer>
        <Welcome>
          <WelcomeText>
            뮴미님! 가입을 환영합니다
            <HiEmoji src={emojiHi} alt='hi' />
          </WelcomeText>
          <WelcomeDate>1개월 전</WelcomeDate>
        </Welcome>
        <DeleteAll>모두 지우기</DeleteAll>
        <CloseButton onClick={activeNotification} />
      </Container>
    );
  },
);

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;

  position: absolute;
  top: 18px;
  right: 15px;

  width: 28px;
  height: 28px;

  background-image: url(${closeDark});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const DeleteAll = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 34px;

  margin-top: 24px;

  background-color: #000000;
  border-radius: 3px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const WelcomeDate = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.5;
`;

const WelcomeText = styled.p`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
`;

const HiEmoji = styled.img`
  width: 12px;
  height: 12px;
`;

const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 16px;
`;

const UpdateDate = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.5;

  margin-top: 7px;
  margin-left: 25px;
`;

const ReviewState = styled.p`
  margin-top: 8px;

  font-weight: 300;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.5;
`;

const ReviewTittle = styled.h3`
  all: unset;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
`;

const ReviewInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 12px;
`;

const ReviewImg = styled.img`
  width: 96px;
  height: 50px;
`;

const ReviewsNotificationLi = styled.li`
  all: unset;
  display: flex;
`;

const ReviewsNotificationContainer = styled.ul`
  all: unset;
  display: block;
  margin-top: 20px;

  & > li {
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  & > li:first-of-type {
    padding-top: 0;
  }
`;

const Title = styled.h2`
  all: unset;
  display: block;

  margin-top: 10px;

  font-weight: 500;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.5;
`;

const Container = styled.div`
  position: absolute;
  ${({ notificationIsOpen }) =>
    notificationIsOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  width: 332px;
  padding: 16px;

  background-color: #1f2026;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

export default Notification;
