import React from 'react';
import styled from 'styled-components';
import arrowBottom from '../../../../assets/img/arrow_bottom.svg';
import palette from '../../../../style/palette';

const SortButton = ({ children }) => {
  return (
    <StyledButton>
      <p>{children}</p>
      <img src={arrowBottom} alt='아래 방향 화살표' />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 72px;
  height: 28px;

  font-size: 0.75rem;
  font-weight: 400;
  color: ${palette.textWhite};

  background-color: ${palette.subNavy};

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;

  cursor: pointer;
`;

export default SortButton;
