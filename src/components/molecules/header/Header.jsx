import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';
import bellImg from '../../../assets/img/bell.svg';
import bellActive from '../../../assets/img/bell_active.svg';
import { responsive } from '../../../style/responsive';

const Header = ({ login }) => {
  const [notiIsClicked, setNotiIsClicked] = useState(false);

  const notiOnClick = () => {
    setNotiIsClicked(!notiIsClicked);
  };

  return (
    <Container>
      <Span>Cherry Pick</Span>
      {!login && (
        <>
          <A href='#'>로그인</A>
          <A id='signUp' href='#'>
            회원가입
          </A>
        </>
      )}
      {login && (
        <>
          <NotificationButton onClick={notiOnClick} />
          <A id='signUp' href='#'>
            MY
          </A>
          <NotificationUl notiIsClicked={notiIsClicked}>
            <NotificationLi>
              <a href='#'>내가 쓴 리뷰</a>
            </NotificationLi>
            <NotificationLi>
              <a href='#'>북마크</a>
            </NotificationLi>
            <NotificationLi>
              <a href='#'>계정 설정</a>
            </NotificationLi>
            <NotificationLi>
              <a href='#'>로그아웃</a>
            </NotificationLi>
          </NotificationUl>
        </>
      )}
    </Container>
  );
};

const NotificationUl = styled.ul`
  ${({ notiIsClicked }) =>
    notiIsClicked
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  padding: 18px;
  margin: 0;

  flex-direction: column;

  position: absolute;
  top: 80px;
  right: 356px;

  background-color: ${palette.subNavy};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  & > li:first-child {
    padding: 0px 0px 13px 0px;
    border-top: none;
  }
  & > li:last-child {
    padding: 13px 0px 0px 0px;
  }

  @media ${responsive.tablet} {
    right: 22px;
  }
  @media ${responsive.mobile} {
    top: 57px;
    right: 17px;
  }
`;

const NotificationLi = styled.li`
  all: unset;
  width: 96px;

  padding: 13px 0;
  margin: 0 auto;
  text-align: center;

  border-top: 1px solid rgb(255, 255, 255, 0.1);

  & > a {
    all: unset;
    font-weight: 400;
    font-size: 13px;
    color: ${palette.textWhite};
    text-align: center;
  }

  & > a:hover {
    color: ${palette.pointRed};
    cursor: pointer;
  }
`;

const Span = styled.span`
  margin-right: auto;
`;

const A = styled.a`
  display: inline-block;
  color: ${palette.textWhite};
  text-decoration: none;
`;

const NotificationButton = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;

  // 알림 데이터가 있다면, bellActive 이미지 사용
  // 알림 데이터 없다면, bell 이미지 사용
  background-image: url(${bellActive});
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 42px 360px 42px 359px;
  background: ${palette.backgroundBlack};
  justify-content: flex-end;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  color: ${palette.textWhite};

  & > #signUp {
    margin-left: 24px;
  }

  @media ${responsive.tablet} {
    padding: 41px 24px;
  }

  @media ${responsive.mobile} {
    padding: 22px 20px;

    & > #signUp {
      margin-left: 12px;
    }
  }
`;

export default Header;
