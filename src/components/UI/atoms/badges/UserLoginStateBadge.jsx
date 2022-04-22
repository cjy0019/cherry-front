import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const UserLoginStateBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 6px 4px;

  background-color: #000000;

  border-radius: 3px;

  font-size: 0.6875rem;
  font-weight: 500;
  color: ${palette.textWhite};
`;

export default UserLoginStateBadge;
