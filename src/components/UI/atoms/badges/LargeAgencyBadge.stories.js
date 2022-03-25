import LargeAgencyBadge from './LargeAgencyBadge';

export default {
  title: 'atoms/뱃지/기관 & 강사이름 뱃지',
  component: LargeAgencyBadge,
};

const Template = (args) => <LargeAgencyBadge {...args} />;

export const DetailPageAgency = Template.bind({});

DetailPageAgency.args = {
  children: '기관 groomedu',
};

DetailPageAgency.storyName = '상세 PC 상단';
