import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import AdminHeader from '../../molecules/admin/header/AdminHeader';
import SatisfactionButton from '../../UI/atoms/buttons/SatisfactionButton';

import arrowBottom from '../../../assets/img/arrow_bottom.svg';

const CategoryRegisterTemplate = () => {
  return (
    <div>
      <AdminHeader />
      <Title>카테고리 추가</Title>

      <CategorySelectContainer>
        <CenterWrapper>
          <SubTitle>1.카테고리 추가</SubTitle>

          <DepthContainer>
            <CommonDepth>
              <DepthText>&#183; 1depth</DepthText>
              <ButtonContainer>
                <SatisfactionButton>프론트엔드</SatisfactionButton>
                <SatisfactionButton>백엔드</SatisfactionButton>
              </ButtonContainer>
            </CommonDepth>

            <CommonDepth>
              <DepthText>&#183; 2depth</DepthText>
              <SelectBox defaultValue='선택'>
                <option disabled>선택</option>
              </SelectBox>
            </CommonDepth>

            <ThirdDepth>
              <DepthText>&#183; 3depth</DepthText>
              <StyledInput type='text' placeholder='입력' />
            </ThirdDepth>
          </DepthContainer>
        </CenterWrapper>
      </CategorySelectContainer>
    </div>
  );
};

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  color: ${palette.textWhite};

  margin: 60px 0 0 10%;
`;

const CategorySelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 68px;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 80%;
`;

const SubTitle = styled.p`
  font-weight: 700;
  font-size: 1rem;

  color: ${palette.textWhite};
`;

const DepthContainer = styled.div`
  display: flex;
  gap: 75px;

  @media (max-width: 997px) {
    flex-direction: column;
  }
`;

const CommonDepth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const DepthText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.text2};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  height: 48px;

  border-radius: 8px;

  background-color: ${palette.subNavy};
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

const ThirdDepth = styled(CommonDepth)`
  flex: 2;
`;

const StyledInput = styled.input`
  padding: 0 30px;

  height: 48px;

  border: none;
  border-radius: 8px;
  outline: none;

  font-size: 0.875rem;

  color: ${palette.textWhite};
  background-color: ${palette.subNavy};

  &::placeholder {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${palette.text5};
  }
`;

export default CategoryRegisterTemplate;
