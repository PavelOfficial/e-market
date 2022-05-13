import React from 'react';
import PropTypes from 'prop-types';

import { style } from './articleList.style';
import { ArticleConnect } from './article.connect';
import { useScrollLoading } from './useScrollLoading';
import { ArticlesThunk } from '../redux/articles/articles.thunk';

function Content({ articles }) {
  const result = articles.map((item) => (
    <ArticleConnect
      key={item.id}
      article={item}
    />
  ));

  return result;
}

Content.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function Loader(props) {
  if (!props.show) {
    return null;
  }

  return (
    <style.LoaderBox>
      <style.Loader>
        Loading. Please wait.
      </style.Loader>
    </style.LoaderBox>
  );
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};

function ArticleList(props) {
  const handleNewLoad = () => {
    const isAbleToLoad = !ArticlesThunk.pending && !props.isLastPage;

    if (isAbleToLoad) {
      props.onLoadPage();
    }
  };

  const { ref } = useScrollLoading(handleNewLoad, 50);

  return (
    <style.Root
      ref={ref}
      cartExists={props.cartExists}
    >
      <Content
        articles={props.articles}
      />
      <Loader
        show={props.pending && !props.isLastPage}
      />
    </style.Root>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  pending: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  onLoadPage: PropTypes.func.isRequired,
  cartExists: PropTypes.bool.isRequired,
};

export { ArticleList };

export default ArticleList;
