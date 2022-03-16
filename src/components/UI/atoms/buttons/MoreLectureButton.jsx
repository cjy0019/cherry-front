import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const MoreLectureButton = ({ children, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      <p>{children}</p>
      <p>↓</p>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 720px;
  height: 44px;
  background-color: ${palette.subNavy};
  font-weight: 400;
  font-size: 12px;
  color: ${palette.textWhite};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-weight: 400;

  @media ${responsive.mobile} {
    width: 320px;
  }
`;

export default MoreLectureButton;
