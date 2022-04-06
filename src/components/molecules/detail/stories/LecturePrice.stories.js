import { BrowserRouter } from 'react-router-dom';
import LecturePrice from '../LecturePrice';

export default {
  title: 'molecules/상세페이지',
  component: LecturePrice,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const LecturePriceStory = () => <LecturePrice />;

LecturePriceStory.storyName = '강의 정보 및 가격 정보';
