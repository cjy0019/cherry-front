import OfflineBadge from '../OfflineBadge';

export default {
  title: 'atoms/뱃지',
  component: OfflineBadge,
};

const Template = (args) => <OfflineBadge {...args} />;

export const Offline = Template.bind({});

Offline.storyName = '오프라인 뱃지';
