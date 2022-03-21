import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const Header = () => {
  return (
    <Container>
      <span>Cherry Pick</span>
      <a href='#'>로그인</a>
      <a href='#'>회원가입</a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 42px 360px 42px 359px;
  background: ${palette.backgroundBlack};
  justify-content: flex-end;

  font-weight: 400;
  font-size: 16px;
  color: ${palette.textWhite};

  & > span {
    margin-right: auto;
  }

  & > a {
    display: inline-block;
    color: ${palette.textWhite};
    text-decoration: none;
  }

  & > a:last-child {
    margin-left: 16px;
  }

  @media ${responsive.tablet} {
    padding: 41px 24px;
  }

  @media ${responsive.mobile} {
    padding: 22px 20px;

    & > a:last-child {
      margin-left: 12px;
    }
  }
`;

export default Header;
