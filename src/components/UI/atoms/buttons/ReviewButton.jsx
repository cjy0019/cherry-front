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
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: ${palette.textWhite};
  background-color: ${palette.pointRed};
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;

  ${(props) =>
    props.dim &&
    css`
      background-color: ${palette.subNavy};
      color: ${palette.text6};
    `}

  @media ${responsive.tablet} {
    width: 50%;
  }

  @media ${responsive.mobile} {
    width: 50%;
  }
`;

export default ReviewButton;
