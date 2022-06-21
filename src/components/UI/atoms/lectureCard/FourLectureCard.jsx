import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../../style/responsive';

import MobileLectureCard from '../mobileLectureCard/MobileLectureCard';

import lectureImg from '../../../../assets/img/lectureImg.png';
import onBookmark from '../../../../assets/img/bookmark_active.svg';
import offBookmark from '../../../../assets/img/bookmark.svg';
import palette from '../../../../style/palette';
import RegularAgencyBadge from '../badges/RegularAgencyBadge';
import OfflineBadge from '../badges/OfflineBadge';

const FourLectureCard = ({ className, lectureData }) => {
  const [isActiveBookmark, setIsActiveBookmark] = useState(false);

  function addBookmark(e) {
    setIsActiveBookmark(!isActiveBookmark);
  }

  return (
    <LectureCard className={className}>
      <LectureImg src={lectureImg} alt='제로초 자바스크립트 강의' />
      <LectureOfflineBadge />
      <Bookmark isActiveBookmark={isActiveBookmark} onClick={addBookmark} />
      <BookmarkAdded isActiveBookmark={isActiveBookmark}>
        북마크 완료!
      </BookmarkAdded>
      <InfoContainer>
        <AgencyBadgeContainer>
          <AgencyBadge>기관 groomedu</AgencyBadge>
          <AgencyBadge>강사 groomedu</AgencyBadge>
        </AgencyBadgeContainer>
        <HashTagContainer>
          <HashTag>#수강가능</HashTag>
          <HashTag>#Javascript</HashTag>
        </HashTagContainer>
        <LectureTitle>
          웹 게임을 만들며 배우는 JavaScript(자바스크립트)
        </LectureTitle>
        <AdditionalInfoContainer>
          <AdditionalInfoContent>무료</AdditionalInfoContent>
          <AdditionalInfo>
            <AdditionalInfoTitle>평점</AdditionalInfoTitle>
            <AdditionalInfoContent>측정중</AdditionalInfoContent>
          </AdditionalInfo>
          <AdditionalInfo>
            <AdditionalInfoTitle>리뷰</AdditionalInfoTitle>
            <AdditionalInfoContent>수집중</AdditionalInfoContent>
          </AdditionalInfo>
        </AdditionalInfoContainer>
      </InfoContainer>
    </LectureCard>
  );
};

const AgencyBadgeContainer = styled.div`
  & > div:first-of-type {
    margin-right: 0.4167vw;
  }
`;

const LectureOfflineBadge = styled(OfflineBadge)`
  position: absolute;

  top: 0.7292vw;
  left: 1.0417vw;
  padding: 0.3125vw 0.4167vw 0.2604vw;
  font-size: 0.625rem;

  /* 1440px 부터 한줄에 카드 4개 존재 불가능 */
  @media (max-width: 1440px) {
    padding: 0.3225vw 0.43vw 0.2687vw;

    top: 1.8274vw;
    left: 1.7199vw;
  }
  @media (max-width: 1000px) {
    padding: 0.4644vw 0.6192vw 0.3869vw;

    top: 2.6315vw;
    left: 2.4767vw;
  }

  @media ${responsive.tablet} {
    /* 반응형 변경하기 */
    top: 1.17vw;
    left: 1.04vw;
    padding: 4px 6px 3px;
  }

  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    top: 1.1664vw;
    left: 1.0369vw;
  }
`;

const BookmarkAdded = styled.div`
  position: absolute;
  top: 6.6146vw;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 14.8438vw;
  height: 1.6667vw;

  background: rgba(0, 0, 0, 0.95);

  font-weight: 400;
  font-size: 0.75rem;

  color: #ffffff;

  ${({ isActiveBookmark }) =>
    isActiveBookmark
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  @media (max-width: 1440px) {
    width: 20.3706vw;
    height: 2.7778vw;
    top: 9.7222vw;
  }
  @media (max-width: 1000px) {
    width: 29.3337vw;
    height: 4vw;
    top: 14vw;
  }

  @media ${responsive.tablet} {
    width: 30.21vw;
    height: 4.1667vw;

    top: 13.0208vw;
  }

  @media (max-width: 666px) {
    width: 44.9775vw;
    height: 4.7544vw;

    top: 21.021vw;
  }
`;

const Bookmark = styled.button`
  all: unset;

  cursor: pointer;
  position: absolute;

  z-index: 10;

  ${({ isActiveBookmark }) =>
    isActiveBookmark
      ? css`
          background-image: url(${onBookmark});
        `
      : css`
          background-image: url(${offBookmark});
        `}
  background-repeat: no-repeat;
  background-size: cover;

  top: 0.7292vw;
  right: 1.0417vw;

  width: 1.4583vw;
  height: 1.4583vw;

  @media (max-width: 1440px) {
    top: 1.2899vw;
    right: 1.7199vw;

    width: 2.1462vw;
    height: 2.1462vw;
  }
  @media (max-width: 1000px) {
    top: 1.8575vw;
    right: 2.4767vw;

    width: 3.0905vw;
    height: 3.0905vw;
  }

  @media ${responsive.tablet} {
    top: 1.17vw;
    right: 1.04vw;

    width: 28px;
    height: 28px;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    top: 1.1664vw;
    right: 1.0369vw;
  }
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;

  & > div:nth-of-type(1) {
    padding-right: 8px;

    border-right: 1px solid rgba(196, 196, 196, 0.3);
  }

  & > div:nth-of-type(2) {
    padding-left: 8px;
  }

  @media ${responsive.tablet} {
    & > div:nth-of-type(1) {
      padding-right: 8px;

      border-right: 1px solid rgba(196, 196, 196, 0.3);
    }

    & > div:nth-of-type(2) {
      padding-left: 8px;
    }
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AdditionalInfoContent = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  color: ${palette.textWhite};
  margin-right: auto;

  @media ${responsive.tablet} {
    font-size: 0.75rem;
  }
`;

const AdditionalInfoTitle = styled.h4`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.textWhite};

  opacity: 0.8;

  margin-right: 2px;

  @media ${responsive.tablet} {
    font-size: 0.625rem;
    margin-right: 2px;
  }
`;

const LectureTitle = styled.h3`
  font-weight: 700;
  font-size: 0.875rem;
  color: ${palette.textWhite};

  margin-top: 0.4167vw;

  @media (max-width: 1440px) {
    margin-top: 0.6449vw;
  }
  @media (max-width: 1000px) {
    margin-top: 0.9287vw;
  }

  @media ${responsive.tablet} {
    font-size: 0.75rem;
    margin-top: 0.91vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    margin-top: 1.4243vw;
  }
`;

const HashTagContainer = styled.div`
  margin-top: auto;

  @media (max-width: 1440px) {
    margin-top: 1.6124vw;
    margin-top: auto;
  }
  @media (max-width: 1000px) {
    margin-top: 2.3219vw;
    margin-top: auto;
  }

  @media ${responsive.tablet} {
    margin-top: 2.11vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    margin-top: 3.5607vw;
  }
`;

const HashTag = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.textWhite};
  opacity: 0.8;

  margin-right: 8px;

  /* 1440px 부터 폰트 크기 줄여줌 */
  @media (max-width: 1440px) {
    font-size: 0.75rem;
    margin-right: 0.5556vw;
  }
  @media (max-width: 1000px) {
    font-size: 0.75rem;
    margin-right: 0.8001vw;
  }

  @media ${responsive.tablet} {
    font-size: 0.625rem;
    margin-right: 4px;
  }
`;

const AgencyBadge = styled(RegularAgencyBadge)`
  padding: 0.3125vw 0.2083vw;

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1440px) {
    padding: 0.43vw;
    font-size: 0.6875rem;
  }
  @media (max-width: 1000px) {
    padding: 0.6192vw;
    font-size: 0.6875rem;
  }

  @media ${responsive.tablet} {
    margin-right: 0.52vw;
    padding: 0.64vw 0.42vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    margin-right: 1.1994vw;
    padding: 0.9496vw;
  }
`;

const LectureImg = styled.img`
  width: 14.8438vw;
  height: 8.2813vw;

  border-radius: 8px 8px 0 0;

  @media (max-width: 1440px) {
    width: 20.3706vw;
    height: 11.3406vw;
  }
  @media (max-width: 1000px) {
    width: 29.3337vw;
    height: 16.3305vw;
  }

  @media ${responsive.tablet} {
    width: 30.21vw;
    height: 16.8vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    width: 44.9775vw;
    height: 25.0445vw;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 14.8438vw;
  height: 10.4688vw;

  padding: 1.0417vw;

  border-radius: 0 0 8px 8px;
  background: linear-gradient(180deg, #212121 76.67%, #000000 126.25%);

  @media (max-width: 1440px) {
    width: 20.3706vw;
    height: 14.4059vw;
    padding: 1.7184vw;
  }
  @media (max-width: 1000px) {
    width: 29.3337vw;
    height: 20.7445vw;
    padding: 2.4745vw;
  }

  @media ${responsive.tablet} {
    width: 30.21vw;
    height: 21.22vw;
    padding: 1.6276vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    width: 44.9775vw;
    height: 31.8123vw;
    padding: 3.7538vw;
  }
`;

const LectureCard = styled.div`
  cursor: pointer;

  position: relative;
  display: inline-flex;
  flex-direction: column;

  @media ${responsive.mobile} {
    display: none;
  }
`;

export default FourLectureCard;
