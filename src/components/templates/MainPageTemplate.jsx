import React from 'react';
import Header from '../molecules/header/Header';
import illustrate from '../../assets/img/illu_pc.svg';
import styled from 'styled-components';
import SearchInput from '../UI/atoms/input/SearchInput';
import palette from '../../style/palette';

const MainPageTemplate = () => {
  return (
    <div>
      <Header />
      <SearchContainer>
        <img src={illustrate} alt='일러스트' />
        <Title>
          성장하고 싶은 개발자를 위한
          <br />
          강의 추천 서비스
        </Title>
        <SearchInput main />
      </SearchContainer>
    </div>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-21%);
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${palette.textWhite};
`;

export default MainPageTemplate;
