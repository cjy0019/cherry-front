import React from 'react';
import styled from 'styled-components';

import arrowBottom from '../../../../assets/img/arrow_bottom.svg';

import palette from '../../../../style/palette';
import SatisfactionButton from '../../../UI/atoms/buttons/SatisfactionButton';

const SelectCategory = ({ category, handleClick }) => {
  return (
    <Container>
      <CenterWrapper>
        <SubTitle>1. 카테고리 추가</SubTitle>
        <AlignThreeContainer>
          <DepthContainer>
            <DepthText>&#183; 1depth</DepthText>
            <SatisfactionButtonContainer>
              <SatisfactionButton selected={category} handleClick={handleClick}>
                프론트엔드
              </SatisfactionButton>
              <SatisfactionButton selected={category} handleClick={handleClick}>
                백엔드
              </SatisfactionButton>
            </SatisfactionButtonContainer>
          </DepthContainer>

          <DepthContainer>
            <DepthText>&#183; 2depth</DepthText>
            <SelectBox defaultValue='선택'>
              <option disabled>선택</option>
            </SelectBox>
          </DepthContainer>

          <DepthContainer>
            <DepthText>&#183; 3depth</DepthText>
            <SelectBox defaultValue='선택'>
              <option disabled>선택</option>
            </SelectBox>
          </DepthContainer>
        </AlignThreeContainer>
      </CenterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 70%;
`;

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  color: ${palette.textWhite};
`;

const AlignThreeContainer = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const DepthContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const DepthText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.text2};
`;

const SatisfactionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  height: 48px;

  background-color: ${palette.subNavy};

  border-radius: 8px;
`;

const SelectBox = styled.select`
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
`;

export default SelectCategory;
