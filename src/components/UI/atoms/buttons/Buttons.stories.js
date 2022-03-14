import CherryPickStartButton from './CherryPickStartButton';
import RetryButton from './RetryButton';

export default {
  title: 'Buttons',
  component: CherryPickStartButton,
};

export const Retry = () => <RetryButton />;
export const CherryPickStart = () => <CherryPickStartButton />;
