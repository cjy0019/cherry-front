import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const ReviewOneLineInput = () => {
  return <Input maxLength='40' placeholder='ex) 강의 퀄리티가 좋아요' />;
};

const Input = styled.input`
  width: 100%;
  height: 14px;
  padding: 17px 33px 17px 30px;

  background: ${palette.subNavy};

  border-radius: 8px;
  border: none;
  outline: none;

  font-size: 14px;
  font-weight: 400;
  color: ${palette.textWhite};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${palette.textWhite};
    opacity: 0.5;
  }

  /* @media ${responsive.tablet} {
    width: 655px;
  }
  @media ${responsive.mobile} {
    width: 257px;
  } */
`;

export default ReviewOneLineInput;
