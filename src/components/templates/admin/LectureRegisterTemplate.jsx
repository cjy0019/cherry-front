import React, { useState } from 'react';
import styled from 'styled-components';

import palette from '../../../style/palette';
import SelectCategory from '../../molecules/admin/lecture-registration/SelectCategory';
import SatisfactionButton from '../../UI/atoms/buttons/SatisfactionButton';

const LectureRegisterTemplate = () => {
  const [category, setCategory] = useState('프론트엔드');

  const handleClick = (e) => {
    setCategory(e.target.dataset.name);
  };

  return (
    <div>
      <div>
        <h1>강의 추가</h1>
        <SelectCategory category={category} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default LectureRegisterTemplate;
