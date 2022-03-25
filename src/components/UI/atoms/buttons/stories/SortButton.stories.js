import SortButton from '../SortButton';

export default {
  title: 'atoms/버튼',
  component: SortButton,
};

const Template = (args) => <SortButton {...args} />;

export const Sort = Template.bind({});

Sort.args = {
  children: '최신순',
};
Sort.storyName = '정렬 버튼';
