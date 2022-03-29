import TeacherBadge from '../TeacherBadge';

export default {
  title: 'atoms/뱃지/기관 & 강사이름 뱃지',
  component: TeacherBadge,
};

const Template = (args) => <TeacherBadge {...args} />;

export const Teacher = Template.bind({});

Teacher.args = {
  children: '강사 John Smilga',
};

Teacher.storyName = 'pc 메인 4개 & pc 상세 하단';
