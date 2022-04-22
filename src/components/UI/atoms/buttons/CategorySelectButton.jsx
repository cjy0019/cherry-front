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

  border-radius: 100px;
  border: 1px solid #444444;

  background-color: transparent;

  font-size: 1rem;
  font-weight: 700;
  color: ${palette.text5};

  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${palette.textWhite};
      font-weight: 700;
      color: ${palette.pointRed};
      border: none;
    `}
`;

export default CategorySelectButton;
