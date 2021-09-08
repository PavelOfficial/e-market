import { connect } from 'react-redux';

import { Article } from './article';
import { updateCart } from '../redux/cart/updateCart';

const mapStateToProps = (state, ownProps) => ({
  count: state.cart[ownProps.id],
});

const mapDispatchToProps = (dispatch) => ({

  onChangeCount(id, count) {
    dispatch(updateCart.createAction(id, count));
  },

});

export const ArticleConnect = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleConnect;
