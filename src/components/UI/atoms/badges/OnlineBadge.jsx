import React from 'react';
import styled from 'styled-components';

const OnlineBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  background-color: #fbe54d;
  padding: 6px 8px 5px;
  font-size: 11px;
  box-shadow: 0px 0px 8px rgba(33, 33, 33, 0.12);
  border-radius: 100px;
  font-weight: 700;
`;

export default OnlineBadge;
