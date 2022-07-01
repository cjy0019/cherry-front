import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const ToggleButton = ({ isOpened }) => {
  return (
    <Container>
      <div>
        <CheckBox type='checkbox' id='chk' checked={isOpened} />
        <StyledLabel htmlFor='chk'>
          <span>선택</span>
        </StyledLabel>
      </div>
      <p>{isOpened ? '공개' : '비공개'}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBox = styled.input`
  position: absolute;
  left: -1000%;

  &:checked + label {
    background-color: ${palette.pointRed};
  }

  &:checked + label:after {
    left: calc(100% - 22px);
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: block;

  width: 48px;
  height: 24px;

  border-radius: 100px;

  background-color: #c4c4c4;

  transition: background-color 0.4s;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 50%;

    width: 20px;
    height: 20px;

    background: ${palette.textWhite};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transform: translateY(-50%);
    transition: all 0.4s;

    border-radius: 100%;
  }

  span {
    display: none;
  }
`;

export default ToggleButton;
