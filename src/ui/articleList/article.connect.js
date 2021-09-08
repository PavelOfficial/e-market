import { connect } from 'react-redux';

import { Article } from './article';
import { updateCart } from '../redux/cart/updateCart';

const mapStateToProps = (state, ownProps) => {
  const count = state.cart[ownProps.article.id];

  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => ({

  onChangeCount(id, count) {
    dispatch(updateCart.createAction(id, count));
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
