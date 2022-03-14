import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const RetryButton = () => {
  return <StyledButton>다시 시도</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${palette.pointRed};
  color: ${palette.textWhite};
  border-radius: 100px;
  width: 100px;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default RetryButton;
