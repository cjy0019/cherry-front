import { BrowserRouter } from 'react-router-dom';
import CherryPickStartButton from '../CherryPickStartButton';
import DeleteAllButton from '../DeleteAllButton';
import MoreLectureButton from '../MoreLectureButton';
import OriginalLinkButton from '../OriginalLinkButton';
import RetryButton from '../RetryButton';
import SatisfactionButton from '../SatisfactionButton';
import SaveButton from '../SaveButton';
import CarouselSlideButton from '../CarouselSlideButton';
import CategoryCancelButton from '../CategoryCancelButton';
import styled from 'styled-components';

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export default {
  title: 'atoms/버튼',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <StoryContainer>
          <Story />
        </StoryContainer>
      </BrowserRouter>
    ),
  ],
};

export const Retry = () => <RetryButton />;
Retry.storyName = '다시 시도';
export const CherryPickStart = () => <CherryPickStartButton />;
CherryPickStart.storyName = '체리픽 시작하기';

export const Save = () => (
  <>
    <SaveButton>저장하기</SaveButton>
    <SaveButton disabled>저장하기</SaveButton>
  </>
);
Save.storyName = '저장하기 버튼';

export const Satisfaction = () => (
  <div>
    <SatisfactionButton selected='매우 만족'>매우 만족</SatisfactionButton>
    <SatisfactionButton>만족</SatisfactionButton>
    <SatisfactionButton selected='보통'>보통</SatisfactionButton>
    <SatisfactionButton>그저 그럼</SatisfactionButton>
  </div>
);
Satisfaction.storyName = '만족도 선택 버튼';

export const MoreLecture = () => (
  <MoreLectureButton>강의 전체 보기</MoreLectureButton>
);
MoreLecture.storyName = '강의 전체 보기';

export const DeleteAll = () => (
  <div>
    <DeleteAllButton>모두 지우기</DeleteAllButton>
  </div>
);
DeleteAll.storyName = '모두 지우기';

export const OriginalLink = () => <OriginalLinkButton to='/' />;
OriginalLink.storyName = '원본 링크';

export const Carousel = () => (
  <div>
    <CarouselSlideButton left />
    <CarouselSlideButton right />
  </div>
);
Carousel.storyName = '슬라이드 버튼';

export const CategoryCancel = () => (
  <div>
    <CategoryCancelButton>Javascript</CategoryCancelButton>
  </div>
);
CategoryCancel.storyName = '카테고리 선택취소 버튼';
