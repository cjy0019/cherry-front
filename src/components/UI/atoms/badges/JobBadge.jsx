import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

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
  font-size: 0.75rem;

  color: ${palette.textWhite};

  background-color: #000000;

  border-radius: 3px;
`;

export default JobBadge;
