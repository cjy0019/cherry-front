import React from 'react';
import styled, { css } from 'styled-components';

const OfflineBadge = ({ className }) => {
  return <StyledBadge className={className}>OFF-LINE</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  background-color: #fbe54d;
  padding: 6px 8px 5px;
  box-shadow: 0px 0px 8px rgba(33, 33, 33, 0.12);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
`;

export default OfflineBadge;
