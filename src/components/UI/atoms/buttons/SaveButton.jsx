import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const SaveButton = ({ children, dim, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} dim={dim}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 768px;
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

  @media ${responsive.tablet} {
    width: 718px;
  }

  @media ${responsive.mobile} {
    width: 340px;
  }
`;

export default SaveButton;
