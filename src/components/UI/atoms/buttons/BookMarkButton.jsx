import React from 'react';
import styled from 'styled-components';
import bookmark_active from '../../../../assets/img/bookmark_active.svg';
import bookmark from '../../../../assets/img/bookmark.svg';

const BookMarkButton = ({ active, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      {active && <img src={bookmark_active} alt='북마크' />}
      {!active && <img src={bookmark} alt='북마크' />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default BookMarkButton;
