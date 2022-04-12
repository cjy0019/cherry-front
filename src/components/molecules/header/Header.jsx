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
  const [noticeIsClicked, setNoticeIsClicked] = useState(false);
  const [mobileSearchIsClicked, setMobileSearchIsClicked] = useState(false);

  const noticeOnClick = () => {
    setNoticeIsClicked(!noticeIsClicked);
  };

  const searchMOnClick = () => {
    setMobileSearchIsClicked(!mobileSearchIsClicked);
  };

  return (
    <StyledHeader NotMain={NotMain}>
      <Container>
        <FlexLeft>
          <Span mobileSearchIsClicked={mobileSearchIsClicked} NotMain={NotMain}>
            Cherry Pick
          </Span>
          {NotMain && (
            <StyledSearchInput
              main={!NotMain}
              mobileSearchIsClicked={mobileSearchIsClicked}
            />
          )}
        </FlexLeft>
        <FlexRight mobileSearchIsClicked={mobileSearchIsClicked}>
          <MobileSearchButton NotMain={NotMain} onClick={searchMOnClick} />
          {!login && (
            <>
              <StyledLink to='#'>로그인</StyledLink>
              <StyledLink to='#'>회원가입</StyledLink>
            </>
          )}
          {login && (
            <>
              <NotificationButton onClick={noticeOnClick} />
              <StyledLink to='#'>MY</StyledLink>
              <NotificationUl noticeIsClicked={noticeIsClicked}>
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
    </StyledHeader>
  );
};

const CancelSpan = styled.span`
  cursor: pointer;
  font-size: 0.875rem;
  white-space: nowrap;

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
  cursor: pointer;

  width: 32px;
  height: 32px;

  background-image: url(${searchM});
  background-size: cover;

  @media ${responsive.mobile} {
    ${({ NotMain }) => (NotMain ? 'display: block' : 'display: none')};
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
  z-index: 9999;

  ${({ noticeIsClicked }) =>
    noticeIsClicked
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  padding: 12px 18px;
  margin: 0;

  flex-direction: column;

  position: absolute;
  top: 70px;

  background-color: ${palette.subNavy};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  /* a태그 자체의 크기가 있기때문에, a태그의 크기를 계산해서 padding 상단 18px을 6px 까지 줄임 */
  & > li:first-child {
    padding: 0 0 6px 0;
    border-top: none;
  }
  & > li:last-child {
    padding: 10px 0 0 0;
  }

  @media ${responsive.mobile} {
    padding: 3.33vw 5vw;

    & > li:first-child {
      padding: 0 0 1.67vw 0;
      border-top: none;
    }
    & > li:last-child {
      padding: 3.06vw 0 0 0;
    }

    top: 13.61vw;
  }
`;

const NotificationLi = styled.li`
  all: unset;
  width: 96px;

  padding: 10px 0;
  margin: 0 auto;
  text-align: center;

  border-top: 1px solid rgb(255, 255, 255, 0.1);

  & > a {
    all: unset;
    font-weight: 400;
    font-size: 0.8125rem;
    color: ${palette.textWhite};
    text-align: center;
  }

  & > a:hover {
    color: ${palette.pointRed};
    cursor: pointer;
  }

  @media ${responsive.tablet} {
    & > a {
      font-size: 0.8125rem;
    }
  }
  @media ${responsive.mobile} {
    width: 26.67vw;

    padding: 1.67vw 0;

    & > a {
      font-size: 3.61vw;
    }
  }
`;

const Span = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Roboto';
  white-space: nowrap;

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

  @media ${responsive.mobile} {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  display: inline-block;
  color: ${palette.textWhite};
  text-decoration: none;
  white-space: nowrap;

  @media ${responsive.tablet} {
    font-size: 0.875rem;
  }

  @media ${responsive.mobile} {
    font-size: 0.875rem;
  }
`;

const NotificationButton = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;

  // TODO 알림 데이터가 있다면, bellActive 이미지 사용
  // TODO 데이터 없다면, bell 이미지 사용
  background-image: url(${bellActive});
  background-size: cover;

  @media ${responsive.mobile} {
    width: 8.89vw;
    height: 8.89vw;
  }
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

  font-family: 'Pretendard';

  ${({ mobileSearchIsClicked }) =>
    mobileSearchIsClicked
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}

  /* 회원가입, MY margin 주기 위해서 */
  & > a:nth-last-of-type(1) {
    margin-left: 24px;
  }

  /* 회원가입, MY margin 주기 위해서 */
  @media ${responsive.tablet} {
    & > a:nth-last-of-type(1) {
      margin-left: 16px;
    }
  }
  @media ${responsive.mobile} {
    & > a:nth-last-of-type(1) {
      margin-left: ${({ NotMain }) => (NotMain ? '2.22vw' : '3.33vw')};
    }
  }
`;

const Container = styled.div`
  width: 62.5vw;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 88.88vw;
    height: 60px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;

  font-weight: 400;
  color: ${palette.textWhite};

  background: ${palette.backgroundBlack};
`;

export default Header;
