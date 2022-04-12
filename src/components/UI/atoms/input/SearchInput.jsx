import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import searchRed from '../../../../assets/img/search_red.svg';
import closeRed from '../../../../assets/img/close_red.svg';
import { responsive } from '../../../../style/responsive';

// 메인 페이지에서 쓰이는경우 반드시 main 넣어주기
const SearchInput = ({ className, handleSubmit, searched, main }) => {
  return (
    <Form main={main} className={className} onSubmit={handleSubmit}>
      <Input main={main} placeholder='찾의시는 강의, 강사가 있으신가요?' />
      <SubmitButton searched={searched} type='submit' alt='submit' value='' />
    </Form>
  );
};

const Form = styled.form`
  display: inline-block;
  position: relative;

  margin-right: 16px;

  @media ${responsive.mobile} {
    ${({ main }) =>
      main &&
      css`
        margin-right: 0;
      `}
  }
`;

const Input = styled.input`
  all: unset;
  display: block;
  outline: none;

  /* width: 270px; */
  width: 270px;
  padding: 14px 50px 14px 20px;

  border-radius: 100px;
  border: none;

  background-color: ${palette.subNavy2};

  color: ${palette.textWhite};
  font-weight: 700;
  font-size: 0.875rem;
  font-family: 'Pretendard';

  &::placeholder {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${palette.textWhite};
    opacity: 0.6;
  }

  /* PC 뷰포트 985px 영역부터 로그인, 회원가입 텍스트가 SearchInput 부분을 침범하기 시작하므로 width 줄이기*/
  @media (min-width: 769px) and (max-width: 985px) {
    width: 27.411vw;
  }

  /* 태블릿 뷰포트 650px 영역부터 로그인, 회원가입 텍스트가 SearchInput 부분을 침범하기 시작하므로 width 줄이기*/
  @media ${responsive.tablet} {
    width: 35.156vw;

    ${({ main }) =>
      main &&
      css`
        width: 270px;
      `}
  }

  @media ${responsive.mobile} {
    // 메인 페이지 외 280px
    width: 48.837vw;
    padding: 13.5px 50px 13.5px 20px;

    // 메인 페이지 모바일인 경우
    ${({ main }) =>
      main &&
      css`
        width: 70.56vw;
        padding: 13.5px 50px 13.5px 16px; // 메인 320px
      `}
  }

  & > button {
    border: none;
  }
`;

const SubmitButton = styled.input`
  position: absolute;

  /* top:8px, right:9px */
  top: 8px;
  right: 9px;

  width: 28px;
  height: 28px;

  background-image: url(${searchRed});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;

  ${({ searched }) =>
    searched &&
    css`
      background-image: url(${closeRed});
    `}

  border: none;
`;

export default SearchInput;
