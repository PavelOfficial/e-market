import { connect } from 'react-redux';

import { BuyingPanel } from './buyingPanel';

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

const mapDispatchToProps = () => ({

  onBuy() {
    console.log('!!');
  },

});

export const BuyingPanelConnect = connect(mapStateToProps, mapDispatchToProps)(BuyingPanel);

export default BuyingPanelConnect;
