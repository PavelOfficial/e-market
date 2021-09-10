import { connect } from 'react-redux';

import { PurchasePanel } from './purchasePanel';
import { CreatePurchaseThunk } from '../redux/purchase/createPurchase.thunk';

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
    const thunk = new CreatePurchaseThunk(dispatch);
    thunk.invoke();
  },

});

export const PurchasePanelConnect = connect(mapStateToProps, mapDispatchToProps)(PurchasePanel);

export default PurchasePanelConnect;
