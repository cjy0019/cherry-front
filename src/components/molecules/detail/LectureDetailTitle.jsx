import React from 'react';
import styled from 'styled-components';

import thumbnail from '../../../assets/img/thumbnail.svg';
import palette from '../../../style/palette';
import LargeAgencyBadge from '../../UI/atoms/badges/LargeAgencyBadge';
import starRed from '../../../assets/img/star1_red.svg';
import OfflineBadge from '../../UI/atoms/badges/OfflineBadge';
import BookMarkButton from '../../UI/atoms/buttons/BookMarkButton';
import { responsive } from '../../../style/responsive';
import OriginalLinkButton from '../../UI/atoms/buttons/OriginalLinkButton';
import ReviewButton from '../../UI/atoms/buttons/ReviewButton';

const LectureDetailTitle = () => {
  return (
    <Container>
      <FlexLeft>
        <img src={thumbnail} alt='강의 썸네일' />
        <StyledOffLineBadge />
        <StyledBookMarkButton />
      </FlexLeft>

      <FlexRight>
        <Title>웹 게임을 만들며 배우는 JavaScript (자바스크립트)</Title>
        <Badges>
          <LargeAgencyBadge>기관 groomedu</LargeAgencyBadge>
          <LargeAgencyBadge>강사 ZeroCho</LargeAgencyBadge>
        </Badges>

        <HashTags>
          <p>#수강가능</p>
          <p>#JavaScript</p>
          <p>#TypeScript</p>
        </HashTags>

        <StarPoints>
          <Points>4.5</Points>
          <Stars>
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
            <img src={starRed} alt='point' />
          </Stars>
          <Counter>(99+참여)</Counter>
        </StarPoints>

        <ButtonContainer>
          <OriginalLinkButton to='/' />
          <ReviewButton>리뷰 작성하기</ReviewButton>
        </ButtonContainer>
      </FlexRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 106px;
  gap: 7.4479vw;

  @media ${responsive.tablet} {
    padding: 0 35px;
  }

  @media ${responsive.mobile} {
    flex-direction: column;
    margin-top: 52px;
    width: 100%;
    padding: 0 20px;
  }
`;

const FlexLeft = styled.div`
  position: relative;
  width: 580px;
  border-radius: 10px;

  & > img {
    border-radius: 10px;
    width: 100%;
  }

  @media ${responsive.tablet} {
    width: 379px;
  }

  @media ${responsive.mobile} {
    width: 100%;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 922.9997px;
    height: 399.9994px;
    left: -191px;
    top: -85px;
    z-index: -1;

    background: radial-gradient(
      42.96% 98.15% at 50.05% 100%,
      rgba(255, 255, 255, 0.44) 9.29%,
      rgba(255, 255, 255, 0) 100%
    );
    @media (max-width: 1035px) {
      top: -113px;
    }
    @media (max-width: 930px) {
      height: 350px;
      width: 800px;
      top: -94px;
    }
    @media (max-width: 892px) {
      height: 300px;
      width: 800px;
      top: -50px;
    }

    @media ${responsive.tablet} {
      height: 300px;
      width: 700px;
      top: -94px;
    }
    @media (max-width: 665px) {
      display: none;
    }
    @media ${responsive.mobile} {
      display: none;
    }
  }
`;

const StyledOffLineBadge = styled(OfflineBadge)`
  position: absolute;
  left: 5%;
  top: 8%;
`;

const StyledBookMarkButton = styled(BookMarkButton)`
  position: absolute;
  right: 1.3021vw;
  top: 1.4583vw;
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
  width: 471px;

  @media ${responsive.tablet} {
    width: 247px;
  }

  @media ${responsive.mobile} {
    width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${palette.textWhite};

  @media ${responsive.tablet} {
    font-size: 1.125rem;
  }
`;

const Badges = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 28px;
`;

const HashTags = styled.div`
  display: flex;
  gap: 12px;
  font-size: 1rem;
  font-weight: 400;
  color: ${palette.text4};
  margin-top: 12px;

  @media ${responsive.tablet} {
    font-size: 0.625rem;
  }

  @media ${responsive.mobile} {
    font-size: 0.75rem;
  }
`;

const StarPoints = styled.div`
  display: flex;
  align-items: center;
  margin-top: 71px;

  @media ${responsive.tablet} {
    margin-top: 21px;
  }

  @media ${responsive.mobile} {
    margin-top: 32px;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 0.625vw;
  margin: 0 16px 0 10px;

  & > img {
    @media ${responsive.tablet} {
      width: 20px;
    }
  }
`;

const Points = styled.p`
  font-weight: 700;
  font-size: 1.75rem;
  color: ${palette.textWhite};
  padding-top: 8px;

  @media ${responsive.tablet} {
    font-size: 1.25rem;
  }
`;

const Counter = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  color: ${palette.text2};
  padding-top: 8px;

  @media ${responsive.tablet} {
    font-size: 0.875rem;
  }
`;

const ButtonContainer = styled.div`
  display: none;

  @media ${responsive.tablet} {
    display: flex;
    gap: 6px;
    margin-top: 8px;
  }

  @media ${responsive.mobile} {
    display: flex;
    gap: 6px;
    margin-top: 8px;
  }
`;

export default LectureDetailTitle;
