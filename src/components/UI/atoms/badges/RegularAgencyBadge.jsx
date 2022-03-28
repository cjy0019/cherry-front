import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const RegularAgencyBadge = ({ children }) => {
  const [type, ...name] = children.split(' ');

  return (
    <StyledBadge>
      <span>{type}</span>
      <span>{name.join(' ')}</span>
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  display: inline-block;
  background-color: #000000;
  border-radius: 4px;
  padding: 8px;
  color: ${palette.textWhite};
  font-size: 12px;

  & > span:nth-of-type(1) {
    font-weight: 400;
  }

  & > span:nth-of-type(2) {
    font-weight: 700;
    margin-left: 5px;
  }
`;

export default RegularAgencyBadge;
