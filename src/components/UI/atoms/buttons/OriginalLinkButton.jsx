import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';
import linkIcon from '../../../../assets/img/linkicon.svg';

const OriginalLinkButton = ({ to }) => {
  return (
    <StyledLink to={to}>
      원본 링크
      <img src={linkIcon} alt='아이콘' />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #15161d;
  color: ${palette.textWhite};
  text-decoration: none;
  width: 16.0417vw;
  height: 40px;
  font-size: 0.625vw;
  font-weight: 700;

  @media ${responsive.tablet} {
    width: 148px;
    font-size: 12px;
  }

  @media ${responsive.mobile} {
    width: 152px;
  } ;
`;

export default OriginalLinkButton;
