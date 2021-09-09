import React from 'react';

import { style } from './app.style';
import { ArticleListConnect } from './articleList/articleList.connect';
import { SearchConnect } from './search/search.connect';
import { BuyingPanelConnect } from './buyingPanel/buyingPanel.connect';

export const App = () => (
  <style.Root>
    <SearchConnect />
    <ArticleListConnect />
    <BuyingPanelConnect />
  </style.Root>
);

export default App;
