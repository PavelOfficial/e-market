import React from 'react';

import { style } from './app.style';
import { ArticleListConnect } from './articleList/articleList.connect';
import { SearchConnect } from './search/search.connect';
import { PurchasePanelConnect } from './purchasePanel/purchasePanel.connect';
import { PopupContainer } from './popup/popupContainer';

export function App() {
  return (
    <style.Root>
      <SearchConnect />
      <ArticleListConnect />
      <PurchasePanelConnect />
      <PopupContainer />
    </style.Root>
  );
}

export default App;
