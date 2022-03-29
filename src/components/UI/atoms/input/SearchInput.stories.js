import React from 'react';
import SearchInput from './SearchInput';

export default {
  title: 'atoms/입력창/검색',
  component: SearchInput,
};

export const BeforeSearch = () => <SearchInput main />;
export const AfterSearch = () => <SearchInput searched />;

BeforeSearch.storyName = '검색 전 입력창';
AfterSearch.storyName = '검색 후 입력창';
