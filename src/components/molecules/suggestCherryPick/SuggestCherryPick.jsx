import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SuggestCherryPick = () => {
  return (
    <Container>
      <Title>누구나 첫 리뷰 작성하면 전체 열람 가능</Title>
      <Info>
        들을까 말까 한 강의들을 계속 비교하느라 지치셨죠?
        <br /> 체리픽은 익명으로 솔직하게 리뷰를 남기고, 강의 퀄리티를 판단할 수
        있습니다.
      </Info>
      <StartButton to='#'>체리픽 시작하기</StartButton>
    </Container>
  );
};

const StartButton = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 160px;
  height: 48px;

  background-color: #e72847;
  box-shadow: 0px 0px 12px rgba(231, 40, 71, 0.5);
  border-radius: 8px;

  font-weight: 700;
  font-size: 14px;
  color: #ffffff;

  margin-top: 32px;
`;

const Info = styled.p`
  color: #b4b4b4;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  opacity: 0.6;

  line-height: 25px;

  margin-top: 20px;
`;

const Title = styled.h2`
  all: unset;

  color: #b4b4b4;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 340px;
  margin-top: 80px;

  background-color: #15161d;
`;

export default SuggestCherryPick;
