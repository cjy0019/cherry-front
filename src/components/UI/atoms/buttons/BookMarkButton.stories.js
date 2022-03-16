import BookMarkButton from '../../atoms/buttons/BookMarkButton';

export default {
  title: '버튼',
};

const Template = (args) => <BookMarkButton {...args} />;

export const BookMark = Template.bind({});

BookMark.args = {};

BookMark.args = {
  active: false,
};

BookMark.storyName = '북마크 버튼';
