import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import MobileLectureImg from '../../../../assets/img/mobileLectureImg.png';
import bookmark from '../../../../assets/img/bookmark.svg';
import bookmarkActive from '../../../../assets/img/bookmark_active.svg';

const MobileLectureCard = ({ className }) => {
  const [bookmarkIsClicked, setBookmarkIsClicked] = useState(false);

  function addBookmark(e) {
    setBookmarkIsClicked(!bookmarkIsClicked);
  }

  return (
    <Container className={className}>
      <LectureImgContainer>
        <LectureImg src={MobileLectureImg} alt='자바스크립트 강의' />
        <Bookmark bookmarkIsClicked={bookmarkIsClicked} onClick={addBookmark} />
        <BookmarkAdded bookmarkIsClicked={bookmarkIsClicked}>
          북마크 완료
        </BookmarkAdded>
        <OfflineBadge>OFF-LINE</OfflineBadge>
        <Price>17,000원</Price>
      </LectureImgContainer>
      <InfoContainer>
        <AgencyContainer>
          <AgencyBadge>
            <AgencyTitle>기관</AgencyTitle>
            <AgencyContent>groomedu</AgencyContent>
          </AgencyBadge>
          <AgencyBadge>
            <AgencyTitle>강사</AgencyTitle>
            <AgencyContent>ZeroCho</AgencyContent>
          </AgencyBadge>
        </AgencyContainer>
        <HashTagContainer>
          <HashTag>#수강가능</HashTag>
          <HashTag>#Javascript</HashTag>
        </HashTagContainer>
        <Title>웹 게임 만들며 배우는 Javascript(자바스크립트)</Title>
        <AdditionalInfoContainer>
          <AdditionalInfo>
            <InfoTitle>평점</InfoTitle>
            <InfoContent>측정중</InfoContent>
          </AdditionalInfo>
          <AdditionalInfo>
            <InfoTitle>리뷰</InfoTitle>
            <InfoContent>수집중</InfoContent>
          </AdditionalInfo>
        </AdditionalInfoContainer>
      </InfoContainer>
    </Container>
  );
};

const InfoContent = styled.span`
  font-weight: 600;
  font-size: 0.75rem;
  color: #ffffff;
`;

const InfoTitle = styled.span`
  font-weight: 300;
  font-size: 0.75rem;
  color: #ffffff;
  margin-right: 0.8333vw;
`;

const AdditionalInfo = styled.div`
  display: inline-block;
`;

const AdditionalInfoContainer = styled.div`
  margin-top: 4.4444vw;

  & > div:first-of-type {
    padding-right: 3.6111vw;
    border-right: 1px solid rgba(196, 196, 196, 0.3);
  }

  & > div:last-of-type {
    margin-left: 3.3333vw;
  }
`;

const Title = styled.h6`
  margin-top: 8px;

  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.9;

  line-height: 5vw;
`;

const HashTag = styled.span`
  font-size: 0.75rem;
  font-weight: 400;

  color: #b4b4b4;
`;

const HashTagContainer = styled.div`
  margin-top: 2.7778vw;

  & > span:not(:last-of-type) {
    margin-right: 1.1111vw;
  }
`;

const AgencyContent = styled.span`
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: 700;
`;

const AgencyTitle = styled.span`
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: 400;
  margin-right: 0.5556vw;
`;

const AgencyBadge = styled.div`
  display: inline-block;
  background-color: #000000;
  border-radius: 3px;

  padding: 1.3889vw 0.8333vw;
`;

const AgencyContainer = styled.div`
  & > div:not(:last-of-type) {
    margin-right: 0.8333vw;
  }
`;

const InfoContainer = styled.div`
  width: 46.6667vw;
  height: 36.1111vw;
`;

const Price = styled.p`
  position: absolute;
  bottom: 4.4444vw;
  left: 2.5vw;

  font-family: SpoqaHanSansNeo-Bold;
  font-size: 0.875rem;
  color: #ffffff;
`;

const OfflineBadge = styled.div`
  position: absolute;
  top: 2.2222vw;
  right: 1.6667vw;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 16.6667vw;
  height: 5.5556vw;

  background-color: #fbe54d;
  box-shadow: 0px 0px 6.50726px rgba(33, 33, 33, 0.12);
  border-radius: 81.3408px;

  color: #000000;
  font-weight: 700;
  font-size: 0.5rem;
`;

const BookmarkAdded = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 10;

  display: none;

  ${({ bookmarkIsClicked }) =>
    bookmarkIsClicked
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  justify-content: center;
  align-items: center;

  width: 38.8889vw;
  height: 8.8889vw;

  color: #ffffff;
  font-weight: 400;
  font-size: 12px;

  background-color: rgba(0, 0, 0, 0.86);
  border-radius: 0px 0px 6px 6px;
`;

const Bookmark = styled.button`
  all: unset;
  cursor: pointer;

  position: absolute;
  top: 2.2222vw;
  left: 2.2222vw;

  width: 11.1111vw;
  height: 11.1111vw;

  ${({ bookmarkIsClicked }) =>
    bookmarkIsClicked
      ? css`
          background-image: url(${bookmarkActive});
        `
      : css`
          background-image: url(${bookmark});
        `}

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LectureImg = styled.img`
  width: 38.8889vw;
  height: 38.8889vw;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 31.25%,
    rgba(0, 0, 0, 0.85) 100%
  );
  opacity: 0.8;
  border-radius: 6px;
`;

const LectureImgContainer = styled.div`
  position: relative;
  display: inline-block;

  width: 38.8889vw;
  height: 38.8889vw;

  margin-right: 3.3333vw;

  /* 디버깅 */
  /* background: tomato; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
`;

export default MobileLectureCard;
