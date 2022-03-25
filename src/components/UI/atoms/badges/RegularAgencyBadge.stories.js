import RegularAgencyBadge from './RegularAgencyBadge';

export default {
  title: 'atoms/뱃지/기관 & 강사이름 뱃지',
  component: RegularAgencyBadge,
};

const Template = (args) => <RegularAgencyBadge {...args} />;

export const RegularAgency = Template.bind({});

RegularAgency.args = {
  children: '기관 FastCampus',
};

RegularAgency.storyName = '메인 pc 카드 3개 배치, 상세 모바일';
