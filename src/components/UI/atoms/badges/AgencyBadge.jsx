import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const AgencyBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 9px 18px 8px;
  background: #000000;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: ${palette.textWhite};
`;

export default AgencyBadge;
