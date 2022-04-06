import React from 'react';
import styled from 'styled-components';

import palette from '../../../style/palette';
import OfflineBadge from '../../UI/atoms/badges/OfflineBadge';
import BookMarkButton from '../../UI/atoms/buttons/BookMarkButton';
import LargeAgencyBadge from '../../UI/atoms/badges/LargeAgencyBadge';

import thumbnail from '../../../assets/img/thumbnail.svg';
import starRed from '../../../assets/img/star1_red.svg';

const LectureInfo = () => {
  return (
    <TitleContainer>
      <ThumbnailButton>
        <Thumbnail src={thumbnail} alt='썸네일 이미지' />
        <BookMarkButton absolute active={true} />
        <OfflineBadge absolute />
      </ThumbnailButton>
      <LectureInfoContainer>
        <LectureTitle>
          웹 게임을 만들며 배우는 JavaScipt(자바스크립트)
        </LectureTitle>

        <BadgeContainer>
          <LargeAgencyBadge>기관 groomedu</LargeAgencyBadge>
          <LargeAgencyBadge>강사 ZeroCho</LargeAgencyBadge>
        </BadgeContainer>
        <HashTagContainer>
          <p>#수강가능</p>
          <p>#JavaScript</p>
          <p>#JavaScript</p>
        </HashTagContainer>

        <ScoreContainer>
          <p>4.5</p>
          <StarImageContainer>
            <img src={starRed} alt='star' />
            <img src={starRed} alt='star' />
            <img src={starRed} alt='star' />
            <img src={starRed} alt='star' />
            <img src={starRed} alt='star' />
          </StarImageContainer>
          <p>(99+ 참여)</p>
        </ScoreContainer>
      </LectureInfoContainer>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${palette.backgroundBlack};
  gap: 7.4479vw;
  padding-top: 106px;
`;

const ThumbnailButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 30.2083vw;
  height: 17.2917vw;
`;

const Thumbnail = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const LectureInfoContainer = styled.div`
  padding-top: 10px;
`;

const LectureTitle = styled.h1`
  font-size: 1.4583vw;
  line-height: 1.5;
  width: 20.8333vw;
  font-weight: 700;
  color: ${palette.textWhite};
  word-break: break-all;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 28px;
`;

const HashTagContainer = styled.div`
  display: flex;
  gap: 12px;
  font-size: 0.8333vw;
  font-weight: 400;
  color: ${palette.text4};
  margin-top: 12px;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.6979vw;

  & > p:first-child {
    font-weight: 700;
    font-size: 1.4583vw;
    color: ${palette.textWhite};
    margin-right: 10px;
    padding-top: 10px;
  }

  & > p:last-child {
    color: ${palette.text2};
    font-size: 0.9375vw;
    font-weight: 400;
    margin-left: 16px;
    padding-top: 7px;
  }
`;

const StarImageContainer = styled.div`
  display: flex;
  gap: 0.625vw;

  & > img {
    width: 1.6667vw;
  }
`;

export default LectureInfo;
