import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { style } from './articleList.style';
import { ArticleConnect } from './article.connect';
import {
  LineVisibilitySensor,
  useVisibilityChange,
} from '../lineVisibilitySensor/lineVisibilitySensor';

const Content = ({ articles }) => {
  const component = articles.map((item) => (
    <ArticleConnect
      key={item.id}
      article={item}
    />
  ));

  return component;
};

const Loader = (props) => {
  if (props.show) {
    return (
      <style.LoaderBox>
        <style.Loader>
          Loading. Please wait.
        </style.Loader>
      </style.LoaderBox>
    );
  }

  return null;
};

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};

const ArticleList = (props) => {
  const [pending, setPending] = useState(false);
  const activeSensor = !pending && !props.isLastPage;

  useEffect(() => {
    setPending(props.pending);
  }, [props.pending, props.process]);

  const onVisibleChange = useVisibilityChange({
    activeSensor,
    content: props.articles,
    setPending,
    onLoadPage: props.onLoadPage,
  });

  return (
    <style.Root>
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
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  pending: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  onLoadPage: PropTypes.func.isRequired,
  process: PropTypes.object.isRequired,
};

export { ArticleList };

export default ArticleList;
