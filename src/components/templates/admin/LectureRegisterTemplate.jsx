import React, { useState } from 'react';
import styled from 'styled-components';

import palette from '../../../style/palette';
import SelectCategory from '../../molecules/admin/lecture-registration/SelectCategory';
import UploadImage from '../../molecules/admin/lecture-registration/UploadImage';

const LectureRegisterTemplate = () => {
  const [category, setCategory] = useState('프론트엔드');

  const handleClick = (e) => {
    setCategory(e.target.dataset.name);
  };

  return (
    <div>
      <div>
        <PageTitle>강의 추가</PageTitle>
        <SelectCategory category={category} handleClick={handleClick} />
        <UploadImage />
      </div>
    </div>
  );
};

const PageTitle = styled.h1`
  margin: 60px 0 92px 10%;

  font-weight: 700;
  font-size: 2.25rem;
  color: ${palette.textWhite};
`;

export default LectureRegisterTemplate;
