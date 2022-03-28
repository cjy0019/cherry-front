import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const SatisfactionButton = ({ children, selected, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} selected={selected}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #000000;
  padding: 10px;
  border-radius: 3px;
  font-weight: 400;
  color: ${palette.textWhite};
  cursor: pointer;
  border: none;

  ${(props) =>
    props.selected &&
    css`
      color: ${palette.pointRed};
    `}
`;

export default SatisfactionButton;
