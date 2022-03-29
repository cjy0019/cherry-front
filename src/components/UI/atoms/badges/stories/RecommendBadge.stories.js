import RecommendBadge from '../RecommendBadge';

export default {
  title: 'atoms/뱃지',
  component: RecommendBadge,
};

const Template = (args) => <RecommendBadge {...args} />;

export const Recommend = Template.bind({});

Recommend.args = {
  children: '추천해요!',
  point: true,
};

Recommend.storyName = '추천해요 뱃지';
