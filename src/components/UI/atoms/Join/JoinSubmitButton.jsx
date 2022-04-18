import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const JoinSubmitButton = ({ clicked }) => {
  return <Button disabled={clicked}>다음</Button>;
};

const Button = styled.button`
  width: 100%;
  height: 40px;

  border-radius: 4px;
  border-style: none;
  color: ${palette.textWhite};
  background-color: ${palette.pointRed};

  cursor: pointer;

  font-weight: 700;
  font-size: 12px;

  transition: 0.7s;

  &:disabled {
    cursor: not-allowed;
    background-color: ${palette.subNavy};
  }
`;

export default JoinSubmitButton;
