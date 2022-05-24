import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

import thumbnail from '../../../assets/img/thumbnail.svg';
import starRed from '../../../assets/img/star1_red.svg';

import LargeAgencyBadge from '../../UI/atoms/badges/LargeAgencyBadge';
import OfflineBadge from '../../UI/atoms/badges/OfflineBadge';
import BookMarkButton from '../../UI/atoms/buttons/BookMarkButton';
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
          <StyledLargeAgencyBadge>기관 groomedu</StyledLargeAgencyBadge>
          <StyledLargeAgencyBadge>강사 ZeroCho</StyledLargeAgencyBadge>
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
          <StyledOriginalLinkButton to='/' />
          <StyledReviewButton>리뷰 작성하기</StyledReviewButton>
        </ButtonContainer>
      </FlexRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 7.4479vw;

  padding: 0 15px;
  margin-top: 106px;

  @media ${responsive.tablet} {
    padding: 0 35px;
  }

  @media ${responsive.mobile} {
    flex-direction: column;
    gap: 0;

    margin-top: 52px;
    width: 100%;
    padding: 0 20px;
  }
`;

const FlexLeft = styled.div`
  position: relative;
  width: 30.2083vw;
  border-radius: 10px;

  & > img {
    display: block;
    width: 100%;

    object-fit: contain;
    border-radius: 10px;
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
    height: 420px;
    top: -32%;
    left: -330px;
    z-index: -1;

    background: radial-gradient(
      42.96% 98.15% at 50.05% 100%,
      rgba(255, 255, 255, 0.44) 9.29%,
      rgba(255, 255, 255, 0) 100%
    );

    @media (max-width: 1054px) {
      top: -42%;
    }
    @media (max-width: 975px) {
      top: -56%;
    }
    @media (max-width: 892px) {
      top: -57%;
    }

    @media (max-width: 800px) {
      top: -50%;
    }

    @media (max-width: 768px) {
      width: 550px;
      height: 300px;

      top: -39%;
      left: -100px;
    }

    @media (max-width: 700px) {
      width: 550px;

      left: -110px;
    }

    @media (max-width: 670px) {
      width: 480px;

      left: -90px;
    }

    @media (max-width: 630px) {
      width: 480px;

      left: -120px;
    }

    @media (max-width: 600px) {
      width: 430px;

      left: -90px;
    }

    @media (max-width: 570px) {
      width: 400px;
    }

    @media (max-width: 520px) {
      width: 350px;
    }

    @media (max-width: 490px) {
      width: 300px;
    }

    @media (max-width: 450px) {
      width: 250px;
    }

    @media ${responsive.mobile} {
      top: -40%;
      left: -30px;

      width: 100vw;
      height: 210px;
    }

    @media (max-width: 320px) {
      top: -30%;
      height: 160px;
    }

    @media (max-width: 267px) {
      display: none;
    }
  }
`;

const StyledOffLineBadge = styled(OfflineBadge)`
  position: absolute;
  left: 1.3021vw;
  top: 2.0833vw;

  font-size: 0.5729vw;
  padding: 0.4167vw 0.5208vw 0.3646vw;
`;

const StyledBookMarkButton = styled(BookMarkButton)`
  position: absolute;
  right: 1.3021vw;
  top: 1.4583vw;

  & > img {
    width: 2.5vw;

    @media ${responsive.tablet} {
      width: 5.2083vw;
    }
  }
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: break-all;

  width: 24.5313vw;

  @media ${responsive.tablet} {
    width: 247px;
  }

  @media ${responsive.mobile} {
    width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  font-size: 1.7708vw;
  font-weight: 700;
  line-height: 1.3;
  color: ${palette.textWhite};

  @media ${responsive.tablet} {
    font-size: 1.875vw;
  }

  @media ${responsive.mobile} {
    font-size: 1.25rem;
  }
`;

const Badges = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1.4583vw;

  @media ${responsive.tablet} {
    margin-top: 0.625vw;
  }

  @media (max-width: 500px) {
    display: none;
  }
  @media ${responsive.mobile} {
    display: flex;
    gap: 4px;

    margin-top: 12px;
  }
`;

const StyledLargeAgencyBadge = styled(LargeAgencyBadge)`
  font-size: 0.875rem;

  @media (max-width: 996px) {
    font-size: 0.625rem;
  }

  @media ${responsive.tablet} {
    font-size: 0.8333vw;
  }
`;

const HashTags = styled.div`
  display: flex;
  gap: 12px;

  font-size: 1rem;
  font-weight: 400;
  color: ${palette.text4};

  margin-top: 0.625vw;

  @media (max-width: 1045px) {
    font-size: 0.75rem;
  }

  @media (max-width: 805px) {
    font-size: 0.625rem;
  }

  @media ${responsive.tablet} {
    gap: 0.625vw;
    margin-top: 0.5208vw;
    font-size: 0.625vw;
  }

  @media ${responsive.mobile} {
    font-size: 0.75rem;
  }
`;

const StarPoints = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.6667vw;

  @media ${responsive.tablet} {
    margin-top: 1.0938vw;
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
    width: 1.6667vw;
    @media ${responsive.tablet} {
      width: 3.125vw;
    }

    @media ${responsive.mobile} {
      width: 20px;
    }
  }
`;

const Points = styled.p`
  font-weight: 700;
  font-size: 1.4583vw;
  color: ${palette.textWhite};

  padding-top: 8px;

  @media ${responsive.tablet} {
    font-size: 2.0833vw;
  }

  @media ${responsive.mobile} {
    font-size: 1.25rem;
  }
`;

const Counter = styled.p`
  font-weight: 400;
  font-size: 1.1458vw;

  color: ${palette.text2};
  padding-top: 8px;

  @media ${responsive.tablet} {
    font-size: 0.7292vw;
  }

  @media ${responsive.mobile} {
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

const StyledOriginalLinkButton = styled(OriginalLinkButton)`
  @media ${responsive.tablet} {
    height: 5.2083vw;
    font-size: 0.625vw;
  }
`;

const StyledReviewButton = styled(ReviewButton)`
  ${(props) =>
    props.dim &&
    css`
      background-color: ${palette.subNavy};
      color: ${palette.text6};
    `}

  @media ${responsive.tablet} {
    height: 5.2083vw;
    font-size: 0.625vw;
  }

  @media ${responsive.mobile} {
    width: 50%;
  }
`;

export default LectureDetailTitle;
