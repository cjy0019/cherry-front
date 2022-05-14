import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Bookmark from './Bookmark';

export default {
  title: 'molecules/북마크',
  component: Bookmark,
  parameters: {
    layout: 'fullscreen',
  },
};

export const BookmarkStory = () => (
  <BrowserRouter>
    <Bookmark />
  </BrowserRouter>
);

BookmarkStory.storyName = '북마크';
