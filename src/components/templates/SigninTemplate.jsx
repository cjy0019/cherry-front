import React from 'react';
import styled from 'styled-components';
import palette from '../../style/palette';
import SigninStep from '../molecules/signin/SigninStep';

const SigninTemplate = () => {
  return (
    <Container>
      <CenterBox>
        <SigninStep step='second' />

        <div>
          <p>간편하고 빠른</p>
          <p>소셜 로그인</p>
        </div>

        <div>
          <div>카카오로그인</div>
          <div>카카오로그인</div>
          <div>카카오로그인</div>
          <div>카카오로그인</div>
        </div>

        <button>뒤로가기</button>
      </CenterBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CenterBox = styled.div`
  width: 30%;
  background-color: ${palette.backgroundBlack};
`;

export default SigninTemplate;
