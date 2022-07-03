import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';

const RecommendBadge = ({ children, point, className }) => {
  return (
    <StyledBadge point={point} className={className}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 4px 7px 3px;

  background-color: #1d1c21;

  border-radius: 3px;

  font-size: 0.75rem;
  font-weight: 600;
  color: ${palette.text4};

  ${({ point }) =>
    point &&
    css`
      color: ${palette.pointRed};
      opacity: 1;
    `}
`;

export default RecommendBadge;
