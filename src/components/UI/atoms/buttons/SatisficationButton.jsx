import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const SatisficationButton = ({ children, point, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} point={point}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #000000;
  padding: 10px;
  border-radius: 3px;
  font-weight: 400;
  color: ${palette.textWhite};
  border: none;

  ${(props) =>
    props.point &&
    css`
      color: ${palette.pointRed};
    `}
`;

export default SatisficationButton;
