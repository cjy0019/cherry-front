import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import searchRed from '../../../../assets/img/search_red.svg';
import closeRed from '../../../../assets/img/close_red.svg';
import { responsive } from '../../../../style/responsive';

const SearchInput = ({ handleSubmit, searched }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder='찾의시는 강의, 강사가 있으신가요?' />
      <SubmitButton
        searched={searched}
        value
        type='submit'
        alt='submit'
        value=''
      />
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

  padding: 16px 156px 16px 20px;
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
    padding: 16px 140px 16px 16px;
  }

  & > button {
    border: none;
  }
`;

const SubmitButton = styled.input`
  width: 28px;
  height: 28px;

  background: url(${searchRed});
  background-repeat: no-repeat;
  background-size: cover;

  ${({ searched }) =>
    searched &&
    css`
      background: url(${closeRed});
    `}

  border: none;

  position: absolute;
  top: 10px;
  right: 9px;
`;

export default SearchInput;
