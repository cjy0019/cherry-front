import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import sortDown from '../../../assets/img/sortDown.png';
import searchRed from '../../../assets/img/search_red.svg';

const AdminReviewTemplate = () => {
  return (
    <>
      <JustifyCenter>
        <AdminHeader>
          <HeaderTitle>CherryPick</HeaderTitle>
          <StyledLink to='#'>강의 리스트</StyledLink>
          <StyledLink to='#'>회원 관리</StyledLink>
          <StyledLink to='#'>리뷰 관리</StyledLink>
          <StyledLink to='#'>통계 분석</StyledLink>
          <StyledLink to='#'>피드백</StyledLink>
          <StyledLink to='#'>카테고리 추가</StyledLink>
        </AdminHeader>
        <ManageReviewHeader>
          <Title>리뷰 관리</Title>
          <SortButton>
            전체
            <Down src={sortDown} alt='정렬 버튼' />
          </SortButton>
          <SearchContainer>
            <SearchId placeholder='계정으로 검색'></SearchId>
            <SearchImg src={searchRed} alt='검색 버튼' />
          </SearchContainer>
        </ManageReviewHeader>
        <StandardHeader>
          <StandardNumber>번호</StandardNumber>
          <StandardAccount>계정</StandardAccount>
          <StandardLecture>강의명</StandardLecture>
          <StandardDate>등록일</StandardDate>
          <StandardState>리뷰상태</StandardState>
          <StandardConfirmDate>확인일</StandardConfirmDate>
        </StandardHeader>
        <ReviewUl>
          <ReviewLi>
            <ReviewNumber>2</ReviewNumber>
            <ReviewAccount>mimiuu222233@gmail.com</ReviewAccount>
            <ReviewLecture>
              자바스크립트 어쩌구 저저꿍 궁시러렁러러러...
            </ReviewLecture>
            <ReviewDate>2022.02.12</ReviewDate>
            <ReviewState state='승인'>승인</ReviewState>
            <ReviewConfirmDate>2022.02.12</ReviewConfirmDate>
          </ReviewLi>
          <ReviewLi>
            <ReviewNumber>2</ReviewNumber>
            <ReviewAccount>mimiuu222233@gmail.com</ReviewAccount>
            <ReviewLecture>
              자바스크립트 어쩌구 저저꿍 궁시러렁러러러...
            </ReviewLecture>
            <ReviewDate>2022.02.12</ReviewDate>
            <ReviewState state='대기'>대기</ReviewState>
            <ReviewConfirmDate>2022.02.12</ReviewConfirmDate>
          </ReviewLi>
          <ReviewLi>
            <ReviewNumber>2</ReviewNumber>
            <ReviewAccount>mimiuu222233@gmail.com</ReviewAccount>
            <ReviewLecture>
              자바스크립트 어쩌구 저저꿍 궁시러렁러러러...
            </ReviewLecture>
            <ReviewDate>2022.02.12</ReviewDate>
            <ReviewState state='거부'>거부</ReviewState>
            <ReviewConfirmDate>2022.02.12</ReviewConfirmDate>
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

const ReviewLi = styled.li`
  list-style: none;

  display: flex;
  align-items: center;

  margin-top: 16px;
  padding-left: 1.875vw;

  width: 62.3958vw;
  /* height: 68px; */
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

const ReviewConfirmDate = styled(ReviewSpan)`
  width: 6.5625vw;
`;

const ReviewState = styled(ReviewSpan)`
  ${({ state }) =>
    state === '승인'
      ? css`
          color: #00ff29;
        `
      : state === '거부'
      ? css`
          color: #e72847;
        `
      : css`
          color: #feb700;
        `}

  width: 8.125vw;
`;
const ReviewDate = styled(ReviewSpan)`
  width: 8.125vw;
`;
const ReviewLecture = styled(ReviewSpan)`
  width: 21.1458vw;
`;
const ReviewAccount = styled(ReviewSpan)`
  width: 12.5521vw;
`;
const ReviewNumber = styled(ReviewSpan)`
  width: 4.1146vw;
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

const StandardConfirmDate = styled(StandardName)`
  width: 6.5625vw;
`;

const StandardState = styled(StandardName)`
  width: 8.125vw;
`;

const StandardDate = styled(StandardName)`
  width: 8.125vw;
`;

const StandardLecture = styled(StandardName)`
  width: 21.1458vw;
`;

const StandardAccount = styled(StandardName)`
  width: 12.5521vw;
`;

const StandardNumber = styled(StandardName)`
  width: 4.1146vw;
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

const SearchContainer = styled.div`
  margin-left: auto;
  position: relative;
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

const StyledLink = styled(Link)`
  all: unset;
  display: block;

  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;

  margin-left: 24px;
`;

const HeaderTitle = styled.h1`
  margin-right: auto;

  font-weight: 700;
  font-size: 1.125rem;
  color: #ffffff;
`;

const AdminHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
`;

const Down = styled.img`
  display: inline-block;

  width: 9.75px;
  height: 5.25px;
`;

const SortButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 72px;
  height: 28px;
  padding: 8px 12px;

  background-color: #1f2026;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const ManageReviewHeader = styled.div`
  display: flex;
  align-items: center;

  margin-top: 60px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffffff;

  margin-right: 20px;
`;

const JustifyCenter = styled.div`
  width: 62.5vw;
  margin: 0 auto;
`;

export default AdminReviewTemplate;
