import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const UploadImage = () => {
  return (
    <Container>
      <TitleContainer>
        <CenterWrapper>
          <Title>2. 이미지 첨부</Title>
        </CenterWrapper>
      </TitleContainer>

      <ContentsContainer>
        <ContentsCenterWrapper>
          <SectionContainer>
            <Subtitle>데스크탑</Subtitle>
            <ImageBox>
              <NoImage>이미지 없음</NoImage>
            </ImageBox>
            <SmallInfo>데스크탑 이미지 영역 576 * 314px</SmallInfo>

            <FileContainer>
              <FileText type='text' disabled value='파일 이름' />
              <SearchFileButton htmlFor='mobile-image'>
                파일선택
              </SearchFileButton>
              <InputFile type='file' id='mobile-image' />
            </FileContainer>
          </SectionContainer>

          <SectionContainer>
            <Subtitle>태블릿</Subtitle>
            <ImageBox>
              <NoImage>이미지 없음</NoImage>
            </ImageBox>
            <SmallInfo>태블릿 이미지 영역 379 * 211px</SmallInfo>

            <FileContainer>
              <FileText type='text' disabled value='파일 이름' />
              <SearchFileButton htmlFor='mobile-image'>
                파일선택
              </SearchFileButton>
              <InputFile type='file' id='mobile-image' />
            </FileContainer>
          </SectionContainer>

          <SectionContainer>
            <Subtitle>모바일</Subtitle>
            <ImageBox>
              <NoImage>이미지 없음</NoImage>
            </ImageBox>
            <SmallInfo>모바일 이미지 영역 320 * 179px</SmallInfo>

            <FileContainer>
              <FileText type='text' disabled value='파일 이름' />
              <SearchFileButton htmlFor='mobile-image'>
                파일선택
              </SearchFileButton>
              <InputFile type='file' id='mobile-image' />
            </FileContainer>
          </SectionContainer>
        </ContentsCenterWrapper>
      </ContentsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 68px;
`;

const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px 0;

  background-color: ${palette.subNavy};
`;

const CenterWrapper = styled.div`
  width: 70%;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  color: ${palette.textWhite};
`;

const ContentsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 37px 0 38px;

  background-color: ${palette.subNavy};
`;

const ContentsCenterWrapper = styled(CenterWrapper)`
  display: flex;
  gap: 48px;

  @media (max-width: 1002px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SectionContainer = styled.div`
  flex: 1;
`;

const ImageBox = styled.div`
  height: 156px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 14px;

  background-color: ${palette.subNavy2};
`;

const Subtitle = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 0.875rem;

  margin-bottom: 20px;

  color: ${palette.text2};
`;

const NoImage = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.text5};
`;

const SmallInfo = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${palette.text5};

  margin-bottom: 27px;
`;

const FileContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const FileText = styled.input`
  width: 100%;
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

export default UploadImage;
