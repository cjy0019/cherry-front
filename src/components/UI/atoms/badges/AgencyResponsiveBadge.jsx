import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const AgencyResponsiveBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 9px 8px 8px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  color: ${palette.textWhite};
  background-color: #000000;

  @media ${responsive.tablet} {
    padding: 6px 3px 5px;
    font-weight: 500;
    font-size: 10px;
    color: ${palette.textWhite};
  }
`;

export default AgencyResponsiveBadge;
