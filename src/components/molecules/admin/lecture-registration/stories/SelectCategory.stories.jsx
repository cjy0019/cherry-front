import React from 'react';
import SelectCategory from '../SelectCategory';

export default {
  title: 'molecules/어드민/카테고리 선택',
  component: SelectCategory,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: '10%' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <SelectCategory {...args} />;

export const SelectCategoryStory = Template.bind({});

SelectCategoryStory.args = {
  category: '프론트엔드',
};

SelectCategoryStory.storyName = '카테고리 선택';
