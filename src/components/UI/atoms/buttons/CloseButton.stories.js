import CloseButton from './CloseButton';

export default {
  title: '버튼',
};

const Template = (args) => <CloseButton {...args} />;

export const Close = Template.bind({});

Close.args = {
  dark: true,
};
Close.storyName = '닫기 버튼';
