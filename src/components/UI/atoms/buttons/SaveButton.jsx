import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const SaveButton = ({ children, dim, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} dim={dim}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 4px;
  background-color: ${palette.pointRed};
  font-weight: 700;
  color: ${palette.textWhite};
  font-size: 12px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.dim &&
    css`
      background-color: ${palette.subNavy};
      color: ${palette.text6};
    `}
`;

export default SaveButton;
