import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import categoryDown from '../../../../assets/img/categoryDown.svg';
import { responsive } from '../../../../style/responsive';
import MobileSort from '../../../molecules/mobileSort/MobileSort';

const Sorts = ({ className }) => {
  // onClick 이벤트에 각각 데이터 불러오는 상태 함수를 props로 받아와햔다.
  const [sortIsClicked, setSortIsClicked] = useState('최신순');
  const [mobileCurrentSort, setMobileCurrentSort] = useState('최신순');
  const [mobileSortIsClicked, setMobileSortIsClicked] = useState(false);

  function openMobileSort(e) {
    setMobileSortIsClicked(!mobileSortIsClicked);
  }

  function selectSort(e) {
    setSortIsClicked(e.target.innerText);
  }

  function mobileCheckSort(e) {
    const currentName = e.currentTarget.dataset.id;

    setMobileSortIsClicked(false);
    setMobileCurrentSort(currentName);
  }

  return (
    <SortContainer className={className}>
      <SortPcTablet>
        <SortCategory
          sortIsClicked={sortIsClicked === '최신순'}
          onClick={selectSort}>
          최신순
        </SortCategory>
        <SortCategory
          sortIsClicked={sortIsClicked === '인기순'}
          onClick={selectSort}>
          인기순
        </SortCategory>
        <SortCategory
          sortIsClicked={sortIsClicked === '가격↑'}
          onClick={selectSort}>
          가격↑
        </SortCategory>
        <SortCategory
          sortIsClicked={sortIsClicked === '가격↓'}
          onClick={selectSort}>
          가격↓
        </SortCategory>
      </SortPcTablet>
      <SortMobile onClick={openMobileSort}>
        <CurrentSort>{mobileCurrentSort}</CurrentSort>
        <DownArrow src={categoryDown} alt='펼쳐 보기' />
      </SortMobile>
      <StyledMobileSort
        currentSort={mobileCurrentSort}
        checkSort={mobileCheckSort}
        mobileSortIsClicked={mobileSortIsClicked}
        setSortIsClicked={setMobileSortIsClicked}
      />
    </SortContainer>
  );
};

const StyledMobileSort = styled(MobileSort)`
  display: none;

  @media ${responsive.mobile} {
    ${({ mobileSortIsClicked }) =>
      mobileSortIsClicked
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}

    position: fixed;
    z-index: 9999;
    left: 0;
    bottom: 0;
  }
`;

const DownArrow = styled.img`
  margin-left: 4px;
`;

const CurrentSort = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const SortMobile = styled.div`
  display: none;

  @media ${responsive.mobile} {
    cursor: pointer;

    display: flex;
    align-items: center;

    background-color: #1f2026;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;

    padding: 8px 12px;
  }
`;

const SortCategory = styled.button`
  all: unset;
  cursor: pointer;

  margin-left: 12px;

  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.5;

  ${({ sortIsClicked }) =>
    sortIsClicked &&
    css`
      opacity: 1;
      transition: all 0.3s linear;
    `}
`;

const SortPcTablet = styled.div`
  @media ${responsive.mobile} {
    display: none;
  }
`;

const SortContainer = styled.div`
  display: block;
`;

export default Sorts;
