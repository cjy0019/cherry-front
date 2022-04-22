import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const SaveButton = ({ children, disabled, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 44px;

  background-color: ${palette.pointRed};

  font-size: 0.75rem;
  font-weight: 700;
  color: ${palette.textWhite};

  border-radius: 4px;
  border: none;

  cursor: pointer;

  &:disabled {
    background-color: ${palette.subNavy};
    color: ${palette.text6};
    cursor: not-allowed;
  }
`;

export default SaveButton;
