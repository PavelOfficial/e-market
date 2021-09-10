import React from 'react';
import PropTypes from 'prop-types';

import { style } from './articleList.style';
import { ArticleConnect } from './article.connect';
import {
  LineVisibilitySensor,
  useVisibilityChange,
} from '../../components/lineVisibilitySensor/lineVisibilitySensor';

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
  const {
    pending,
    activeSensor,
    onVisibleChange,
  } = useVisibilityChange({
    content: props.articles,
    onLoadPage: props.onLoadPage,
    isLastPage: props.isLastPage,
    propsPending: props.pending,
    process: props.process,
  });

  return (
    <style.Root
      cartExists={props.cartExists}
    >
      <Content
        articles={props.articles}
      />
      <Loader
        show={pending && !props.isLastPage}
      />
      <LineVisibilitySensor
        active={activeSensor}
        onChange={onVisibleChange}
      />
    </style.Root>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  pending: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  onLoadPage: PropTypes.func.isRequired,
  process: PropTypes.object.isRequired,
  cartExists: PropTypes.bool.isRequired,
};

export { ArticleList };

export default ArticleList;
