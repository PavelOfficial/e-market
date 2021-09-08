import { http } from '../../../http';

import { addArticles } from './addArticles';
import { clearArticles } from './clearArticles';

export class ArticlesThunk {

  static process = Promise.resolve();

  static pending = false;

  constructor(dispatch) {
    this.dispatch = dispatch;
    this.process = Promise.resolve();

    dispatch((_dispatch, getState) => { this.state = getState(); });
  }

  get options() {
    const { articles } = this.state;

    return {
      page: articles.page + 1,
      query: articles.query,
      isInChart: articles.isInChart,
    };
  }

  async callHttp() {
    try {
      await http.get('/articles', this.options)
        .then(this.checkLastProcess)
        .then(({ articles, isLastPage }) => {
          ArticlesThunk.pending = false;
          this.dispatch(addArticles.createAction(articles, isLastPage));
        });
    } catch (error) {
      // continue
    }
  }

  checkLastProcess = (response) => {
    if (ArticlesThunk.process !== this.process) {
      throw new Error('Trash request handling');
    }

    return response;
  }

  invoke() {
    ArticlesThunk.pending = true;

    if (this.options.page === 1) {
      this.dispatch(clearArticles.createAction());
    }

    this.process = this.callHttp();
    ArticlesThunk.process = this.process;
  }

}

export default ArticlesThunk;
