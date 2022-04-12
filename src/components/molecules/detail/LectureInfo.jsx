import React from 'react';
import styled from 'styled-components';

import palette from '../../../style/palette';
import LargeAgencyBadge from '../../UI/atoms/badges/LargeAgencyBadge';
import OriginalLinkButton from '../../UI/atoms/buttons/OriginalLinkButton';
import ReviewButton from '../../UI/atoms/buttons/ReviewButton';

import thumbnail from '../../../assets/img/thumbnail.svg';
import starRed from '../../../assets/img/star1_red.svg';

import { responsive } from '../../../style/responsive';
import { useCalculateViewPort } from '../../../hooks/useCalulateViewport';
import ThumbnailWithBookMarkButton from './ThumbnailWithBookMarkButton';

const LectureInfo = () => {
  const { viewPort } = useCalculateViewPort();
  return (
    <TitleContainer>
      <ThumbnailWithBookMarkButton
        offLineTop='1.8229vw'
        offLineLeft='1.3021vw'
        markRight='1.3021vw'
        markTop='1.5625vw'
        mainTitle
        imgUrl={thumbnail}
      />

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
  display: flex;
  width: 100%;
  background-color: ${palette.backgroundBlack};
  align-items: center;
  justify-content: center;
  gap: 7.4479vw;
  padding-top: 106px;

  @media ${responsive.mobile} {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
  }
`;

const LectureInfoContainer = styled.div`
  @media ${responsive.tablet} {
    padding: 0;
  }
`;

const LectureTitle = styled.h1`
  font-size: 1.75rem;
  line-height: 1.5;
  width: 400px;
  font-weight: 700;
  color: ${palette.textWhite};
  word-break: keep-all;

  @media ${responsive.wideTablet} {
    font-size: 1.5rem;
  }

  @media ${responsive.tablet} {
    font-size: 1.125rem;
    width: 247px;
  }
  @media ${responsive.mobile} {
    width: 275px;
    font-size: 1.1875rem;
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
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 400;
  color: ${palette.text4};

  @media ${responsive.wideTablet} {
    font-size: 0.8125rem;
  }

  @media ${responsive.tablet} {
    font-size: 0.625rem;
    gap: 4px;
    margin-top: 11px;
  }

  @media ${responsive.mobile} {
    font-size: 0.75rem;
    margin-top: 12px;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.5938vw;

  @media ${responsive.tablet} {
    margin-top: 27px;
  }
  @media ${responsive.mobile} {
    margin-top: 32px;
  }

  /* 점수 ex) 4.5 */
  & > p:first-child {
    font-weight: 700;
    font-size: 1.75rem;
    color: ${palette.textWhite};
    padding-top: 7px;
    margin-right: 10px;

    @media ${responsive.wideTablet} {
      font-size: 1.5rem;
    }

    @media ${responsive.tablet} {
      font-size: 1.25rem;
    }
    @media ${responsive.mobile} {
      font-size: 1.25rem;
    }
  }

  /* ex) (99+ 참여) */
  & > p:last-child {
    color: ${palette.text2};
    font-size: 1.125rem;
    font-weight: 400;
    margin-left: 16px;

    @media ${responsive.wideTablet} {
      font-size: 14px;
    }
    @media ${responsive.mobile} {
      font-size: 14px;
    }
  }
`;

const StarImageContainer = styled.div`
  display: flex;
  gap: 12px;
  & > img {
    width: 32.0006px;

    @media ${responsive.tablet} {
      width: 20px;
    }
    @media ${responsive.mobile} {
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
