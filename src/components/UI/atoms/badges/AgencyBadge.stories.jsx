import AgencyBadge from './AgencyBadge';

export default {
  title: 'atoms/뱃지',
  component: AgencyBadge,
};

const Template = (args) => <AgencyBadge {...args} />;

export const Agency = Template.bind({});

Agency.args = {
  children: '기관 groomedu',
};

Agency.storyName = '기관 뱃지';
