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
  background: #000000;
  border-radius: 3px;
  border: none;
  color: ${palette.textWhite};
  font-weight: 400;
  cursor: pointer;

  @media ${responsive.mobile} {
    width: 320px;
    height: 44px;
  }
`;

export default DeleteAllButton;
