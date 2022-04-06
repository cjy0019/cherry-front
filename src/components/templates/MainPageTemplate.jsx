import React from 'react';
import Header from '../molecules/header/Header';
import illustrate from '../../assets/img/illu_pc.svg';
import styled from 'styled-components';
import SearchInput from '../UI/atoms/input/SearchInput';
import palette from '../../style/palette';

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <HeaderSection>
        <Illustrate />
        <StyledH1>성장하고 싶은 개발자를 위한 강의 추천 서비스</StyledH1>
        <SearchInput />
      </HeaderSection>
    </>
  );
};

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  text-align: center;

  width: 84.11%;
  height: 76px;

  margin: 0 0 20px 0;
`;

const Illustrate = styled.div`
  background-image: url(${illustrate});
  background-repeat: no-repeat;
  background-size: cover;
  width: 22.29vw;
  height: 19.11vw;
  background-color: tomato;

  @media (min-width: 681px) and (max-width: 999px) {
  }

  @media (min-width: 431px) and (max-width: 680px) {
  }
`;

const HeaderSection = styled.section`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPageTemplate;
