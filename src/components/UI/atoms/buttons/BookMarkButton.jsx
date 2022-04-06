import React from 'react';
import styled, { css } from 'styled-components';
import bookmark_active from '../../../../assets/img/bookmark_active.svg';
import bookmark from '../../../../assets/img/bookmark.svg';
import { responsive } from '../../../../style/responsive';

const BookMarkButton = ({ active, handleClick, absolute }) => {
  return (
    <StyledButton absolute={absolute} onClick={handleClick}>
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
    width: 2.5vw;

    @media ${responsive.tablet} {
      width: 40px;
    }
  }

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      top: 1.5625vw;
      right: 1.3021vw;
    `}
`;

export default BookMarkButton;
