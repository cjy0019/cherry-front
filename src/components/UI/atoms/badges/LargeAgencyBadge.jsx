import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

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
  font-size: 14px;
  color: ${palette.textWhite};
  display: inline-block;
  padding: 9px 15px 8px;
  background-color: #000000;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Regular = styled.span`
  font-weight: 400;
`;

const Bold = styled.span`
  font-weight: 700;
  margin-left: 5px;
`;

export default LargeAgencyBadge;
