import React from 'react';
import OtherDatas from '../OtherDatas';

export default {
  title: 'molecules/어드민/이외 정보 입력파트',
  component: OtherDatas,
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

const Template = (args) => <OtherDatas {...args} />;

export const OtherDatasStory = Template.bind({});

OtherDatasStory.storyName = '이외 정보 입력파트';
