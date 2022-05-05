import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import palette from '../../../../style/palette';

const AdminHeader = () => {
  return (
    <Header>
      <CenterWrapper>
        <CherryPickText>Cherry Pick</CherryPickText>

        <NavList>
          <LinkWrapper>
            <StyledNavLink to='/admin/lecture-list'>강의 리스트</StyledNavLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledNavLink to='/admin/user-list?language=frontend'>
              회원 관리
            </StyledNavLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledNavLink to='/'>리뷰 관리</StyledNavLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledNavLink to='/'>통계분석</StyledNavLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledNavLink to='/'>피드백</StyledNavLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledNavLink to='/admin/category-registration'>
              카테고리 추가
            </StyledNavLink>
          </LinkWrapper>
        </NavList>
      </CenterWrapper>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: center;

  background-color: ${palette.backgroundBlack};
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const CherryPickText = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${palette.textWhite};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const LinkWrapper = styled.li`
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${palette.textWhite};

  &.active {
    color: ${palette.pointRed};
  }

  text-decoration: none;
  cursor: pointer;
`;

export default AdminHeader;
