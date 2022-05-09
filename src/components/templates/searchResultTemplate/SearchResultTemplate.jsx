import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import Footer from '../../molecules/footer/Footer';

import Header from '../../molecules/header/Header';
import Feedback from '../../UI/atoms/feedback/Feedback';
import LectureCard from '../../UI/atoms/lectureCard/LectureCard';
import MobileLectureCard from '../../UI/atoms/mobileLectureCard/MobileLectureCard';
import Sorts from '../../UI/atoms/sorts/Sorts';

const SearchResultTemplate = () => {
  return (
    <Container>
      <SearchHeader notMain login />
      <SearchResultContainer>
        <SearchTitle>웹 게임 검색결과 0개</SearchTitle>
        <SearchSorts />
        <LectureCards>
          <LectureCard four />
          <LectureCard four />
          <LectureCard four />
          <LectureCard four />
          <LectureCard four />
          <LectureCard four />
          <LectureCard four />
          <LectureCard four />
        </LectureCards>
        <MobileLectureCards>
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
        </MobileLectureCards>
        <SearchFeedback />
      </SearchResultContainer>
      <SearchFooter />
    </Container>
  );
};

const SearchFeedback = styled(Feedback)`
  position: absolute;

  bottom: -119.08px;
  left: -5.4167vw;

  @media ${responsive.tablet} {
    bottom: -65px;
    left: 0;
  }

  @media ${responsive.mobile} {
    bottom: -60.3px;
    left: 80vw;
  }
`;

const Container = styled.div``;

const SearchFooter = styled(Footer)`
  margin-top: 130px;

  @media ${responsive.tablet} {
    margin-top: 80px;
  }

  @media ${responsive.mobile} {
    margin-top: 72px;
  }
`;

const MobileLectureCards = styled.div`
  display: none;

  @media ${responsive.mobile} {
    display: block;
    margin-top: 16px;

    & > div {
      padding: 22px 0px;
      border-bottom: 1px solid #2a2a2a;
    }

    & > div:first-of-type {
      padding-top: 0;
    }

    & > div:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

const SearchHeader = styled(Header)`
  position: relative;
  z-index: 100;
`;

const LectureCards = styled.div`
  margin-top: 28px;

  & > div:nth-of-type(n + 5) {
    margin-top: 1.6667vw;
  }

  & > div:not(:nth-of-type(4n)) {
    margin-right: 1.0417vw;
  }

  @media (max-width: 1440px) {
    & > div:not(:nth-of-type(4n)) {
      margin-right: 0;
    }
    & > div:nth-of-type(n + 5) {
      margin-top: 0;
    }

    & > div:not(:nth-of-type(3n)) {
      margin-right: 0.6944vw;
    }
    & > div:nth-of-type(n + 4) {
      margin-top: 1.6667vw;
    }
  }
  @media (max-width: 1000px) {
    & > div:not(:nth-of-type(3n)) {
      margin-right: 0;
    }
    & > div:nth-of-type(n + 4) {
      margin-top: 0;
    }

    & > div:not(:nth-of-type(2n)) {
      margin-right: 3vw;
    }
    & > div:nth-of-type(n + 3) {
      margin-top: 1.3889vw;
    }
  }

  @media ${responsive.tablet} {
    & > div:not(:nth-of-type(2n)) {
      margin-right: 0;
    }
    & > div:nth-of-type(n + 3) {
      margin-top: 0;
    }

    & > div:not(:nth-of-type(3n)) {
      margin-right: 1.3021vw;
    }
    & > div:nth-of-type(n + 4) {
      margin-top: 4.1667vw;
    }
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

const SearchSorts = styled(Sorts)`
  margin-left: auto;
  margin-top: 20px;

  @media ${responsive.mobile} {
    margin-top: 10px;
  }
`;

const SearchResultContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 62.5vw;
  margin: 0 auto;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 88.8889vw;
  }
`;

const SearchTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #ffffff;

  padding: 81px 0 53px 0;
  border-bottom: 1px solid #2a2a2a;

  @media ${responsive.tablet} {
    padding: 49px 0 53px;
  }

  @media ${responsive.mobile} {
    padding: 49px 0 33px;
  }
`;

export default SearchResultTemplate;
