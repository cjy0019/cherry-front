import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

// TODO 상세정보(프론트엔드,백엔드...등등) 모두 클릭시 빨간색으로 버튼색 변경
const JoinSubmitButton = ({ clicked }) => {
  return <Button clicked={clicked}>다음</Button>;
};

const Button = styled.button`
  width: 340px;
  height: 40px;

  border-radius: 4px;
  border-style: none;
  color: ${palette.textWhite};
  background-color: ${palette.subNavy};

  cursor: pointer;

  font-weight: 700;
  font-size: 12px;

  ${({ clicked }) =>
    clicked &&
    css`
      background-color: ${palette.pointRed};
    `}
`;

export default JoinSubmitButton;
