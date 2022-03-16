import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const JoinSubmitButton = () => {
  return <Button>다음</Button>;
};

const Button = styled.button`
  width: 340px;
  height: 40px;

  border-radius: 4px;
  border-style: none;
  color: ${palette.textWhite};
  background-color: ${palette.subNavy};

  font-weight: 700;
  font-size: 12px;

  &:hover {
    background-color: ${palette.pointRed};
  }
`;

export default JoinSubmitButton;
