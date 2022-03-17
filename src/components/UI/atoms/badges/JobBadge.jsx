import React from 'react';
import styled from 'styled-components';

const JobBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  min-width: 32px;
  height: 24px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  background: #000000;
  border-radius: 3px;
`;

export default JobBadge;
