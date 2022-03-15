import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import { responsive } from '../../../../style/responsive';

const OriginalLinkButton = ({ children, Href, imgUrl }) => {
  return (
    <StyledLink to={Href}>
      {children}
      <img src={imgUrl} alt='아이콘' />
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
  width: 308px;
  height: 40px;
  font-size: 12px;
  font-weight: 700;

  @media ${responsive.mobile} {
    width: 152px;
    height: 40px;
  } ;
`;

export default OriginalLinkButton;
