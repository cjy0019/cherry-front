import SmallAgencyBadge from '../SmallAgencyBadge';

export default {
  title: 'atoms/뱃지/기관 & 강사이름 뱃지',
  component: SmallAgencyBadge,
};

const Template = (args) => <SmallAgencyBadge {...args} />;

export const SmallAgency = Template.bind({});

SmallAgency.args = {
  children: '기관 groomedu',
};

SmallAgency.storyName =
  '메인 ipad 카드 3개 배치, 메인 모바일 리스트 형태, 상세 아이패드';
