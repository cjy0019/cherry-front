import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const UserLoginStateBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 6px 4px;
  background: #000000;
  border-radius: 3px;
  font-weight: 500;
  font-size: 11px;
  color: ${palette.textWhite};
`;

export default UserLoginStateBadge;
