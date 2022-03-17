import { BrowserRouter } from 'react-router-dom';
import CherryPickStartButton from './CherryPickStartButton';
import DeleteAllButton from './DeleteAllButton';
import MoreLectureButton from './MoreLectureButton';
import OriginalLinkButton from './OriginalLinkButton';
import RetryButton from './RetryButton';
import SatisficationButton from './SatisficationButton';
import SaveButton from './SaveButton';
import linkIcon from '../../../../assets/img/linkIcon.png';
import CarouselSlideButton from './CarouselSlideButton';
import CategoryCancelButton from './CategoryCancelButton';

export default {
  title: '버튼/버튼',
};

export const Retry = () => <RetryButton />;
Retry.storyName = '다시 시도';
export const CherryPickStart = () => <CherryPickStartButton />;
CherryPickStart.storyName = '체리픽 시작하기';

export const Save = () => (
  <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
    <SaveButton>저장하기</SaveButton>
    <SaveButton dim>저장하기</SaveButton>
  </div>
);
Save.storyName = '저장하기';

export const Satisfication = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <SatisficationButton point>매우 만족</SatisficationButton>
    <SatisficationButton>만족</SatisficationButton>
    <SatisficationButton>보통</SatisficationButton>
    <SatisficationButton>그저 그럼</SatisficationButton>
  </div>
);
Satisfication.storyName = '만족도 뱃지';

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

export const OriginalLink = () => (
  <BrowserRouter>
    <OriginalLinkButton Href='/' imgUrl={linkIcon}>
      원본 링크
    </OriginalLinkButton>
  </BrowserRouter>
);
OriginalLink.storyName = '원본 링크';

export const Carousel = () => (
  <div>
    <CarouselSlideButton left />
    <CarouselSlideButton right />
  </div>
);
Carousel.storyName = '슬라이드 버튼';

export const CategoryCancel = () => (
  <CategoryCancelButton>Javascript</CategoryCancelButton>
);
CategoryCancel.storyName = '카테고리 선택취소 버튼';
