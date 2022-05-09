import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';

import Header from '../../molecules/header/Header';
import LectureCard from '../../UI/atoms/lectureCard/LectureCard';
import Sorts from '../../UI/atoms/sorts/Sorts';

const SearchResultTemplate = () => {
  return (
    <>
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
      </SearchResultContainer>
    </>
  );
};

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
    margin-top: 0;
    & > div {
      padding: 22px 0px;
      border-bottom: 1px solid #2a2a2a;
    }
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
