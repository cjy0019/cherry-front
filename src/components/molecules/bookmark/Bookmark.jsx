import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import LectureCard from '../../UI/atoms/lectureCard/LectureCard';
import MobileLectureCard from '../../UI/atoms/mobileLectureCard/MobileLectureCard';
import Sorts from '../../UI/atoms/sorts/Sorts';

const Bookmark = ({ className }) => {
  return (
    <Container className={className}>
      <JustifyCenter>
        <Header>
          <Count>전체(99)</Count>
          <BookmarkSorts />
        </Header>
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
        <MoreLectureButton>더보기 ↓</MoreLectureButton>
      </JustifyCenter>
    </Container>
  );
};

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

const MoreLectureButton = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 37.5vw;
  height: 44px;

  background-color: #1f2026;
  border-radius: 3px;

  margin: 0 auto;
  margin-top: 70px;

  color: #ffffff;
  font-weight: 400;
  font-size: 12px;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 87.5vw;
  }
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

const JustifyCenter = styled.div`
  width: 62.5vw;

  margin: 0 auto;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 88.8889vw;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 30px;
`;

const BookmarkSorts = styled(Sorts)``;

const Count = styled.p`
  font-weight: 700;
  font-size: 1.375rem;
  color: #ffffff;
  opacity: 0.9;

  @media ${responsive.mobile} {
    font-size: 1rem;
  }
`;

const Container = styled.div``;

export default Bookmark;
