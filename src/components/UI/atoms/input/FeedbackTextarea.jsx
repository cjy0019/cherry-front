import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../../style/responsive';

const FeedbackTextarea = () => {
  return (
    <Textarea placeholder='추가하고 싶은 강의/불편한 점/ 건의사항이 있으신가요?' />
  );
};

const Textarea = styled.textarea`
  width: 273px;
  height: 38px;
  padding: 12px 12px 12px 13px;
  resize: none;

  border: 1px solid #eeeeee;
  border-radius: 3px;

  font-size: 12px;
  font-weight: 400;
  color: #000000;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.5px;
    opacity: 0.3;
  }

  @media ${responsive.mobile} {
    width: 293px;
  }
`;

export default FeedbackTextarea;
