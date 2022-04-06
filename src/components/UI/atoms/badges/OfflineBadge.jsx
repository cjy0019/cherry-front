import React from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../../style/responsive';

const OfflineBadge = ({ absolute }) => {
  return <StyledBadge absolute={absolute}>OFF-LINE</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  background-color: #fbe54d;
  padding: 6px 8px 5px;
  box-shadow: 0px 0px 8px rgba(33, 33, 33, 0.12);
  border-radius: 100px;
  font-size: 0.5729vw;
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
