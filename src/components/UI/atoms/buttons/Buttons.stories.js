import CherryPickStartButton from './CherryPickStartButton';
import RetryButton from './RetryButton';
import ReviewButton from './ReviewButton';
import SaveButton from './SaveButton';

export default {
  title: 'Buttons',
  component: ReviewButton,
};

export const Retry = () => <RetryButton />;
export const CherryPickStart = () => <CherryPickStartButton />;
export const WriteReview = () => <ReviewButton>리뷰 작성하기</ReviewButton>;
export const CompleteReview = () => (
  <ReviewButton dim>리뷰 작성완료</ReviewButton>
);
export const Save = () => <SaveButton>저장하기</SaveButton>;
export const SaveDim = () => <SaveButton dim>저장하기</SaveButton>;
