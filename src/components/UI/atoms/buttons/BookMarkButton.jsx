import React from 'react';
import styled, { css } from 'styled-components';

import bookmark_active from '../../../../assets/img/bookmark_active.svg';
import bookmark from '../../../../assets/img/bookmark.svg';
import { responsive } from '../../../../style/responsive';

const BookMarkButton = ({ active, handleClick, absolute, top, right }) => {
  return (
    <StyledButton
      top={top}
      right={right}
      absolute={absolute}
      onClick={handleClick}>
      {active && <img src={bookmark_active} alt='북마크' />}
      {!active && <img src={bookmark} alt='북마크' />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  & > img {
    width: 48px;

    @media ${responsive.tablet} {
      width: 40px;
    }
    @media ${responsive.mobile} {
      width: 40px;
    }
  }

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      top: ${({ top }) => top};
      right: ${({ right }) => right};
    `}
`;

export default BookMarkButton;
