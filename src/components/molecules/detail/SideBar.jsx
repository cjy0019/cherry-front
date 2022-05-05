import React from 'react';
import styled from 'styled-components';

import thumbnail from '../../../assets/img/thumbnail.svg';
import palette from '../../../style/palette';
import OfflineBadge from '../../UI/atoms/badges/OfflineBadge';
import BookMarkButton from '../../UI/atoms/buttons/BookMarkButton';

import SmallAgencyBadge from '../../UI/atoms/badges/SmallAgencyBadge';
import OriginalLinkButton from '../../UI/atoms/buttons/OriginalLinkButton';
import ReviewButton from '../../UI/atoms/buttons/ReviewButton';
import { responsive } from '../../../style/responsive';

const SideBar = () => {
  return (
    <Container>
      <ThumbnailWrapper>
        <img src={thumbnail} alt='섬네일' />
        <StyledOffLineBadge />
        <StyledBookMark />
      </ThumbnailWrapper>

      <Badges>
        <StyledSmallAgencyBadge>기관 groomedu</StyledSmallAgencyBadge>
        <StyledSmallAgencyBadge>강사 ZeroCho</StyledSmallAgencyBadge>
      </Badges>

      <Title>웹 게임을 만들며 배우는 JavaScript(자바스크립트)</Title>
      <ButtonContainer>
        <OriginalLinkButton to='/' />
        <ReviewButton>리뷰 작성완료</ReviewButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 27%;
  height: 512px;

  background-color: ${palette.backgroundBlack};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);

  border-radius: 8px;

  margin-top: 50px;
  padding: 48px 2.3958vw 46px 2.3438vw;

  @media (max-width: 1000px) {
    justify-content: center;

    padding: 20px 10px 20px 10px;
  }

  @media (max-width: 920px) {
    height: 400px;
  }

  @media ${responsive.tablet} {
    display: none;
  }
  @media ${responsive.mobile} {
    display: none;
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 159px;

  border-radius: 8px;

  & > img {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 920px) {
    height: auto;
  }
`;

const StyledOffLineBadge = styled(OfflineBadge)`
  position: absolute;
  left: 5%;
  top: 7%;

  padding: 0.3125vw 0.4167vw 0.2604vw;

  font-size: 0.625vw;
`;

const StyledBookMark = styled(BookMarkButton)`
  position: absolute;
  top: 5%;
  right: 3%;

  & > img {
    width: 2.8646vw;
  }
`;

const Badges = styled.div`
  display: flex;
  gap: 4px;

  margin-top: 20px;

  @media (max-width: 860px) {
    gap: 0.5208vw;
  }
`;

const StyledSmallAgencyBadge = styled(SmallAgencyBadge)`
  padding: 5px 3px;

  & > span {
    @media (max-width: 880px) {
      font-size: 0.625rem;
    }
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.6667vw;
  color: ${palette.textWhite};
  text-align: center;

  line-height: 1.5;

  margin-top: 20px;
  word-break: keep-all;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;

  margin-top: 39px;
`;

export default SideBar;
