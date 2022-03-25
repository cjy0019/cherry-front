import DetailPageAgencyBadge from './DetailPageAgencyBadge';

export default {
  title: 'atoms/뱃지/기관 & 강사이름 뱃지',
  component: DetailPageAgencyBadge,
};

const Template = (args) => <DetailPageAgencyBadge {...args} />;

export const DetailPageAgency = Template.bind({});

DetailPageAgency.args = {
  children: '기관 groomedu',
};

DetailPageAgency.storyName = '상세 PC 상단';
