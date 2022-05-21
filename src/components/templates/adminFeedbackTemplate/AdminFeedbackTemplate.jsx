import React, { useState } from 'react';
import ReviewAdminHeader from '../../molecules/header/ReviewAdminHeader';

import searchRed from '../../../assets/img/search_red.svg';
import styled, { css } from 'styled-components';

const AdminFeedback = () => {
  const [feedbackIsClicked, setFeedbackIsClicked] = useState([]);

  function openDetailFeedback(e) {
    // e.currentTarget에 dataset.id가 있으면, 지워주기
    // e.currentTarget에 dataset.id가 없으면, 넣어주기
    const indexOfDataId = feedbackIsClicked.indexOf(e.currentTarget.dataset.id);

    if (indexOfDataId !== -1) {
      setFeedbackIsClicked([
        ...feedbackIsClicked.slice(0, indexOfDataId),
        ...feedbackIsClicked.slice(indexOfDataId + 1),
      ]);
    } else {
      setFeedbackIsClicked([...feedbackIsClicked, e.currentTarget.dataset.id]);
    }
  }

  return (
    <>
      <ReviewAdminHeader />

      <JustifyCenter>
        <FeedbackHeader>
          <Title>피드백</Title>
          <SearchContainer>
            <SearchId placeholder='계정으로 검색'></SearchId>
            <SearchImg src={searchRed} alt='검색 버튼' />
          </SearchContainer>
        </FeedbackHeader>
        <StandardHeader>
          <StandardNumber>번호</StandardNumber>
          <StandardAccount>계정</StandardAccount>
          <StandardFeedback>피드백</StandardFeedback>
          <StandardScore>평점</StandardScore>
          <StandardUpdateDate>등록일</StandardUpdateDate>
          <StandardConfirmDate>확인일</StandardConfirmDate>
          <StandardAction>액션</StandardAction>
        </StandardHeader>
        <ReviewUl>
          <ReviewLi>
            <FeedbackContainer
              feedbackIsClicked={feedbackIsClicked.includes('1')}
              onClick={openDetailFeedback}
              data-id='1'>
              <FeedbackNumber>1</FeedbackNumber>
              <FeedbackAccount>mimiuu222233@gmail.com</FeedbackAccount>
              <FeedbackFeedback>
                자바스크립트 어쩌구 저저꿍 궁시러렁러러러...
              </FeedbackFeedback>
              <FeedbackScore>3.5</FeedbackScore>
              <FeedbackUpdateDate>2022.02.12</FeedbackUpdateDate>
              <FeedbackConfirmDate>2022.02.12</FeedbackConfirmDate>
              <FeedbackAction>이메일 전송</FeedbackAction>
            </FeedbackContainer>
            <FeedbackDetailContainer>
              <FeedbackContents>
                제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이
                지명하는 자를 임명한다. 새로운 회계연도가 개시될 때까지 예산안이
                의결되지 못한 때에는 정부는 국회에서 예 산안이 의결될 때까지
                다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
                국회의원은 법률이 정하는 직을 겸할 수 없다. 모든 국민은 법률이
                정하는 바에 의하여 국방의 의무를 진다. 국회의원이 회기전에 체포
                또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면
                회기중 석방된다.
              </FeedbackContents>
              <ConfirmButtonContainer>
                <ConfirmButton>확인하기</ConfirmButton>
                <EmailButton>이메일 전송</EmailButton>
              </ConfirmButtonContainer>
            </FeedbackDetailContainer>
          </ReviewLi>
          <ReviewLi>
            <FeedbackContainer
              feedbackIsClicked={feedbackIsClicked.includes('2')}
              onClick={openDetailFeedback}
              data-id='2'>
              <FeedbackNumber>2</FeedbackNumber>
              <FeedbackAccount>mimiuu222233@gmail.com</FeedbackAccount>
              <FeedbackFeedback>
                자바스크립트 어쩌구 저저꿍 궁시러렁러러러...
              </FeedbackFeedback>
              <FeedbackScore>3.5</FeedbackScore>
              <FeedbackUpdateDate>2022.02.12</FeedbackUpdateDate>
              <FeedbackConfirmDate>2022.02.12</FeedbackConfirmDate>
              <FeedbackAction>이메일 전송</FeedbackAction>
            </FeedbackContainer>
            <FeedbackDetailContainer>
              <FeedbackContents>
                제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이
                지명하는 자를 임명한다. 새로운 회계연도가 개시될 때까지 예산안이
                의결되지 못한 때에는 정부는 국회에서 예 산안이 의결될 때까지
                다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
                국회의원은 법률이 정하는 직을 겸할 수 없다. 모든 국민은 법률이
                정하는 바에 의하여 국방의 의무를 진다. 국회의원이 회기전에 체포
                또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면
                회기중 석방된다.
              </FeedbackContents>
              <ConfirmButtonContainer>
                <ConfirmButton>확인하기</ConfirmButton>
                <EmailButton>이메일 전송</EmailButton>
              </ConfirmButtonContainer>
            </FeedbackDetailContainer>
          </ReviewLi>
        </ReviewUl>

        <Pagination>
          <PcPagination>
            <Prev>← PREV</Prev>
            <PaginationNumberContainer>
              <PaginationNumber>1</PaginationNumber>
              <PaginationNumber>2</PaginationNumber>
              <PaginationNumber>3</PaginationNumber>
              <PaginationNumber>4</PaginationNumber>
              <PaginationNumber>5</PaginationNumber>
            </PaginationNumberContainer>
            <Next>Next →</Next>
          </PcPagination>
        </Pagination>
      </JustifyCenter>
    </>
  );
};

const PcPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationNumberContainer = styled.div`
  display: flex;

  & > a:not(:last-of-type) {
    margin-right: 12px;
  }
`;

const Next = styled.a`
  cursor: pointer;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;

  margin-left: 20px;
`;

const PaginationNumber = styled.a`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  font-weight: 500;
  font-size: 0.75rem;
  color: #ffffff;

  &:hover {
    border-radius: 50%;
    background-color: #1f2026;
    color: #e72847;
  }
`;

const Prev = styled.a`
  cursor: pointer;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;

  margin-right: 20px;
`;

const Pagination = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  padding: 13px 28px;
  border-radius: 100px;

  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;
`;

const EmailButton = styled(Button)`
  background: #000000;
`;

const ConfirmButton = styled(Button)`
  background: #e72847;
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;

  width: 16.6667vw;
`;

const FeedbackContents = styled.p`
  width: 45.7813vw;

  padding: 28px 183px 28px 115px;
  border-right: 1px solid #2a2a2a;

  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;
  line-height: 22px;
`;

const FeedbackDetailContainer = styled.div`
  display: none;
  border: 1px solid #2a2a2a;
`;

const ReviewSpan = styled.span`
  display: inline-block;
  overflow-wrap: break-word;

  padding: 26px 0 26px;

  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
`;

const FeedbackNumber = styled(ReviewSpan)`
  width: 4.1146vw;
`;
const FeedbackAccount = styled(ReviewSpan)`
  width: 175px;

  margin-right: 2.8646vw;
`;
const FeedbackFeedback = styled(ReviewSpan)`
  width: 252px;

  margin-right: 4.1146vw;
`;
const FeedbackScore = styled(ReviewSpan)`
  width: 21px;

  margin-right: 4.375vw;
  text-align: center;
`;
const FeedbackUpdateDate = styled(ReviewSpan)`
  width: 71px;

  margin-right: 4.375vw;
  text-align: center;
`;
const FeedbackConfirmDate = styled(ReviewSpan)`
  width: 71px;

  margin-right: 4.375vw;
  text-align: center;
`;
const FeedbackAction = styled(ReviewSpan)`
  width: 68px;

  text-align: center;
`;

const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1.875vw;
  width: 62.3958vw;
  border: 1px solid #2a2a2a;

  ${({ feedbackIsClicked }) =>
    feedbackIsClicked
      ? css`
          background: #1f2026;

          & + div {
            display: flex;
          }
        `
      : css`
          background-color: transparent;

          & + div {
            display: none;
          }
        `}
`;

const ReviewLi = styled.li`
  list-style: none;

  margin-top: 16px;
`;

const ReviewUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StandardName = styled.li`
  list-style: none;

  color: #212121;
  font-weight: 600;
  font-size: 1rem;
`;

const StandardNumber = styled(StandardName)`
  width: 4.1146vw;
`;
const StandardAccount = styled(StandardName)`
  width: 11.9792vw;
`;
const StandardFeedback = styled(StandardName)`
  width: 42px;

  margin-right: 14.8958vw;
`;
const StandardScore = styled(StandardName)`
  width: 28px;

  margin-right: 4.9479vw;
`;
const StandardUpdateDate = styled(StandardName)`
  width: 42px;

  margin-right: 5.8854vw;
`;
const StandardConfirmDate = styled(StandardName)`
  width: 42px;

  margin-right: 6.0417vw;
`;
const StandardAction = styled(StandardName)`
  width: 28px;

  margin-right: 3.2813vw;
`;

const StandardHeader = styled.ul`
  display: flex;
  align-items: center;

  padding-left: 1.875vw;
  margin-top: 84px;

  width: 62.5vw;
  height: 64px;

  background-color: #ffffff;
  opacity: 0.9;
`;

const JustifyCenter = styled.div`
  width: 62.5vw;
  margin: 0 auto;
`;

const SearchImg = styled.img`
  position: absolute;
  top: 8px;
  right: 5px;
`;

const SearchId = styled.input`
  all: unset;
  box-sizing: border-box;

  background-color: #24252c;
  border-radius: 100px;

  width: 340px;
  height: 44px;

  padding: 16px 20px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;

  &::placeholder {
    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
    opacity: 0.6;
  }
`;

const SearchContainer = styled.div`
  margin-left: auto;
  position: relative;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffffff;

  margin-right: 20px;
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;

  margin-top: 60px;
`;

export default AdminFeedback;
