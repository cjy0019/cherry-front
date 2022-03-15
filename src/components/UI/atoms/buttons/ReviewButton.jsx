import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const ReviewButton = ({ children, dim, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} dim={dim}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 308px;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: ${palette.textWhite};
  background-color: ${palette.pointRed};
  font-weight: 700;
  font-size: 12px;

  ${(props) =>
    props.dim &&
    css`
      background-color: ${palette.subNavy};
      color: ${palette.text6};
    `}

  @media ${responsive.mobile} {
    width: 152px;
  }
`;

export default ReviewButton;
