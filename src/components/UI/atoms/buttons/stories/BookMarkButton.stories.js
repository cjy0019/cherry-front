import BookMarkButton from '../BookMarkButton';

export default {
  title: 'atoms/버튼',
  component: BookMarkButton,
};

const Template = (args) => <BookMarkButton {...args} />;

export const BookMark = Template.bind({});

BookMark.args = {
  active: false,
};

BookMark.storyName = '북마크 버튼';
