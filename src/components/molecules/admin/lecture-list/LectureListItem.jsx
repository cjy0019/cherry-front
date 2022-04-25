import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const LectureListItem = () => {
  return (
    <Container>
      <li>1111</li>
      <li>자바스크립트 어쩌구 저쩌구 궁시러러러러러러러러 덩기덕러러</li>
      <li>스파르타 코딩클럽</li>
      <li>2022.02.14</li>
      <li>2022.02.15</li>
      <li>
        <div>
          <button>왓더퍽</button>
          <p>비공개</p>
        </div>
      </li>
      <li>
        <StyledLink to='/'>수정하기</StyledLink>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};

  padding-left: 4%;

  width: 100%;
  height: 64px;

  border: 1px solid ${palette.lineGray};

  & > li:nth-of-type(1) {
    flex: 1;
  }

  & > li:nth-of-type(2) {
    flex: 4;
    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > li:nth-of-type(3) {
    flex: 2;
  }

  & > li:nth-of-type(4) {
    flex: 2;
  }

  & > li:nth-of-type(5) {
    flex: 2;
  }

  & > li:nth-of-type(6) {
    flex: 2;
  }

  & > li:nth-of-type(7) {
    flex: 1;
  }
`;

const StyledLink = styled(Link)`
  color: ${palette.pointRed};
`;

export default LectureListItem;
