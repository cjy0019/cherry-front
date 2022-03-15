import CategorySelectButton from './CategorySelectButton';
import CherryPickStartButton from './CherryPickStartButton';
import DeleteAllButton from './DeleteAllButton';
import MoreLectureButton from './MoreLectureButton';
import RetryButton from './RetryButton';
import ReviewButton from './ReviewButton';
import SatisficationButton from './SatisficationButton';
import SaveButton from './SaveButton';

export default {
  title: 'Buttons',
};

export const Retry = () => <RetryButton />;
export const CherryPickStart = () => <CherryPickStartButton />;
export const WriteReview = () => <ReviewButton>리뷰 작성하기</ReviewButton>;
export const CompleteReview = () => (
  <ReviewButton dim>리뷰 작성완료</ReviewButton>
);
export const Save = () => (
  <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
    <SaveButton>저장하기</SaveButton>
    <SaveButton dim>저장하기</SaveButton>
  </div>
);
export const SatisficationVeryGood = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <SatisficationButton point>매우 만족</SatisficationButton>
    <SatisficationButton>만족</SatisficationButton>
    <SatisficationButton>보통</SatisficationButton>
    <SatisficationButton>그저 그럼</SatisficationButton>
  </div>
);

export const MoreLecture = () => (
  <MoreLectureButton>강의 전체 보기</MoreLectureButton>
);

export const CategorySelect = () => (
  <div
    style={{
      display: 'flex',
      gap: '10px',
      backgroundColor: '#181920',
      height: '100vh',
      paddingTop: '30px',
    }}>
    <CategorySelectButton>전체</CategorySelectButton>
    <CategorySelectButton selected>전체</CategorySelectButton>
  </div>
);

export const DeleteAll = () => (
  <div>
    <DeleteAllButton>모두 지우기</DeleteAllButton>
  </div>
);
