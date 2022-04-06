import React from 'react';
import styled, { css } from 'styled-components';

const OfflineBadge = ({ absolute }) => {
  return <StyledBadge absolute={absolute}>OFF-LINE</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  background-color: #fbe54d;
  padding: 0.3125vw 0.4167vw 0.2604vw;
  font-size: 0.5729vw;
  box-shadow: 0px 0px 8px rgba(33, 33, 33, 0.12);
  border-radius: 100px;
  font-weight: 700;

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      top: 1.8229vw;
      left: 1.3021vw;
    `}
`;

export default OfflineBadge;
