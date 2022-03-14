import React from 'react';
import CherryPickStartButton from './components/UI/atoms/buttons/CherryPickStartButton';
import RetryButton from './components/UI/atoms/buttons/RetryButton';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RetryButton />
      <CherryPickStartButton />
    </>
  );
};

export default App;
