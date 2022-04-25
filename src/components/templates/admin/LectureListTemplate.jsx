import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';

import AdminHeader from '../../molecules/admin/header/AdminHeader';
import SearchInput from '../../UI/atoms/input/SearchInput';

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
    </>
  );
};

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  color: ${palette.textWhite};

  @media (max-width: 645px) {
    font-size: 1.75rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
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

export default LectureListTemplate;
