import React from 'react';
import styled from 'styled-components';

import lectureImg from '../../../../assets/img/lectureImg.png';
import palette from '../../../../style/palette';
import RegularAgencyBadge from '../badges/RegularAgencyBadge';
import OfflineBadge from '../badges/OfflineBadge';

import bookmark from '../../../../assets/img/bookmark.svg';
import bookmarkActive from '../../../../assets/img/bookmark_active.svg';

const Card = () => {
  return (
    <>
      <LectureCard>
        <LectureImg src={lectureImg} alt='제로초 자바스크립트 강의' />
        <LectureOfflineBadge />
        <BookmarkImg src={bookmark} alt='북마크 버튼'></BookmarkImg>
        <InfoContainer>
          <LectureInfo>
            <BadgeContainer>
              <Badge>기관 groomedu</Badge>
              <Badge>강사 groomedu</Badge>
            </BadgeContainer>
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
          </LectureInfo>
        </InfoContainer>
      </LectureCard>
    </>
  );
};

const LectureOfflineBadge = styled(OfflineBadge)`
  position: absolute;
  top: 34px;
  left: 32px;
`;

const BookmarkImg = styled.img`
  position: absolute;
  top: 24px;
  right: 32px;

  width: 40px;
  height: 40px;
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;

  & > div:nth-of-type(1) {
    padding-right: 12px;

    border-right: 1px solid rgba(196, 196, 196, 0.3);
  }

  & > div:nth-of-type(2) {
    padding-left: 12px;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AdditionalInfoContent = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${palette.textWhite};
  margin-right: auto;
`;

const AdditionalInfoTitle = styled.h4`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};

  opacity: 0.8;

  margin-right: 4px;
`;

const LectureTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${palette.textWhite};

  margin-top: 12px;
`;

const HashTagContainer = styled.div`
  margin-top: 30px;
`;

const BadgeContainer = styled.div``;

const HashTag = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};
  opacity: 0.8;

  margin-right: 8px;
`;

const Badge = styled(RegularAgencyBadge)`
  margin-right: 8px;
`;

const LectureImg = styled.img`
  width: 379px;
  height: 211px;
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 204px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 379px;
  height: 268px;

  border-radius: 0 0 8px 8px;

  background: linear-gradient(180deg, #212121 76.67%, #000000 126.25%);
`;

const LectureCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Card;
