import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const NumberBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.pointRed};

  border-radius: 100%;

  min-width: 24px;
  height: 24px;

  font-weight: 600;
  font-size: 0.75rem;
  color: ${palette.text2};
`;

export default NumberBadge;
