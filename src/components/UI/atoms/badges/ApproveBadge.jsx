import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const ApproveBadge = ({ children, point }) => {
  return <StyledBadge point={point}>{children}</StyledBadge>;
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 6px 8px;

  background-color: ${palette.subNavy};

  border-radius: 3px;

  font-weight: 500;
  font-size: 0.75rem;
  color: ${palette.text6};

  ${(props) =>
    props.point &&
    css`
      background-color: ${palette.signBlue};
      color: ${palette.textWhite};
    `}

  @media ${responsive.mobile} {
    padding: 5px 6px;

    font-weight: 500;
    font-size: 10px;
    color: ${palette.text6};
  }
`;

export default ApproveBadge;
