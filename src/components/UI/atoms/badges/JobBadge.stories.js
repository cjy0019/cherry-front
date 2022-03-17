import JobBadge from './JobBadge';

export default {
  title: 'atoms/뱃지',
  component: JobBadge,
};

const Template = (args) => <JobBadge {...args} />;

export const Job = Template.bind({});

Job.args = {
  children: '프론트',
};
