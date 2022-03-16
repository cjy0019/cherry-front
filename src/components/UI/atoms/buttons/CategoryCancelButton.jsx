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
  border-radius: 3px;
  padding: 5px 7px;
  color: ${palette.text6};
  font-size: 14px;
  font-weight: 400;
  background-color: ${palette.lineGray};
  border: none;
  cursor: pointer;
  gap: 5px;

  & > img {
    width: 18px;
  }
`;
export default CategoryCancelButton;
