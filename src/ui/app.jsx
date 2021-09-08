import React from 'react';

import { style } from './app.style';
import { ArticleList } from './articleList/articleList';
import { articles } from '../http/data';

export function App() {
  return (
    <style.Root>
      <ArticleList
        articles={articles}
      />
    </style.Root>
  );
}

export default App;
