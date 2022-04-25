import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const CherryPickStartButton = ({ handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 160px;
  height: 48px;

  font-size: 0.875rem;
  font-weight: 700;
  color: ${palette.textWhite};

  background-color: ${palette.pointRed};

  box-shadow: 0px 0px 12px rgba(231, 40, 71, 0.5);

  border-radius: 8px;
  border: none;

  cursor: pointer;
`;

export default CherryPickStartButton;
