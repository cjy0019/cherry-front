import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import smileRed from '../../assets/img/smile_red.svg';
import smileGrey from '../../assets/img/smile.svg';
import sadRed from '../../assets/img/sad.svg';
import sadGrey from '../../assets/img/sad_active.svg';
import emptyStar from '../../assets/img/star0_red.svg';
import halfStar from '../../assets/img/star0.5_red.svg';
import fullStar from '../../assets/img/star1_red.svg';
import closeDark from '../../assets/img/close_dark.svg';

import SatisfactionButton from '../UI/atoms/buttons/SatisfactionButton';
import NumberBadge from '../UI/atoms/badges/NumberBadge';
import palette from '../../style/palette';
import ReviewOneLineInput from '../UI/atoms/input/ReviewOneLineInput';
import ReviewProsConsTextarea from '../UI/atoms/input/ReviewProsConsTextarea';
import SaveButton from '../UI/atoms/buttons/SaveButton';
import Footer from '../molecules/footer/Footer';
import { responsive } from '../../style/responsive';

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
  const [starPoint, setStarPoint] = useState(0);

  // 2번 추천 state
  const [recommend, setRecommend] = useState('recommendation');

  // 3번 만족도 선택 state
  const [satisfaction, setSatisfaction] = useState('매우 만족');

  // 4번 한줄평 state
  const [oneLineReview, setOneLineReview] = useState('');

  // 5번 장점 state
  const [advantage, setAdvantage] = useState('');

  // 6번 단점 state
  const [disadvantage, setDisadvantage] = useState('');

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

  const writeOneLineReview = (e) => {
    setOneLineReview(e.target.value);
  };

  const selectRecommendation = (e) => {
    const { name } = e.currentTarget.dataset;
    setRecommend(name);
  };

  const selectSatisfaction = (e) => {
    const { name } = e.target.dataset;
    setSatisfaction(name);
  };

  const writeAdvantage = (e) => {
    setAdvantage(e.target.value);
  };

  const writeDisadvantage = (e) => {
    setDisadvantage(e.target.value);
  };

  const checkQuestionIsFull = () => {
    if (
      starPoint > 0 &&
      recommend &&
      satisfaction &&
      oneLineReview.length > 0 &&
      advantage.length > 0 &&
      disadvantage.length > 0
    ) {
      return true;
    } else return false;
  };

  return (
    <>
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
            <AlignInline>
              <NumberBadge>1</NumberBadge>
              <p>리뷰 평점(필수)</p>
            </AlignInline>
            <AlignInline>
              <StarContainer
                onMouseMove={handleMouseMove}
                onClick={pickStarPoint}>
                {starImagesArr.map((url, i) => (
                  <img src={url} key={i} data-point={String(i + 1)} />
                ))}
              </StarContainer>
              <p>{starPoint}</p>
            </AlignInline>
          </QuestionContainer>

          <QuestionContainer>
            <AlignInline>
              <NumberBadge>2</NumberBadge>
              <p>강의를 추천하시나요?(필수)</p>
            </AlignInline>
            <SmileButtonContainer>
              <button data-name='recommendation' onClick={selectRecommendation}>
                <img
                  src={recommend === 'recommendation' ? smileRed : smileGrey}
                  alt='추천합니다'
                />
              </button>
              <button
                data-name='non-recommendation'
                onClick={selectRecommendation}>
                <img
                  src={recommend === 'non-recommendation' ? sadRed : sadGrey}
                  alt='추천하지 않습니다'
                />
              </button>
            </SmileButtonContainer>
          </QuestionContainer>

          <QuestionContainer>
            <AlignInline>
              <NumberBadge>3</NumberBadge>
              <p>가격 대비 만족도(필수)</p>
            </AlignInline>
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

          <ColQuestionContainer>
            <QuestionTitleContainer>
              <NumberBadge>4</NumberBadge>
              <p>한 줄 평이 궁금해요(필수)</p>
            </QuestionTitleContainer>
            <ReviewOneLineInput handleChange={writeOneLineReview} />
          </ColQuestionContainer>

          <AdvantagesContainer>
            <BetweenWrapper>
              <FlexWrapper>
                <NumberBadge>5</NumberBadge>
                <p>장점(필수)</p>
              </FlexWrapper>
              <TextCount>
                <span>{advantage.length}/</span>
                <span>500</span>
              </TextCount>
            </BetweenWrapper>
            <ReviewProsConsTextarea handleChange={writeAdvantage} />
          </AdvantagesContainer>

          <AdvantagesContainer mb>
            <BetweenWrapper>
              <FlexWrapper>
                <NumberBadge>6</NumberBadge>
                <p>단점(필수)</p>
              </FlexWrapper>
              <TextCount>
                <span>{disadvantage.length}/</span>
                <span>500</span>
              </TextCount>
            </BetweenWrapper>
            <ReviewProsConsTextarea handleChange={writeDisadvantage} />
          </AdvantagesContainer>

          <SaveButton disabled={!checkQuestionIsFull()}>저장하기</SaveButton>
        </CenterBox>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${palette.backgroundBlack};
  padding-top: 40px;
`;

const CenterBox = styled.div`
  width: 60%;
  padding: 43px 0 156px;

  @media ${responsive.tablet} {
    width: 100%;
    padding: 49px 24px 132px 24px;
  }

  @media ${responsive.mobile} {
    width: 100%;
    padding: 49px 20px 32px;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${palette.text2};
  line-height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 24px;

  border-bottom: 1px solid ${palette.lineGray};
`;

const SmallTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${palette.text5};

  margin-top: 20px;

  @media ${responsive.mobile} {
    font-size: 0.75rem;
  }
`;

const LectureTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${palette.text2};

  line-height: 1.5;

  margin-top: 40px;

  @media ${responsive.mobile} {
    word-break: keep-all;
  }
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

  @media ${responsive.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    margin-top: 32px;
  }
`;

const AlignInline = styled.div`
  display: flex;
  align-items: center;

  & > p:nth-of-type(1) {
    margin-left: 12px;
  }
`;

const StarContainer = styled.div`
  display: flex;
  height: 40px;

  margin: 0 12px 0 24px;

  cursor: pointer;

  & > img {
    width: 32px;
  }

  @media ${responsive.mobile} {
    margin: 0 0 0 16%;
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
    transition: 0.1s;
  }

  @media ${responsive.mobile} {
    margin-left: 11%;
  }
`;

const SatisfactionButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 24px;

  @media ${responsive.mobile} {
    margin-left: 10%;
  }
`;

const ColQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const QuestionTitleContainer = styled.div`
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

const AdvantagesContainer = styled.div`
  margin-top: 36px;

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: 52px;
    `}
`;

const BetweenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 400;
  color: ${palette.text2};

  & > p:nth-of-type(1) {
    margin-left: 12px;
  }
`;

const TextCount = styled.div`
  font-size: 0.8125rem;

  & > span:nth-of-type(1) {
    color: ${palette.text2};
  }
  & > span:nth-of-type(2) {
    color: ${palette.text5};
  }
`;

export default ReviewWriteTemplate;
