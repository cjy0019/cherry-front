import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const DeleteAllButton = ({ children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 300px;
  height: 34px;

  background-color: #000000;

  border: none;
  border-radius: 3px;

  font-size: 0.75rem;
  font-weight: 400;
  color: ${palette.textWhite};

  cursor: pointer;

  @media ${responsive.mobile} {
    width: 320px;
    height: 44px;
  }
`;

export default DeleteAllButton;
