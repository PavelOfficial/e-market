import React from 'react';

import { style } from './app.style';
import { ArticleListConnect } from './articleList/articleList.connect';
import { SearchConnect } from './search/search.connect';
import { BuyingPanelConnect } from './buyingPanel/buyingPanel.connect';
import { PopupContainer } from './popup/popupContainer';

export function App() {
  return (
    <style.Root>
      <SearchConnect />
      <ArticleListConnect />
      <BuyingPanelConnect />
      <PopupContainer />
    </style.Root>
  );
}

export default App;
