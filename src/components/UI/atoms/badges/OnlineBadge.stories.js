import OnlineBadge from './OnlineBadge';

export default {
  title: 'atoms/뱃지',
  component: OnlineBadge,
};

const Template = (args) => <OnlineBadge {...args} />;

export const Online = Template.bind({});

Online.args = {
  children: 'ON-LINE',
};

Online.storyName = '온라인 뱃지';
