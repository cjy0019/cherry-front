import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminHeader from './AdminHeader';

export default {
  title: 'molecules/어드민/헤더',
  component: AdminHeader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ marginTop: '3%' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <AdminHeader {...args} />;

export const AdminHeaderStory = Template.bind({});

AdminHeaderStory.storyName = '헤더';
