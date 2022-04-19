import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPage from './components/pages/DetailPage';
import MainPage from './components/pages/MainPage';
import ReviewWritePage from './components/pages/ReviewWritePage';
import GlobalStyle from './style/GlobalStyle';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import LectureRegisterPage from './components/pages/admin/LectureRegisterPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='detail' element={<DetailPage />} />
          <Route path='write' element={<ReviewWritePage />} />
          <Route path='signin' element={<SigninPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='admin'>
            <Route
              path='lecture-registration'
              element={<LectureRegisterPage />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
