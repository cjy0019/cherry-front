import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';
import bellImg from '../../../assets/img/bell.svg';
import bellActive from '../../../assets/img/bell_active.svg';
import searchM from '../../../assets/img/search_m.svg';
import { responsive } from '../../../style/responsive';
import SearchInput from '../../UI/atoms/input/SearchInput';
import { Link } from 'react-router-dom';

const Header = ({ login, NotMain }) => {
  const [notiIsClicked, setNotiIsClicked] = useState(false);
  const [mobileSearchIsClicked, setMobileSearchIsClicked] = useState(false);

  const notiOnClick = () => {
    setNotiIsClicked(!notiIsClicked);
  };

  const searchMOnClick = () => {
    setMobileSearchIsClicked(!mobileSearchIsClicked);
  };

  return (
    <Container NotMain={NotMain}>
      <FlexLeft>
        <Span mobileSearchIsClicked={mobileSearchIsClicked} NotMain={NotMain}>
          Cherry Pick
        </Span>
        {NotMain && (
          <StyledSearchInput
            header
            mobileSearchIsClicked={mobileSearchIsClicked}
          />
        )}
      </FlexLeft>
      <FlexRight mobileSearchIsClicked={mobileSearchIsClicked}>
        <MobileSearchButton NotMain={NotMain} onClick={searchMOnClick} />
        {!login && (
          <>
            <StyledLink to='#'>로그인</StyledLink>
            <StyledLink id='signUp' to='#'>
              회원가입
            </StyledLink>
          </>
        )}
        {login && (
          <>
            <NotificationButton onClick={notiOnClick} />
            <StyledLink id='signUp' to='#'>
              MY
            </StyledLink>
            <NotificationUl notiIsClicked={notiIsClicked}>
              <NotificationLi>
                <Link to='#'>내가 쓴 리뷰</Link>
              </NotificationLi>
              <NotificationLi>
                <Link to='#'>북마크</Link>
              </NotificationLi>
              <NotificationLi>
                <Link to='#'>계정 설정</Link>
              </NotificationLi>
              <NotificationLi>
                <Link to='#'>로그아웃</Link>
              </NotificationLi>
            </NotificationUl>
          </>
        )}
      </FlexRight>
      <CancelSpan
        mobileSearchIsClicked={mobileSearchIsClicked}
        onClick={searchMOnClick}>
        취소
      </CancelSpan>
    </Container>
  );
};

const CancelSpan = styled.span`
  cursor: pointer;
  font-size: 14px;

  ${({ mobileSearchIsClicked }) =>
    mobileSearchIsClicked
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const MobileSearchButton = styled.button`
  all: unset;
  display: none;
  width: 32px;
  height: 32px;
  cursor: pointer;

  background-image: url(${searchM});
  background-size: cover;

  @media ${responsive.mobile} {
    ${({ NotMain }) => (NotMain ? 'display: block' : 'display: none')}
  }
`;

const StyledSearchInput = styled(SearchInput)`
  @media ${responsive.mobile} {
    display: none;

    ${({ mobileSearchIsClicked }) =>
      mobileSearchIsClicked
        ? css`
            display: block;
          `
        : css`
            display: none;
          `};
  }
`;

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
  top: 68px;
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
    top: 49px;
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
  ${(NotMain) =>
    NotMain &&
    css`
      margin-right: 36px;
    `}

  ${({ mobileSearchIsClicked }) =>
    mobileSearchIsClicked
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

const StyledLink = styled(Link)`
  font-size: 14px;
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

const FlexLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ mobileSearchIsClicked }) =>
    mobileSearchIsClicked
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
`;

const Container = styled.div`
  height: 100px;

  display: flex;
  position: relative;
  padding: 0px 360px 0px 359px;
  background: ${palette.backgroundBlack};
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  color: ${palette.textWhite};

  #signUp {
    margin-left: 24px;
  }

  @media ${responsive.tablet} {
    padding: 0px 24px;
  }

  @media ${responsive.mobile} {
    padding: 0px 20px;
    height: 60px;
    #signUp {
      margin-left: ${({ NotMain }) => (NotMain ? '8px' : '12px')};
    }
  }
`;

export default Header;
