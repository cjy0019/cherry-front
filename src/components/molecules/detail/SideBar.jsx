import React from 'react';
import styled from 'styled-components';

import thumbnail from '../../../assets/img/thumbnail.svg';
import palette from '../../../style/palette';
import SmallAgencyBadge from '../../UI/atoms/badges/SmallAgencyBadge';
import OriginalLinkButton from '../../UI/atoms/buttons/OriginalLinkButton';
import ReviewButton from '../../UI/atoms/buttons/ReviewButton';
import ThumbnailWithBookMarkButton from './ThumbnailWithBookMarkButton';

const SideBar = () => {
  return (
    <Container>
      <ThumbnailWithBookMarkButton
        imgUrl={thumbnail}
        offLineTop='1.0938vw'
        offLineLeft='1.0417vw'
        markRight='0.8vw'
        markTop='0.5729vw'
        markSize='40px'
      />
      <BadgeContainer>
        <SmallAgencyBadge>기관 groomedu</SmallAgencyBadge>
        <SmallAgencyBadge>강사 ZeroCho</SmallAgencyBadge>
      </BadgeContainer>
      <Title>웹 게임을 만들며 배우는 JavaScript(자바스크립트)</Title>
      <ButtonContainer>
        <OriginalLinkButton to='/' />
        <ReviewButton>리뷰 작성하기</ReviewButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  margin-top: 3.3854vw;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  height: 512px;
  padding: 45px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${palette.backgroundBlack};
`;

const BadgeContainer = styled.div`
  display: flex;
  margin-top: 1.0417vw;
  gap: 4px;
`;

const Title = styled.h2`
  font-weight: 600;
  margin-top: 20px;
  font-size: 1.625rem;
  text-align: center;
  line-height: 1.5;
  color: ${palette.textWhite};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  margin-top: 39px;
`;

export default SideBar;
