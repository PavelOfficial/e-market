import React from 'react';

import { style } from './app.style';
import { ArticleListConnect } from './articleList/articleList.connect';
import { SearchConnect } from './search/search.connect';

export const App = () => (
  <style.Root>
    <SearchConnect />
    <ArticleListConnect />
  </style.Root>
);

export default App;
