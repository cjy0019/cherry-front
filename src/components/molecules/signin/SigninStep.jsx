import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import JoinProgress from '../../UI/atoms/join/JoinProgress';

const SigninStep = ({ step }) => {
  return (
    <Container>
      <p>Cherry Pick</p>
      <JoinProgress step={step} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${palette.textWhite};
  font-size: 1.25rem;
  font-weight: 400;
  padding-bottom: 16px;
  border-bottom: 1px solid ${palette.lineGray};
`;

export default SigninStep;
