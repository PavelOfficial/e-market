import { connect } from 'react-redux';

import { ArticleList } from './articleList';
import { ArticlesThunk } from '../redux/articles/articles.thunk';

const mapStateToProps = (state) => {
  const { articles } = state;
  let articleList = articles.list;

  if (articles.search.isInCart) {
    articleList = articles.list.filter((item) => state.cart[item.id]);
  }

  return {
    pending: ArticlesThunk.pending,
    process: ArticlesThunk.process,
    isLastPage: state.articles.isLastPage,
    articles: articleList,
  };
};

const mapDispatchToProps = (dispatch) => ({

  onLoadPage() {
    const thunk = new ArticlesThunk(dispatch);
    return thunk.invoke();
  },

});

export const ArticleListConnect = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticleListConnect;
