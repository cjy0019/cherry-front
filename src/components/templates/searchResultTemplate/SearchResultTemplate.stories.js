import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchResultTemplate from './SearchResultTemplate';

export default {
  title: 'templates/검색 결과 페이지',
  component: SearchResultTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export const SearchResultTemplateStory = () => (
  <BrowserRouter>
    <SearchResultTemplate />
  </BrowserRouter>
);

SearchResultTemplateStory.storyName = '검색 결과 페이지';
