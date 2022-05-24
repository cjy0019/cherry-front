import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';
import starRed from '../../../assets/img/star1_red.svg';
import SatisfactionBadge from '../../UI/atoms/badges/SatisfactionBadge';
import JobBadge from '../../UI/atoms/badges/JobBadge';
import { responsive } from '../../../style/responsive';

const ReviewList = () => {
  const [selected, setSelected] = useState('asc');

  const handleClick = useCallback(
    (e) => {
      setSelected(e.target.dataset.name);
    },
    [selected],
  );

  return (
    <Container>
      <HeaderContainer>
        <h2>리뷰 23개</h2>
        <ButtonContainer>
          <FilteringButton
            selected={selected}
            data-name='asc'
            onClick={handleClick}>
            평점 ↑
          </FilteringButton>
          <FilteringButton
            selected={selected}
            data-name='desc'
            onClick={handleClick}>
            평점 ↓
          </FilteringButton>
          <FilteringButton
            selected={selected}
            data-name='latest'
            onClick={handleClick}>
            최신순
          </FilteringButton>
        </ButtonContainer>
      </HeaderContainer>

      <ReviewContainer>
        <LargePointsContainer>
          <FlexLeft>
            <img src={starRed} alt='평점' />
            <LargePoint>3.0</LargePoint>
            <Badges>
              <SatisfactionBadge>추천해요!</SatisfactionBadge>
              <SatisfactionBadge>매우 만족</SatisfactionBadge>
            </Badges>
          </FlexLeft>

          <Date>2022.2</Date>
        </LargePointsContainer>

        <Title>"퀄리티가 넘 좋습니다."</Title>

        <Advantages>
          <p>장점</p>
          <p>
            3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히
            배우고 싶네요! 엄청엄청 만족도 높습니다.
          </p>
        </Advantages>

        <Advantages>
          <p>단점</p>
          <p>
            3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히
            배우고 싶네요! 엄청엄청 만족도 높습니다. 말 유익하고 좋은
            시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.
            3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히
            배우고 싶네요! 엄청엄청 만족도 높습니다. 말 유익하고 좋은
            시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.
          </p>
        </Advantages>

        <BadgeWrapper>
          <JobBadge>프론트</JobBadge>
          <JobBadge>1년차</JobBadge>
        </BadgeWrapper>
      </ReviewContainer>

      <MoreLectureButton>강의 전체 보기 ↓</MoreLectureButton>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  margin-top: 60px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${palette.lineGray};

  @media ${responsive.mobile} {
    padding-bottom: 20px;
  }

  & > h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${palette.text2};

    @media ${responsive.mobile} {
      font-size: 1.125rem;
    }
  }
`;

const ReviewContainer = styled.div`
  border-bottom: 1px solid ${palette.lineGray};
  padding-bottom: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;

  @media ${responsive.mobile} {
    display: none;
  }
`;

const FilteringButton = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: right;
  color: ${palette.text5};

  ${(props) =>
    props['data-name'] === props.selected &&
    css`
      color: ${palette.textWhite};
    `}
`;

const LargePointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const FlexLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > img {
    width: 15.79px;
  }
`;

const LargePoint = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: ${palette.textWhite};
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Date = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  text-align: right;
  color: ${palette.text3};

  @media ${responsive.mobile} {
    display: none;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: ${palette.text2};

  margin-top: 28px;
`;

const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;

  & > p:first-child {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${palette.text2};
  }
  & > p:last-child {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${palette.text5};

    max-width: 700px;

    word-break: keep-all;
    line-height: 1.5;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
`;

const MoreLectureButton = styled.button`
  all: unset;

  display: none;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.textWhite};

  width: 100%;
  height: 44px;

  margin-top: 24px;

  background-color: ${palette.subNavy};

  border-radius: 3px;
  cursor: pointer;

  @media ${responsive.tablet} {
    display: flex;
    margin-bottom: 130px;
  }

  @media ${responsive.mobile} {
    display: flex;
    margin-bottom: 32px;
  }
`;

export default ReviewList;
