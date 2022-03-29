import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import searchRed from '../../../../assets/img/search_red.svg';
import closeRed from '../../../../assets/img/close_red.svg';
import { responsive } from '../../../../style/responsive';

// 메인 페이지에서 쓰이는경우 반드시 main 넣어주기
const SearchInput = ({ className, handleSubmit, searched, main }) => {
  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Input main={main} placeholder='찾의시는 강의, 강사가 있으신가요?' />
      <SubmitButton searched={searched} type='submit' alt='submit' value='' />
    </Form>
  );
};

const Form = styled.form`
  display: inline-block;
  position: relative;
`;

const Input = styled.input`
  background-color: ${palette.subNavy2};
  outline: none;

  /* width pc 340px */
  width: 270px;
  padding: 16px 50px 16px 20px;
  border-radius: 100px;
  border: none;

  color: ${palette.textWhite};
  font-weight: 700;
  font-size: 14px;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    color: ${palette.textWhite};
    opacity: 0.6;
  }

  @media ${responsive.mobile} {
    // 메인 페이지 외 280px
    width: 210px;
    padding: 16px 50px 16px 20px;

    // 메인 페이지 모바일인 경우
    ${({ main }) =>
      main &&
      css`
        width: 254px;
        padding: 16px 50px 16px 16px; // 메인 320px
      `}
  }

  & > button {
    border: none;
  }
`;

const SubmitButton = styled.input`
  position: absolute;
  top: 10px;
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
