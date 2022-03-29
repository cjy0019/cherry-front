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
  cursor: pointer;
  gap: 4px;
  width: 72px;
  height: 28px;
  font-weight: 400;
  font-size: 12px;
  color: ${palette.textWhite};
  background: ${palette.subNavy};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
`;

export default SortButton;
