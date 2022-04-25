import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../style/palette';

import AdminHeader from '../../molecules/admin/header/AdminHeader';
import SearchInput from '../../UI/atoms/input/SearchInput';
import CherryPickStartButton from '../../UI/atoms/buttons/CherryPickStartButton';

const LectureListTemplate = () => {
  return (
    <>
      <AdminHeader />

      <TitleContainer>
        <CenterWrapper>
          <Title>강의리스트</Title>
          <SearchInput main />
        </CenterWrapper>
      </TitleContainer>

      <LinkButtonContainer>
        <CenterWrapper>
          <FrontBackWrapper>
            <StyledLink to='/admin/lecture-list?language=frontend'>
              프론트엔드(340)
            </StyledLink>
            <StyledLink to='/admin/lecture-list?language=backend'>
              백엔드(9)
            </StyledLink>
          </FrontBackWrapper>
          <CherryPickStartButton>강의 추가</CherryPickStartButton>
        </CenterWrapper>
      </LinkButtonContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  @media (max-width: 645px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;

  color: ${palette.textWhite};

  @media (max-width: 645px) {
    font-size: 1.75rem;
  }
`;

const LinkButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;
`;

const FrontBackWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 1.5rem;

  color: #444444;
  text-decoration: none;
`;

export default LectureListTemplate;
