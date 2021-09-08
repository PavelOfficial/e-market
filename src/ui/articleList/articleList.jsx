import React from 'react';
import PropTypes from 'prop-types';

import { style } from './articleList.style';
import { Article } from './article';

const Content = ({ articles }) => {
  const component = articles.map((item) => (
    <Article
      key={item.id}
      article={item}
      count={0}
    />
  ));

  return component;
};

export const ArticleList = (props) => (
  <style.Root>
    <Content
      articles={props.articles}
    />
  </style.Root>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticleList;
