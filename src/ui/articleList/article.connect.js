import { connect } from 'react-redux';

import { Article } from './article';
import { UpdateChatThunk } from '../redux/cart/updateChat.thunk';

const mapStateToProps = (state, ownProps) => {
  const count = state.cart[ownProps.article.id];

  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => ({

  onChangeCount(id, value) {
    const thunk = new UpdateChatThunk(dispatch, id, value);
    thunk.invoke();
  },

});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,

  onChangeCount(count) {
    dispatchProps.onChangeCount(ownProps.article.id, count);
  },

});

export const ArticleConnect = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Article);

export default ArticleConnect;
