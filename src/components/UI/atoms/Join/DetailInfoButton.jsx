import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const DetailInfoButton = ({ children, select, value, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      data-value={value}
      select={select === value ? true : false}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  display: inline-block;
  height: 42px;
  padding: 14px 20px;

  border-radius: 6px;
  border-style: none;

  cursor: pointer;

  background-color: ${palette.subNavy};

  color: ${palette.textWhite};
  font-weight: 600;
  font-size: 14px;

  ${({ select }) =>
    select &&
    css`
      border: 0.6px solid ${palette.pointRed};
    `}

  @media ${responsive.mobile} {
    white-space: nowrap;
  }
`;

export default DetailInfoButton;
