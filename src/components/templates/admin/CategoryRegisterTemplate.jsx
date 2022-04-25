import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import arrowBottom from '../../../assets/img/arrow_bottom.svg';

import AdminHeader from '../../molecules/admin/header/AdminHeader';
import SatisfactionButton from '../../UI/atoms/buttons/SatisfactionButton';
import RetryButton from '../../UI/atoms/buttons/RetryButton';

const CategoryRegisterTemplate = () => {
  return (
    <>
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

          <ImageUploadContainer>
            <SubTitle>2.이미지 첨부</SubTitle>
            <ImageBox>
              <p>이미지 없음</p>
            </ImageBox>
            <ImageText>90 * 90px</ImageText>
            <FileContainer>
              <FileText type='text' disabled value='파일 이름' />
              <SearchFileButton htmlFor='mobile-image'>
                파일선택
              </SearchFileButton>
              <InputFile type='file' id='mobile-image' />
            </FileContainer>
          </ImageUploadContainer>

          <RetryButton>추가하기</RetryButton>
        </CenterWrapper>
      </CategorySelectContainer>
    </>
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

  padding-bottom: 236px;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  margin-top: 48px;
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

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 40%;

  margin: 48px 0 80px;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.text5};

  width: 180px;
  height: 180px;

  background-color: ${palette.subNavy2};
`;

const ImageText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.text5};
`;

const FileContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const FileText = styled.input`
  width: 200px;
  background-color: ${palette.subNavy3};

  padding-left: 10px;
  color: ${palette.text2};

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 3px;
`;

const SearchFileButton = styled.label`
  display: inline-block;

  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.textWhite};
  cursor: pointer;
  white-space: nowrap;

  padding: 9px 14px;
  border-radius: 3px;

  background-color: #000000;
`;

const InputFile = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export default CategoryRegisterTemplate;
