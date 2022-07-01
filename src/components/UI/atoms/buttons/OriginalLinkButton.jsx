import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';
import linkIcon from '../../../../assets/img/linkicon.svg';

const OriginalLinkButton = ({ to, className }) => {
  return (
    <StyledLink className={className} to={to} target='_blank'>
      원본 링크
      <img src={linkIcon} alt='아이콘' />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 40px;

  border-radius: 4px;
  background-color: #15161d;

  font-size: 0.75rem;
  font-weight: 700;
  color: ${palette.textWhite};

  text-decoration: none;

  @media ${responsive.tablet} {
    width: 50%;
  }

  @media ${responsive.mobile} {
    width: 50%;
  }
`;

export default OriginalLinkButton;
