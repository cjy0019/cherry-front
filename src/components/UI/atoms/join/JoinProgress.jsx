import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const JoinProgress = ({ step }) => {
  return (
    <Container>
      <FirstCircle step={step}>1</FirstCircle>
      <DotList>
        <div />
        <div />
        <div />
      </DotList>
      <SecondCircle step={step}>2</SecondCircle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const DotList = styled.div`
  display: flex;
  align-items: center;
  height: 18px;

  & > div {
    display: inline-block;
    background-color: ${palette.lineGray};

    border-radius: 50%;

    margin-left: 1px;
    margin-right: 1px;

    width: 3px;
    height: 3px;
  }

  & > div:first-child {
    margin-left: 6px;
  }

  & > div:last-child {
    margin-right: 6px;
  }
`;

const FirstCircle = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${({ step }) =>
    step === 'first' ? palette.pointRed : palette.lineGray};
  border-radius: 50%;

  color: ${palette.textWhite};
  font-size: 10px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

const SecondCircle = styled(FirstCircle)`
  background-color: ${({ step }) =>
    step === 'second' ? palette.pointRed : palette.lineGray};
`;

export default JoinProgress;
