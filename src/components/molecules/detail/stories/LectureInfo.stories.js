import LectureInfo from '../LectureInfo';

export default {
  title: 'molecules/상세페이지 강의 정보',
  component: LectureInfo,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Lecture = () => <LectureInfo />;

Lecture.storyName = '강의 정보';
