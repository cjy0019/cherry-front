import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const CategorySelectButton = ({ children, selected, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} selected={selected}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  min-width: 83px;
  padding: 0 10px;
  height: 40px;
  background: ${palette.textWhite};
  border-radius: 100px;
  border: 1px solid #444444;
  background-color: #444444;
  color: ${palette.text5};
  font-weight: 400;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${palette.textWhite};
      color: ${palette.pointRed};
      border: none;
      font-weight: 700;
    `}
`;

export default CategorySelectButton;
