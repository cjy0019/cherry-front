import React from 'react';
import styled from 'styled-components';
import arrow_left from '../../../../assets/img/arrow_left.svg';
import arrow_right from '../../../../assets/img/arrow_right.svg';

const CarouselSlideButton = ({ left, right, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      {left && <img src={arrow_left} alt='캐러셀 버튼' />}
      {right && <img src={arrow_right} alt='캐러셀 버튼' />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default CarouselSlideButton;
