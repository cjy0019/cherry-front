import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';
import AdminHeader from '../../molecules/admin/header/AdminHeader';
import SearchInput from '../../UI/atoms/input/SearchInput';

const UserListTemplate = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <AdminHeader />
      <FlexRow>
        <CenterWrapper>
          <Title>회원 관리</Title>
          <SearchInput main />
        </CenterWrapper>
      </FlexRow>

      <FlexRow>
        <CenterWrapper>
          <LinkWrapper>
            <StyledButton
              data-id='frontend'
              searchParams={searchParams.get('language')}
              onClick={() => setSearchParams({ language: 'frontend' })}>
              프론트엔드(340)
            </StyledButton>
            <StyledButton
              data-id='backend'
              searchParams={searchParams.get('language')}
              onClick={() => setSearchParams({ language: 'backend' })}>
              백엔드(9)
            </StyledButton>
          </LinkWrapper>
        </CenterWrapper>
      </FlexRow>

      <Table>
        <CenterWrapper>
          <TableTitles>
            <li>번호</li>
            <li>계정</li>
            <li>가입일</li>
            <li>리뷰 승인 여부</li>
            <li>탈퇴일</li>
          </TableTitles>
        </CenterWrapper>

        <CenterWrapper>
          <UserList>
            <li>3</li>
            <li>cjy0029@naver.com</li>
            <li>2022.02.14</li>
            <li>승인1 거절1 대기0</li>
            <li>2022.02.23</li>
          </UserList>
        </CenterWrapper>
      </Table>
    </>
  );
};

const FlexRow = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 3.75rem;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 40.3125rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9375rem;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: ${palette.textWhite};
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const StyledButton = styled.button`
  all: unset;

  font-weight: 300;
  font-size: 24px;

  text-decoration: none;
  cursor: pointer;

  color: #444444;

  ${(props) =>
    props['data-id'] === props.searchParams &&
    css`
      font-weight: 600;
      font-size: 1.5rem;
      color: ${palette.pointRed};
    `}
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  margin-top: 2.5rem;
`;

const TableTitles = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 4%;

  width: 100%;
  height: 4rem;

  background-color: ${palette.text2};

  & > li:nth-of-type(1) {
    flex: 1;
  }

  & > li:nth-of-type(2) {
    flex: 5;
  }

  & > li:nth-of-type(3) {
    flex: 2;
  }

  & > li:nth-of-type(4) {
    flex: 2;
  }

  & > li:nth-of-type(5) {
    flex: 2;
  }
`;

const UserList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  color: ${palette.textWhite};

  padding-left: 4%;

  width: 100%;
  height: 4rem;

  border: 0.0625rem solid ${palette.lineGray};

  & > li:nth-of-type(1) {
    flex: 1;
  }

  & > li:nth-of-type(2) {
    flex: 5;
    padding: 0 0.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > li:nth-of-type(3) {
    flex: 2;
  }

  & > li:nth-of-type(4) {
    flex: 2;
  }

  & > li:nth-of-type(5) {
    flex: 2;
    color: ${palette.pointRed};
  }
`;

export default UserListTemplate;
