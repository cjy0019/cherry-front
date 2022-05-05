import React from 'react';
import styled from 'styled-components';
import close_dark from '../../../../assets/img/close_dark.svg';
import palette from '../../../../style/palette';

const CategoryCancelButton = ({ children, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      {children}
      <img src={close_dark} alt='닫기 버튼' />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px 7px;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${palette.text6};

  background-color: ${palette.lineGray};

  border-radius: 3px;
  border: none;
  cursor: pointer;

  & > img {
    width: 18px;
  }
`;
export default CategoryCancelButton;
