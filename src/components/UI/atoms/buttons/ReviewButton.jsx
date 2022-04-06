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
  width: 16.0417vw;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: ${palette.textWhite};
  background-color: ${palette.pointRed};
  font-weight: 700;
  font-size: 0.625vw;
  cursor: pointer;

  ${(props) =>
    props.dim &&
    css`
      background-color: ${palette.subNavy};
      color: ${palette.text6};
    `}

  @media ${responsive.tablet} {
    width: 148px;
    font-size: 12px;
  }

  @media ${responsive.mobile} {
    width: 152px;
    font-size: 12px;
  }
`;

export default ReviewButton;
