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
  background-color: #000000;
  padding: 10px;
  border-radius: 3px;
  font-weight: 400;
  color: ${palette.textWhite};
  cursor: pointer;
  border: none;

  ${(props) =>
    props.selected === props['data-name'] &&
    css`
      color: ${palette.pointRed};
    `}
`;

export default SatisfactionButton;
