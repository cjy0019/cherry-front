import ToggleButton from '../ToggleButton';

export default {
  title: 'atoms/버튼',
  component: ToggleButton,
};

const Template = (args) => <ToggleButton {...args} />;

export const Toggle = Template.bind({});

Toggle.storyName = '토글 버튼';
