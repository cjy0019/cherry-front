import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const RetryButton = ({ handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 100px;
  height: 40px;

  background-color: ${palette.pointRed};

  font-size: 0.875rem;
  font-weight: 700;
  color: ${palette.textWhite};

  cursor: pointer;

  border-radius: 100px;
  border: none;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default RetryButton;
