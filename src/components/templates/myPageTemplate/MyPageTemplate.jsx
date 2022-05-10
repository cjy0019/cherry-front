import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../style/responsive';
import Footer from '../../molecules/footer/Footer';

import Header from '../../molecules/header/Header';
import MyReview from '../../molecules/myReview/MyReview';
import Feedback from '../../UI/atoms/feedback/Feedback';

const MyPageTemplate = () => {
  const [currentPage, setCurrentPage] = useState('내가 쓴 리뷰');

  const movePage = (e) => {
    setCurrentPage(e.currentTarget.dataset.name);
  };

  return (
    <>
      <Header login notMain />
      <Width1200>
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
        <MyReviewPage />
        <MyPageFeedback />
      </Width1200>
      <MyPageFooter />
    </>
  );
};

const MyPageFeedback = styled(Feedback)`
  position: absolute;

  bottom: -186.46px;
  left: -5.4167vw;
`;

const MyPageFooter = styled(Footer)`
  margin-top: 222px;
`;

const MyReviewPage = styled(MyReview)`
  margin-top: 80px;
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
`;

const TitleLi = styled.li`
  all: unset;
  margin-right: 22px;
`;

const TitleUl = styled.ul`
  all: unset;
  display: flex;

  padding-top: 60px;
  padding-bottom: 24px;

  border-bottom: 1px solid #2a2a2a;
`;

const Width1200 = styled.div`
  position: relative;

  width: 62.5vw;
  margin: 0 auto;
`;

export default MyPageTemplate;
