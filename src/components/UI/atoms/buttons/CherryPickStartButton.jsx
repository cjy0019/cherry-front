import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const CherryPickStartButton = ({ handleClick }) => {
  return <StyledButton onClick={handleClick}>체리픽 시작하기</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${palette.pointRed};
  color: ${palette.textWhite};
  width: 160px;
  height: 48px;
  font-weight: 700;
  box-shadow: 0px 0px 12px rgba(231, 40, 71, 0.5);
  font-size: 14px;
  border-radius: 8px;
  border: none;
`;

export default CherryPickStartButton;
