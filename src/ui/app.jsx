import React from 'react';

import { style } from './app.style';
import { ArticleList } from './articleList/articleList';

const articles = [];

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
