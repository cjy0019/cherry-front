import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const JoinSubmitButton = ({ clicked }) => {
  return <Button disabled={clicked}>다음</Button>;
};

const Button = styled.button`
  width: 340px;
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

  @media ${responsive.mobile} {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 44px;

    border-radius: 0;
  }
`;

export default JoinSubmitButton;
