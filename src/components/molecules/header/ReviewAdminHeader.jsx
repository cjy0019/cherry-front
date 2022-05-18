import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ReviewAdminHeader = () => {
  return (
    <AdminHeader>
      <HeaderTitle>CherryPick</HeaderTitle>
      <StyledLink to='#'>강의 리스트</StyledLink>
      <StyledLink to='#'>회원 관리</StyledLink>
      <StyledLink to='#'>리뷰 관리</StyledLink>
      <StyledLink to='#'>통계 분석</StyledLink>
      <StyledLink to='#'>피드백</StyledLink>
      <StyledLink to='#'>카테고리 추가</StyledLink>
    </AdminHeader>
  );
};

const StyledLink = styled(Link)`
  all: unset;
  display: block;

  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;

  margin-left: 24px;
`;
const AdminHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
`;
const HeaderTitle = styled.h1`
  margin-right: auto;

  font-weight: 700;
  font-size: 1.125rem;
  color: #ffffff;
`;

export default ReviewAdminHeader;
