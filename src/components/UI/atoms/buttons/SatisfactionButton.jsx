import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const SatisfactionButton = ({ children, selected, handleClick }) => {
  return (
    <StyledButton
      onClick={handleClick}
      selected={selected}
      data-name={children}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${palette.textWhite};

  background-color: #000000;

  border-radius: 3px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.selected === props['data-name'] &&
    css`
      color: ${palette.pointRed};
    `}
`;

export default SatisfactionButton;
