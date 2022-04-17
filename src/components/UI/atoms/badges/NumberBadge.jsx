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
  background: ${palette.pointRed};
  border-radius: 100%;
  min-width: 24px;
  height: 24px;
  font-weight: 600;
  font-size: 12px;
  color: ${palette.textWhite};
  opacity: 0.9;
`;

export default NumberBadge;
