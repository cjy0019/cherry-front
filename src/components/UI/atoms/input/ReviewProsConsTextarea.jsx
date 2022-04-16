import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const ReviewProsConsTextarea = () => {
  return (
    <Textarea maxLength='500' placeholder='ex) 강사, 과제, 커리큘럼, 환경 등' />
  );
};

const Textarea = styled.textarea`
  width: 100%;
  height: 102px;
  padding: 17px 30px;

  background: ${palette.subNavy};

  border-radius: 8px;
  resize: none;
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 14px;
  color: ${palette.textWhite};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${palette.textWhite};
    opacity: 0.5;
    letter-spacing: 0px;
  }

  /* @media ${responsive.tablet} {
    width: 658px;
  }
  @media ${responsive.mobile} {
    width: 260px;
  } */
`;

export default ReviewProsConsTextarea;
