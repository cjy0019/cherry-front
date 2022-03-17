import ReviewButton from './ReviewButton';

export default {
  title: '버튼/버튼',
  component: ReviewButton,
};

const Template = (args) => <ReviewButton {...args} />;

export const Review = Template.bind({});

Review.args = {
  children: '리뷰 작성하기',
  dim: true,
};
Review.storyName = '리뷰 작성하기';
