import React from 'react';
import styled from 'styled-components';

import palette from '../../../style/palette';
import OfflineBadge from '../../UI/atoms/badges/OfflineBadge';
import BookMarkButton from '../../UI/atoms/buttons/BookMarkButton';
import LargeAgencyBadge from '../../UI/atoms/badges/LargeAgencyBadge';
import OriginalLinkButton from '../../UI/atoms/buttons/OriginalLinkButton';
import ReviewButton from '../../UI/atoms/buttons/ReviewButton';

import thumbnail from '../../../assets/img/thumbnail.svg';
import starRed from '../../../assets/img/star1_red.svg';

import { responsive } from '../../../style/responsive';
import { useCalculateViewPort } from '../../../hooks/useCalulateViewport';

const LectureInfo = () => {
  const { viewPort } = useCalculateViewPort();

  return (
    <TitleContainer>
      <ThumbnailButton>
        <Thumbnail src={thumbnail} alt='썸네일 이미지' />
        <BookMarkButton absolute active={true} />
        <OfflineBadge absolute />
      </ThumbnailButton>

      <LectureInfoContainer>
        <LectureTitle>
          웹 게임을 만들며 배우는 JavaScipt (자바스크립트)
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
        {viewPort <= 768 && (
          <LinkButtonContainer>
            <OriginalLinkButton to='/'></OriginalLinkButton>
            <ReviewButton>리뷰 작성 하기</ReviewButton>
          </LinkButtonContainer>
        )}
      </LectureInfoContainer>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  width: 62.1354vw;
  display: flex;
  background-color: ${palette.backgroundBlack};
  gap: 7.4479vw;
  padding-top: 5.5208vw;

  @media ${responsive.mobile} {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
`;

const ThumbnailButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 30.2083vw;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    left: -9.2083vw;
    top: -4.42vw;
    width: 48.0729vw;
    height: 20.8333vw;
    background: radial-gradient(
      42.96% 98.15% at 50.05% 100%,
      rgba(255, 255, 255, 0.44) 9.29%,
      rgba(255, 255, 255, 0) 100%
    );
    @media ${responsive.tablet} {
      left: -100px;
      width: 625px;
      height: 271px;
      top: -65px;
    }
    @media ${responsive.mobile} {
      left: -100px;
      width: 500px;
      height: 231px;
      top: -57px;
    }
  }

  @media ${responsive.tablet} {
    width: 379px;
  }
  @media ${responsive.mobile} {
    width: 320px;
  }
`;

const Thumbnail = styled.img`
  display: block;
  border-radius: 10px;
  width: 100%;
`;

const LectureInfoContainer = styled.div`
  padding-top: 10px;

  @media ${responsive.tablet} {
    padding: 0;
  }
`;

const LectureTitle = styled.h1`
  font-size: 1.4583vw;
  line-height: 1.5;
  width: 20.8333vw;
  font-weight: 700;
  color: ${palette.textWhite};
  word-break: keep-all;

  @media ${responsive.tablet} {
    font-size: 18px;
    width: 247px;
  }
  @media ${responsive.mobile} {
    width: 275px;
    font-size: 19px;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1.4583vw;
  @media ${responsive.tablet} {
    gap: 4px;
    margin-top: 12px;
  }
`;

const HashTagContainer = styled.div`
  display: flex;
  gap: 12px;
  font-size: 0.8333vw;
  font-weight: 400;
  color: ${palette.text4};
  margin-top: 0.625vw;

  @media ${responsive.tablet} {
    font-size: 10px;
    gap: 4px;
    margin-top: 11px;
  }

  @media ${responsive.mobile} {
    font-size: 12px;
  }
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
    padding-top: 0.5208vw;

    @media ${responsive.tablet} {
      font-size: 23px;
    }
  }

  & > p:last-child {
    color: ${palette.text2};
    font-size: 0.9375vw;
    font-weight: 400;
    margin-left: 16px;
    padding-top: 0.3646vw;

    @media ${responsive.tablet} {
      font-size: 14px;
    }
  }

  @media ${responsive.tablet} {
    margin-top: 27px;
  }
`;

const StarImageContainer = styled.div`
  display: flex;
  gap: 0.625vw;

  & > img {
    width: 1.6667vw;

    @media ${responsive.tablet} {
      width: 20px;
    }
  }
`;

const LinkButtonContainer = styled.div`
  display: flex;
  gap: 6px;

  @media ${responsive.tablet} {
    margin-top: 8px;
  }

  @media ${responsive.mobile} {
    gap: 16px;
    margin-top: 15px;
  }
`;

export default LectureInfo;
