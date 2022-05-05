import { BrowserRouter } from 'react-router-dom';
import SideBar from '../SideBar';

export default {
  title: 'molecules/상세 페이지',
  component: SideBar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <SideBar {...args} />;

export const SideBarStory = Template.bind({});

SideBarStory.storyName = '사이드바';
