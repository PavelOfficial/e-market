import { connect } from 'react-redux';

import { ArticleList } from './articleList';
import { ArticlesThunk } from '../redux/articles/articles.thunk';

const mapStateToProps = (state) => ({
  pending: ArticlesThunk.pending,
  process: ArticlesThunk.process,
  isLastPage: state.articles.isLastPage,
  articles: state.articles.list,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({

  onLoadPage() {
    const thunk = new ArticlesThunk(dispatch);
    return thunk.invoke();
  },

});

export const ArticleListConnect = connect(mapStateToProps, mapDispatchToProps)(ArticleList);

export default ArticleListConnect;
