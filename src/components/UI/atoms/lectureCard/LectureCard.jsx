import React from 'react';
import FourLectureCard from './FourLectureCard';
import ThreeLectureCard from './ThreeLectureCard';

const LectureCard = ({
  three,
  four,
  className,
  lectureData,
  rankSrc,
  isCategoryActive,
}) => {
  return (
    <>
      {three && (
        <ThreeLectureCard
          isCategoryActive={isCategoryActive}
          rankSrc={rankSrc}
          lectureData={lectureData}
          className={className}
        />
      )}
      {four && <FourLectureCard className={className} />}
    </>
  );
};

export default LectureCard;
