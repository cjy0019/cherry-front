import CherryPickStartButton from './CherryPickStartButton';
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
