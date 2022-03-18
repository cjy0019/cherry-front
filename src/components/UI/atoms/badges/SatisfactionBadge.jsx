import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const SatisfactionBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 5px 8px 3px;
  background-color: ${palette.subNavy};
  border-radius: 3px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
`;

export default SatisfactionBadge;
