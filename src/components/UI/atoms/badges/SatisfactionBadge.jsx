import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const SatisfactionBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 5px 8px 3px;

  border-radius: 3px;

  background-color: ${palette.subNavy};

  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.textWhite};
`;

export default SatisfactionBadge;
