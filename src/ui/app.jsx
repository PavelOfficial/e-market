import React from 'react';

import { style } from './app.style';
import { ArticleListConnect } from './articleList/articleList.connect';

export function App() {
  return (
    <style.Root>
      <ArticleListConnect />
    </style.Root>
  );
}

export default App;
