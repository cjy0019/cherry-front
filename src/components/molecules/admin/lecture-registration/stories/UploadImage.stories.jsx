import React from 'react';
import UploadImage from '../UploadImage';

export default {
  title: 'molecules/어드민/이미지 첨부',
  component: UploadImage,
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

const Template = (args) => <UploadImage {...args} />;

export const UploadImageStory = Template.bind({});

UploadImageStory.storyName = '이미지 첨부';
