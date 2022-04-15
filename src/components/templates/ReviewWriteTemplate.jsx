import React, { useState } from 'react';
import closeDark from '../../assets/img/close_dark.svg';
import styled from 'styled-components';
import palette from '../../style/palette';

import SatisfactionButton from '../UI/atoms/buttons/SatisfactionButton';
import NumberBadge from '../UI/atoms/badges/NumberBadge';
import emptyStar from '../../assets/img/star0_red.svg';
import halfStar from '../../assets/img/star0.5_red.svg';
import fullStar from '../../assets/img/star1_red.svg';

import smileRed from '../../assets/img/smile_red.svg';
import smileGrey from '../../assets/img/smile_grey.svg';

const starImageUrl = {
  emptyStar,
  halfStar,
  fullStar,
};

const ReviewWriteTemplate = () => {
  // 1번 평점 state
  const [lockStarPoints, setLockStarPoints] = useState(false);
  const [starImagesArr, setStarImagesArr] = useState(
    Array.from({ length: 5 }, () => starImageUrl.emptyStar),
  );
  const [isOverHalf, setIsOverHalf] = useState(false);
  const [starPoint, setStarPoint] = useState(0.5);

  // 3번 만족도 선택 state
  const [satisfaction, setSatisfaction] = useState('');

  const handleMouseMove = (e) => {
    if (lockStarPoints) return;

    const currentPoint = e.nativeEvent.offsetX;
    const { point } = e.target.dataset;
    const starPointIndex = parseInt(point) - 1;
    const [starImageClientRect] = e.target.getClientRects();
    const starImageWidth = starImageClientRect.width;
    setIsOverHalf(starImageWidth / 2 < currentPoint);

    setStarImagesArr(
      starImagesArr.map((v, index) => {
        if (index < starPointIndex) {
          return starImageUrl.fullStar;
        } else if (index === starPointIndex) {
          if (isOverHalf) return starImageUrl.fullStar;
          else return starImageUrl.halfStar;
        } else {
          return starImageUrl.emptyStar;
        }
      }),
    );
  };

  const pickStarPoint = (e) => {
    const { point } = e.target.dataset;
    setLockStarPoints(!lockStarPoints);

    if (isOverHalf) setStarPoint(point);
    else setStarPoint(point - 0.5);
  };

  const selectSatisfaction = (e) => {
    const { name } = e.target.dataset;
    setSatisfaction(name);
  };

  return (
    <Container>
      <CenterBox>
        <TitleContainer>
          <Title>리뷰 작성하기</Title>
          <img src={closeDark} alt='닫기 버튼' />
        </TitleContainer>
        <SmallTextWrapper>
          <p>- 익명으로 등록되며, 무단 홍보/비방 글은 삭제될 수 있습니다.</p>
          <p>- 작성된 리뷰는 심사과정을 거친후 게재됩니다.</p>
        </SmallTextWrapper>
        <LectureTitle>
          강의 - 웹 게임을 만들며 배우는 JavaScript(자바스크립트)
        </LectureTitle>

        <QuestionContainer>
          <NumberBadge>1</NumberBadge>
          <p>리뷰 평점(필수)</p>
          <StarContainer onMouseMove={handleMouseMove} onClick={pickStarPoint}>
            {starImagesArr.map((url, i) => (
              <img src={url} key={i} data-point={String(i + 1)} />
            ))}
          </StarContainer>
          <p>{starPoint}</p>
          <DescText>
            별점을 <span>Click</span> 해주세요!
          </DescText>
        </QuestionContainer>

        <QuestionContainer>
          <NumberBadge>2</NumberBadge>
          <p>강의를 추천하시나요?(필수)</p>
          <SmileButtonContainer>
            <button>
              <img src={smileRed} alt='추천합니다' />
            </button>
            <button>
              <img src={smileGrey} alt='추천하지 않습니다' />
            </button>
          </SmileButtonContainer>
        </QuestionContainer>

        <QuestionContainer>
          <NumberBadge>3</NumberBadge>
          <p>가격 대비 만족도(필수)</p>
          <SatisfactionButtonContainer>
            <SatisfactionButton
              handleClick={selectSatisfaction}
              selected={satisfaction}>
              매우 만족
            </SatisfactionButton>
            <SatisfactionButton
              handleClick={selectSatisfaction}
              selected={satisfaction}>
              만족
            </SatisfactionButton>
            <SatisfactionButton
              handleClick={selectSatisfaction}
              selected={satisfaction}>
              보통
            </SatisfactionButton>
            <SatisfactionButton
              handleClick={selectSatisfaction}
              selected={satisfaction}>
              그저 그럼
            </SatisfactionButton>
          </SatisfactionButtonContainer>
        </QuestionContainer>
      </CenterBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${palette.backgroundBlack};
  height: 100vh;
  padding-top: 40px;
`;

const CenterBox = styled.div`
  width: 60%;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  color: ${palette.text2};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.lineGray};
  padding-bottom: 24px;
`;

const SmallTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.text5};
  margin-top: 20px;
`;

const LectureTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: ${palette.text2};
  margin-top: 40px;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  font-size: 1rem;
  font-weight: 400;
  color: ${palette.text2};

  & > p:nth-of-type(1) {
    margin-left: 12px;
  }
`;

const StarContainer = styled.div`
  display: flex;
  margin: 0 12px 0 24px;
  height: 40px;

  & > img {
    width: 35px;
  }
`;

const DescText = styled.p`
  color: ${palette.text6};
  font-size: 0.75rem;
  margin-left: 10px;
  span {
    color: ${palette.pointRed};
  }
`;

const SmileButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 24px;
  & > button {
    all: unset;
    cursor: pointer;
  }

  & > button:hover {
    transform: translateY(-10%);
    transition: 0.3s;
  }
`;

const SatisfactionButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 24px;
`;

export default ReviewWriteTemplate;
