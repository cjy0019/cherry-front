import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';

import AccountSetting from '../../molecules/accountSetting/AccountSetting';
import Bookmark from '../../molecules/bookmark/Bookmark';
import Footer from '../../molecules/footer/Footer';
import Header from '../../molecules/header/Header';
import MyReview from '../../molecules/myReview/MyReview';
import Feedback from '../../UI/atoms/feedback/Feedback';

const MyPageTemplate = () => {
  const [currentPage, setCurrentPage] = useState('계정설정');

  const movePage = (e) => {
    setCurrentPage(e.currentTarget.dataset.name);
  };

  return (
    <>
      <Header login notMain />
      <JustifyCenter>
        <TitleUl>
          <TitleLi>
            <Title
              currentPage={currentPage === '내가 쓴 리뷰'}
              onClick={movePage}
              data-name='내가 쓴 리뷰'>
              내가 쓴 리뷰
            </Title>
          </TitleLi>
          <TitleLi>
            <Title
              currentPage={currentPage === '북마크'}
              onClick={movePage}
              data-name='북마크'>
              북마크
            </Title>
          </TitleLi>
          <TitleLi>
            <Title
              currentPage={currentPage === '계정설정'}
              onClick={movePage}
              data-name='계정설정'>
              계정설정
            </Title>
          </TitleLi>
        </TitleUl>
        <MyReviewPage currentPage={currentPage === '내가 쓴 리뷰'} />
        <MyBookmark currentPage={currentPage === '북마크'} />
        <MyAccountSetting currentPage={currentPage === '계정설정'} />
        <MyPageFeedback />
      </JustifyCenter>
      <MyPageFooter />
    </>
  );
};

const MyAccountSetting = styled(AccountSetting)`
  ${({ currentPage }) =>
    currentPage
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const MyBookmark = styled(Bookmark)`
  ${({ currentPage }) =>
    currentPage
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const MyPageFeedback = styled(Feedback)`
  position: absolute;

  bottom: -208.46px;
  left: -5.4167vw;

  @media ${responsive.tablet} {
    bottom: -186.46px;
    left: 0;
  }

  @media ${responsive.mobile} {
    bottom: -71.3px;
    left: 80vw;
  }
`;

const MyPageFooter = styled(Footer)`
  margin-top: 222px;

  @media ${responsive.tablet} {
    margin-top: 200px;
  }

  @media ${responsive.mobile} {
    margin-top: 83px;
  }
`;

const MyReviewPage = styled(MyReview)`
  ${({ currentPage }) =>
    currentPage
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const Title = styled.h2`
  cursor: pointer;

  font-weight: 500;
  font-size: 1.5rem;
  opacity: 0.9;

  ${({ currentPage }) =>
    currentPage
      ? css`
          color: #e72847;
          font-weight: 700;
        `
      : css`
          color: #444444;
          font-weight: 500;
        `}

  @media ${responsive.mobile} {
    font-size: 1.25rem;
  }
`;

const TitleLi = styled.li`
  all: unset;
  margin-right: 22px;

  @media ${responsive.mobile} {
    margin-right: 5vw;
  }
`;

const TitleUl = styled.ul`
  all: unset;
  display: flex;

  padding-top: 60px;
  padding-bottom: 24px;
  margin-bottom: 80px;

  border-bottom: 1px solid #2a2a2a;

  @media ${responsive.mobile} {
    padding-top: 48px;
    padding-bottom: 20px;

    margin-bottom: 50px;
  }
`;

const JustifyCenter = styled.div`
  position: relative;

  width: 62.5vw;
  margin: 0 auto;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 88.8889vw;
  }
`;

export default MyPageTemplate;
