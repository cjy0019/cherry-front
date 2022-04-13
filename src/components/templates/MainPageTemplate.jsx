import React from 'react';
import Header from '../molecules/header/Header';
import illustrate from '../../assets/img/illu_pc.svg';
import styled from 'styled-components';
import SearchInput from '../UI/atoms/input/SearchInput';
import palette from '../../style/palette';
import { responsive } from '../../style/responsive';
import AvailableSkill from '../molecules/availableSkill/AvailableSkill';

const MainPageTemplate = () => {
  return (
    <Container>
      <StyledHeader />
      <HeaderSection>
        <Illustrate />
        <StyledH1>
          성장하고 싶은 개발자를 위한 <br />
          강의 추천 서비스
        </StyledH1>
        <SearchInput main />
      </HeaderSection>

      <AvailableSkill />
    </Container>
  );
};

const StyledHeader = styled(Header)`
  @media ${responsive.mobile} {
    position: relative;
    z-index: 1000;
  }
`;

const Container = styled.div`
  background-color: ${palette.backgroundBlack};
  height: 100vh;
`;

const StyledH1 = styled.h1`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 2rem;
  text-align: center;

  color: ${palette.textWhite};
  margin: 0 0 20px 0;
  line-height: 1.2;

  /* 일러스트 높이만큼 margin top */
  margin-top: 13.91vw;

  @media ${responsive.tablet} {
    width: 360px;
    line-height: 1.3;

    /* 일러스트 높이만큼 margin top */
    margin-top: 34.77vw;
  }

  @media ${responsive.mobile} {
    font-size: 1.5rem;
    margin: 0 0 36px 0;
    line-height: 1.4;

    /* 일러스트 보다 위에 위치 */
    position: relative;
    z-index: 100;

    /* 일러스트 높이만큼 margin top */
    margin-top: 112px;
  }
`;

const Illustrate = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0%);

  background: url(${illustrate});
  background-repeat: no-repeat;
  background-size: cover;
  width: 22.29vw;
  height: 19.11vw;

  @media ${responsive.tablet} {
    width: 55.729vw;
    height: 47.786vw;
  }

  @media ${responsive.mobile} {
    width: 100vw;
    height: 309px;

    background: linear-gradient(
        180deg,
        rgba(24, 25, 32, 0) -52.59%,
        rgba(24, 25, 32, 0) -52.57%,
        #181920 93.23%
      ),
      url(${illustrate});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${responsive.mobile} {
  }
`;

export default MainPageTemplate;
