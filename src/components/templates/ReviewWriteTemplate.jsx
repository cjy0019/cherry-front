import React from 'react';
import Header from '../molecules/header/Header';
import closeDark from '../../assets/img/close_dark.svg';
import styled from 'styled-components';
import palette from '../../style/palette';

const ReviewWriteTemplate = () => {
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

export default ReviewWriteTemplate;
