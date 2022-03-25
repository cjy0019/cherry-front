import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const SmallAgencyBadge = ({ children }) => {
  const [type, ...name] = children.split(' ');
  return (
    <StyledBadge>
      <span>{type}</span>
      <span>{name}</span>
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 5px 3px;
  background-color: #000000;
  border-radius: 3px;
  color: ${palette.textWhite};
  font-size: 10px;

  & > span:nth-of-type(1) {
    font-weight: 400;
  }

  & > span:nth-of-type(2) {
    font-weight: 700;
    margin-left: 5px;
  }
`;

export default SmallAgencyBadge;
