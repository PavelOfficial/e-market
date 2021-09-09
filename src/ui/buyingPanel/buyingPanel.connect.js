import { connect } from 'react-redux';

import { BuyingPanel } from './buyingPanel';
import { BuyingThunk } from '../redux/buying/buying.thunk';

const mapStateToProps = (state) => {
  const articlesStore = state.articles.store;
  const { cart } = state;
  const count = Object.values(cart).reduce((result, item) => result + item, 0);
  const totalPrice = Object.keys(cart)
    .reduce((result, id) => {
      result += articlesStore[id].price * cart[id];

      return result;
    }, 0);

  return {
    count,
    totalPrice,
    currency: 'RUB',
  };
};

const mapDispatchToProps = (dispatch) => ({

  onBuy() {
    const thunk = new BuyingThunk(dispatch);
    thunk.invoke();
  },

});

export const BuyingPanelConnect = connect(mapStateToProps, mapDispatchToProps)(BuyingPanel);

export default BuyingPanelConnect;
