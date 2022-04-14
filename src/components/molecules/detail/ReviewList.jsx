import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';

const ReviewList = () => {
  const [selected, setSelected] = useState('asc');

  const handleClick = useCallback(
    (e) => {
      setSelected(e.target.dataset.name);
    },
    [selected],
  );

  return (
    <Container>
      <HeaderContainer>
        <h2>리뷰 23개</h2>
        <ButtonContainer>
          <FilteringButton
            selected={selected}
            data-name='asc'
            onClick={handleClick}>
            평점 ↑
          </FilteringButton>
          <FilteringButton
            selected={selected}
            data-name='desc'
            onClick={handleClick}>
            평점 ↓
          </FilteringButton>
          <FilteringButton
            selected={selected}
            data-name='latest'
            onClick={handleClick}>
            최신순
          </FilteringButton>
        </ButtonContainer>
      </HeaderContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 60px;
  padding-bottom: 30vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${palette.lineGray};

  & > h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${palette.text2};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

const FilteringButton = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: right;
  color: ${palette.text5};

  ${(props) =>
    props['data-name'] === props.selected &&
    css`
      color: ${palette.textWhite};
    `}
`;

export default ReviewList;
