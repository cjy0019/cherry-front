import React from 'react';
import styled, { css } from 'styled-components';

const OfflineBadge = ({ absolute, top, left }) => {
  return (
    <StyledBadge top={top} left={left} absolute={absolute}>
      OFF-LINE
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  display: inline-block;
  background-color: #fbe54d;
  padding: 6px 8px 5px;
  box-shadow: 0px 0px 8px rgba(33, 33, 33, 0.12);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      top: ${({ top }) => top};
      left: ${({ left }) => left};
    `}
`;

export default OfflineBadge;
