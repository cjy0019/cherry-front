import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import SvgProgressBar from './SvgProgressBar';

const ProgressBar = ({ title, total, percentage, id }) => {
  return (
    <Container>
      <p>{title}</p>
      <SvgProgressBar id={id} percentage={percentage} />
      <p>{total}명</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${palette.text2};
  white-space: nowrap;

  & > p:first-child {
    font-size: 0.875rem;
    width: 27%;
    text-align: right;
  }

  & > p:last-child {
    font-size: 0.75rem;
    width: 15%;
    text-align: left;
  }
`;

export default ProgressBar;
