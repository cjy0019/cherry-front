import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage';
import MainPage from './components/pages/MainPage';
import ReviewWritePage from './components/pages/ReviewWritePage';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/write' element={<ReviewWritePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
