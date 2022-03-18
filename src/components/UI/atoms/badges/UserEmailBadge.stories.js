import UserEmailBadge from './UserEmailBadge';

export default {
  title: 'atoms/뱃지',
  component: UserEmailBadge,
};

const Template = (args) => <UserEmailBadge {...args} />;

export const UserEmail = Template.bind({});

UserEmail.args = {
  children: 'cjy0029@naver.com',
};
UserEmail.storyName = '유저 이메일 뱃지';
