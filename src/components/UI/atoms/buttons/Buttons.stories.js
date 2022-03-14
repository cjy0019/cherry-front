import CherryPickStartButton from './CherryPickStartButton';
import RetryButton from './RetryButton';
import ReviewButton from './ReviewButton';

export default {
  title: 'Buttons',
  component: ReviewButton,
};

export const Retry = () => <RetryButton />;
export const CherryPickStart = () => <CherryPickStartButton />;
export const WriteReview = () => <ReviewButton>리뷰 작성하기</ReviewButton>;
export const CompleteReview = () => (
  <ReviewButton point>리뷰 작성완료</ReviewButton>
);
