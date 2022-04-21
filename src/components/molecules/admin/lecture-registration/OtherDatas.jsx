import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';
import SatisfactionButton from '../../../UI/atoms/buttons/SatisfactionButton';

const OtherDatas = () => {
  return (
    <Container>
      <CenterWrapper>
        <LectureNameContainer>
          <Title>3.강의명</Title>
          <LectureNameInput type='text' />
        </LectureNameContainer>

        <OnlineOfflineContainer>
          <Title>4.강의방식</Title>
          <ButtonContainer>
            <SatisfactionButton>온라인</SatisfactionButton>
            <SatisfactionButton>오프라인</SatisfactionButton>
          </ButtonContainer>
        </OnlineOfflineContainer>
      </CenterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;

  margin-top: 68px;
  background-color: yellowgreen;
`;

const CenterWrapper = styled.div`
  width: 60%;
  background-color: gold;
`;

// 3번
const LectureNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${palette.textWhite};
`;

const LectureNameInput = styled.input.attrs({
  placeholder: '강의명',
})`
  background-color: ${palette.subNavy};
  color: ${palette.text5};

  padding: 0 32px;
  height: 48px;

  border-radius: 8px;
  outline: none;
`;

// 4번
const OnlineOfflineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  margin-top: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export default OtherDatas;
