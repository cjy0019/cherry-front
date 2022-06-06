import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

import DetailPage from './components/pages/DetailPage';
import MainPage from './components/pages/MainPage';
import ReviewWritePage from './components/pages/ReviewWritePage';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
// admin
import LectureRegisterPage from './components/pages/admin/LectureRegisterPage';
import CategoryRegisterPage from './components/pages/admin/CategoryRegisterPage';
import LectureListPage from './components/pages/admin/LectureListPage';
import UserListPage from './components/pages/admin/UserListPage';
import axios from 'axios';

const App = () => {
  (async () => {
    const res = await axios.get('/todos');
    console.log(res);
  })();

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
            <Route
              path='category-registration'
              element={<CategoryRegisterPage />}
            />
            <Route path='lecture-list' element={<LectureListPage />} />
            <Route path='user-list' element={<UserListPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
