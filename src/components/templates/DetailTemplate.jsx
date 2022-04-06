import React from 'react';
import LectureInfo from '../molecules/detail/LectureInfo';

import Header from '../molecules/header/Header';

const DetailTemplate = () => {
  return (
    <div>
      <Header NotMain />
      <LectureInfo />
    </div>
  );
};

export default DetailTemplate;
