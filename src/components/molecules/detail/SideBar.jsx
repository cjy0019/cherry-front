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

const SideBar = ({ lectureDetailInfoData }) => {
  const { name, lectureCompany, lecturers, originLink, offline, bookmark } =
    lectureDetailInfoData;

  return (
    <Container>
      <ThumbnailWrapper>
        <img src={thumbnail} alt='섬네일' />
        {offline && <StyledOffLineBadge />}
        <StyledBookMark active={bookmark} />
      </ThumbnailWrapper>

      <Badges>
        <StyledSmallAgencyBadge>{`기관 ${lectureCompany}`}</StyledSmallAgencyBadge>
        {lecturers.map((lecture) => (
          <StyledSmallAgencyBadge>{`강사 ${lecture}`}</StyledSmallAgencyBadge>
        ))}
      </Badges>

      <Title>{name}</Title>
      <ButtonContainer>
        <StyledOriginalLink to={originLink} />
        <StyledReview>리뷰 작성완료</StyledReview>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 19.5833vw;
  height: 26.6667vw;

  background-color: ${palette.backgroundBlack};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);

  border-radius: 8px;
  padding: 0 2.3958vw;

  margin-top: 50px;

  @media (max-width: 1000px) {
    justify-content: center;

    padding: 20px 10px 20px 10px;
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
  width: 14.8438vw;

  background-color: antiquewhite;

  border-radius: 8px;

  & > img {
    display: block;
    width: 14.8438vw;
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
    width: 2.0833vw;
  }
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  margin-top: 1.0417vw;

  @media (max-width: 860px) {
    gap: 0.5208vw;
  }
`;

const StyledSmallAgencyBadge = styled(SmallAgencyBadge)`
  padding: 5px 3px;

  @media (max-width: 1140px) {
    font-size: 0.625rem;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.3542vw;
  color: ${palette.textWhite};
  text-align: center;

  line-height: 1.5;

  margin-top: 1.0417vw;
  word-break: keep-all;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625vw;

  width: 100%;

  margin-top: 2.0313vw;
`;

const StyledReview = styled(ReviewButton)`
  height: 2.0833vw;
`;

const StyledOriginalLink = styled(OriginalLinkButton)`
  height: 2.0833vw;
`;

export default SideBar;
