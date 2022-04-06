import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const LargeAgencyBadge = ({ children }) => {
  const [type, ...agencyName] = children.split(' ');
  return (
    <StyledBadge>
      <Regular>{type}</Regular>
      <Bold>{agencyName.join(' ')}</Bold>
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  font-size: 0.7292vw;
  color: ${palette.textWhite};
  display: inline-block;
  padding: 0.4688vw 0.7813vw 0.4167vw;
  background-color: #000000;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${responsive.mobile} {
    padding: 8px;
    font-size: 12px;
  }
`;

const Regular = styled.span`
  font-weight: 400;
`;

const Bold = styled.span`
  font-weight: 700;
  margin-left: 5px;
`;

export default LargeAgencyBadge;
