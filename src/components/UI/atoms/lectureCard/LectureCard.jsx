import React from 'react';
import FourLectureCard from './FourLectureCard';
import ThreeLectureCard from './ThreeLectureCard';

const LectureCard = ({ three, four, className }) => {
  return (
    <>
      {three && <ThreeLectureCard className={className} />}
      {four && <FourLectureCard className={className} />}
    </>
  );
};

export default LectureCard;
