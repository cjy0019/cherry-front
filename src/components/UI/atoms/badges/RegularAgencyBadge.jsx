import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const RegularAgencyBadge = ({ children, className }) => {
  const [type, ...name] = children;

  return (
    <StyledBadge className={className}>
      <span>{type}</span>
      <span>{name.join(' ')}</span>
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 8px;

  background-color: #000000;
  border-radius: 4px;

  font-size: 0.75rem;
  color: ${palette.textWhite};

  & > span:nth-of-type(1) {
    font-weight: 400;
  }

  & > span:nth-of-type(2) {
    font-weight: 700;
    margin-left: 5px;
  }
`;

export default RegularAgencyBadge;
