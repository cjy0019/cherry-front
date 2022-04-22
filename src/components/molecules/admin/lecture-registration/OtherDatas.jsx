import React from 'react';
import styled, { css } from 'styled-components';

import palette from '../../../../style/palette';
import arrowBottom from '../../../../assets/img/arrow_bottom.svg';

import SatisfactionButton from '../../../UI/atoms/buttons/SatisfactionButton';
import SaveButton from '../../../UI/atoms/buttons/SaveButton';

const OtherDatas = () => {
  return (
    <Container>
      <CenterWrapper>
        <FlexColumn>
          <Title>3.강의명</Title>
          <StyledInput type='text' placeholder='강의명을 입력해주세요' />
        </FlexColumn>

        <OnlineOfflineContainer>
          <Title>4.강의방식</Title>
          <ButtonContainer>
            <SatisfactionButton>온라인</SatisfactionButton>
            <SatisfactionButton>오프라인</SatisfactionButton>
          </ButtonContainer>
        </OnlineOfflineContainer>

        <AgencyContainer>
          <div>
            <FlexColumn>
              <Title>5.기관</Title>
              <SelectBox defaultValue='선택'>
                <option disabled>선택</option>
              </SelectBox>
            </FlexColumn>
          </div>

          <div>
            <FlexColumn>
              <Title>5-1.기관 추가</Title>
              <FlexRow>
                <StyledInput type='text' placeholder='기관 입력' />
                <RegisterButton>등록</RegisterButton>
              </FlexRow>
            </FlexColumn>
          </div>
        </AgencyContainer>

        <AgencyContainer>
          <div>
            <FlexColumn>
              <Title>6.강사</Title>
              <SelectBox defaultValue='선택'>
                <option disabled>선택</option>
              </SelectBox>
            </FlexColumn>
          </div>

          <div>
            <FlexColumn>
              <Title>6-1.강사 추가</Title>
              <FlexRow>
                <StyledInput type='text' placeholder='강사 입력' />
                <RegisterButton>등록</RegisterButton>
              </FlexRow>
            </FlexColumn>
          </div>
        </AgencyContainer>

        <FlexColumn mt>
          <Title>7.해시태그</Title>
          <HashWrapper>
            <HashTag type='text' />
            <HashTag type='text' />
            <HashTag type='text' />
            <HashTag type='text' />
          </HashWrapper>
        </FlexColumn>

        <FlexColumn mt>
          <Title>8.원본 링크</Title>
          <StyledInput type='text' placeholder='원본 링크를 입력해주세요' />
        </FlexColumn>

        <FlexColumn mt>
          <Title>9.가격</Title>
          <StyledInput type='text' placeholder='가격을 입력해주세요' />
        </FlexColumn>

        <FlexColumn mt>
          <LengthCounterContainer>
            <Title>10.강의 정보</Title>
            <Counter>
              <span>0</span>/500
            </Counter>
          </LengthCounterContainer>

          <StyledTextArea
            placeholder='강의정보를 입력해주세요'
            maxLength={500}></StyledTextArea>
        </FlexColumn>

        <SaveButton>추가하기</SaveButton>
      </CenterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 68px;
`;

const CenterWrapper = styled.div`
  width: 60%;
  padding-bottom: 80px;

  & > button:last-child {
    margin-top: 52px;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${(props) =>
    props.mt &&
    css`
      margin-top: 40px;
    `}
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${palette.textWhite};
`;

const StyledInput = styled.input`
  background-color: ${palette.subNavy};

  padding: 17px 32px;

  border: none;
  border-radius: 8px;
  outline: none;

  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};

  &::placeholder {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${palette.text5};
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

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

const AgencyContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SelectBox = styled.select`
  width: 260px;
  height: 48px;
  padding-left: 30px;

  font-size: 0.875rem;

  background: url(${arrowBottom}) no-repeat ${palette.subNavy} 95% 50%;
  color: ${palette.text5};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  cursor: pointer;
  outline: none;
  border-radius: 8px;
  border: none;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const RegisterButton = styled.button`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 41px;
  height: 32px;

  font-weight: 400;
  font-size: 0.75rem;

  color: #ffffff;
  background-color: #000000;

  border-radius: 3px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HashWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HashTag = styled(StyledInput).attrs({
  placeholder: '#',
})`
  width: 13vw;

  padding: 17px 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LengthCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Counter = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.text5};

  span {
    color: ${palette.text2};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 136px;

  padding: 17px 30px;

  background-color: ${palette.subNavy};
  color: ${palette.textWhite};

  border: none;
  outline: none;
  resize: none;
  border-radius: 8px;

  &::placeholder {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${palette.text5};
  }
`;

export default OtherDatas;
