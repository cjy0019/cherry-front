import React from 'react';
import BackgroundOpacity from '../molecules/detail/BackgroundOpacity';

import Header from '../molecules/header/Header';
import LectureDetailTitle from '../molecules/detail/LectureDetailTitle';

const DetailTemplate = () => {
  return (
    <>
      <Header NotMain />
      <BackgroundOpacity />
      <LectureDetailTitle />
    </>
  );
};

export default DetailTemplate;
