import React from 'react';
import styled from 'styled-components';

import lectureImg from '../../../assets/img/lectureImg.png';
import emojiHi from '../../../assets/img/emoji_hi.png';
import closeDark from '../../../assets/img/close_dark.svg';
import { Link } from 'react-router-dom';

const MobileNotificationTemplate = () => {
  return (
    <Container>
      <Title>알림(3)</Title>
      <ReviewsNotificationContainer>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>하루 전</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
        <ReviewsNotificationLi>
          <ReviewImg src={lectureImg} alt='강의 이미지' />
          <ReviewInfoContainer>
            <ReviewTittle>웹 게임 만들며 배우는 JavaSc...</ReviewTittle>
            <ReviewState>리뷰가 승인되었습니다.</ReviewState>
          </ReviewInfoContainer>
          <UpdateDate>지금</UpdateDate>
        </ReviewsNotificationLi>
      </ReviewsNotificationContainer>
      <Welcome>
        <WelcomeText>
          뮴미님! 가입을 환영합니다
          <HiEmoji src={emojiHi} alt='hi' />
        </WelcomeText>
        <WelcomeDate>2021.12.31</WelcomeDate>
      </Welcome>
      <DeleteAll>모두 지우기</DeleteAll>
      <CloseButton to='#' />
    </Container>
  );
};

const CloseButton = styled(Link)`
  all: unset;
  cursor: pointer;

  position: absolute;
  top: 11.1111vw;
  right: 5.5556vw;

  width: 32px;
  height: 32px;

  background-image: url(${closeDark});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const DeleteAll = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 320px;
  height: 44px;

  background-color: #000000;
  border-radius: 3px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const WelcomeDate = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.5;
`;

const HiEmoji = styled.img`
  width: 12px;
  height: 12px;
`;

const WelcomeText = styled.p`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
`;

const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

const UpdateDate = styled.p`
  width: 50px;
  text-align: end;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.5;
`;

const ReviewState = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
  line-height: 100%;
  color: #ffffff;
  opacity: 0.5;
`;

const ReviewTittle = styled.h3`
  width: 166px;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
`;

const ReviewInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;
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
  /* overflow: auto; */
  display: block;

  margin-top: 40px;
  /* height: 70vh; */

  & > li {
    padding: 16px 0;
    border-bottom: 1px solid #2a2a2a;
  }

  & > li:first-of-type {
    padding-top: 0;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
`;

const Container = styled.div`
  padding: 44px 20px 24px 20px;
`;

export default MobileNotificationTemplate;
