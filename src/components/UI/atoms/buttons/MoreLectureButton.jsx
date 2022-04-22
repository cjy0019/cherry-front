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

  font-size: 0.75rem;
  font-weight: 400;
  color: ${palette.textWhite};

  border-radius: 3px;
  border: none;
  cursor: pointer;

  & > p:nth-child(2) {
    padding-bottom: 3px;
    padding-left: 4px;
  }

  @media ${responsive.mobile} {
    width: 320px;
  }
`;

export default MoreLectureButton;
