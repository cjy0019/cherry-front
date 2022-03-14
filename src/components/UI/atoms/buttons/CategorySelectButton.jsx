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
  width: 83px;
  height: 40px;
  background: ${palette.textWhite};
  border-radius: 100px;
  border: 1px solid #444444;
  background-color: #444444;
  color: ${palette.textWhite};

  ${(props) =>
    props.selected &&
    css`
      background-color: ${palette.textWhite};
      color: ${palette.pointRed};
      border: none;
    `}
`;

export default CategorySelectButton;
