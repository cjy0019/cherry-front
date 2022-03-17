import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const UserEmailBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 4px 8px 3px;
  background-color: #1d1c21;
  border-radius: 3px;
  font-weight: 600;
  font-size: 12px;
  color: ${palette.textWhite};
  opacity: 0.7;
`;

export default UserEmailBadge;
