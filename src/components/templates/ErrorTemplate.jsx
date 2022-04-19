import React from 'react';
import styled from 'styled-components';
import palette from '../../style/palette';
import RetryButton from '../UI/atoms/buttons/RetryButton';

const ErrorTemplate = () => {
  return (
    <Container>
      <TextContainer>
        <Oops>
          <span>😉</span>oops!
        </Oops>
        <NotFound>페이지를 찾을 수 없습니다</NotFound>
        <CheckInternet>
          인터넷 연결을 확인하거나 나중에 다시 시도하세요.
        </CheckInternet>
        <RetryButton />
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.text2};
`;

const Oops = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 48px;

  & > span {
    font-size: 2.1875rem;
  }
`;

const NotFound = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CheckInternet = styled.p`
  font-size: 0.875rem;
  margin-bottom: 36px;
`;

export default ErrorTemplate;
