import ApproveBadge from './ApproveBadge';

export default {
  title: 'atoms/뱃지',
  component: ApproveBadge,
};

const Template = (args) => <ApproveBadge {...args} />;

export const Approve = Template.bind({});

Approve.args = {
  children: '승인 진행중',
  point: true,
};

Approve.storyName = '승인 뱃지';
