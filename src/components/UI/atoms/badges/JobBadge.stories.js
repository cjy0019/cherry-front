import JobBadge from './JobBadge';

export default {
  title: 'atoms/뱃지',
  component: JobBadge,
};

const Template = (args) => <JobBadge {...args} />;

export const Job = Template.bind({});

Job.args = {
  children: '1~3년차',
};

Job.storyName = '직무 관련 뱃지';
