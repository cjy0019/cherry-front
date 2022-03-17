import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const RecommendBadge = ({ children, point }) => {
  return <StyledBadge point={point}>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 9px;
  height: 20px;
  background-color: #1d1c21;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.7;

  ${({ point }) =>
    point &&
    css`
      color: ${palette.pointRed};
      opacity: 1;
    `}
`;

export default RecommendBadge;
