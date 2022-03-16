import React from 'react';
import styled from 'styled-components';
import closeDark from '../../../../assets/img/close_dark.svg';
import closeWhite from '../../../../assets/img/close_w.svg';

const CloseButton = ({ mode, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      {mode === 'dark' ? (
        <img src={closeDark} alt='close-button' />
      ) : (
        <img src={closeWhite} alt='close-button' />
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default CloseButton;
