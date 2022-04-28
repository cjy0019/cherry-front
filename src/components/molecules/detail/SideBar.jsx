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
        <StyledOffLineBadge />
        <StyledBookMark markSize='40px' />
      </ThumbnailWrapper>

      <Badges>
        <SmallAgencyBadge>기관 groomedu</SmallAgencyBadge>
        <SmallAgencyBadge>강사 ZeroCho</SmallAgencyBadge>
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
  background-color: ${palette.backgroundBlack};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 376px;
  height: 512px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  padding: 48px 46px 46px 45px;

  @media ${responsive.tablet} {
    display: none;
  }
  @media ${responsive.mobile} {
    display: none;
  }
`;

const ThumbnailWrapper = styled.div`
  background-image: url(${thumbnail});
  width: 285px;
  height: 159px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;
`;

const StyledOffLineBadge = styled(OfflineBadge)`
  position: absolute;
  left: 5%;
  top: 10%;
`;

const StyledBookMark = styled(BookMarkButton)`
  position: absolute;
  top: 5%;
  right: 5%;
`;

const Badges = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.625rem;
  color: ${palette.textWhite};
  text-align: center;
  line-height: 1.5;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 39px;
`;

export default SideBar;
