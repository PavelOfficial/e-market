import { connect } from 'react-redux';

import { PurchaseSucceed } from './purchaseSucceed';
import { CancelPurchaseThunk } from '../../redux/purchase/cancelPurchase.thunk';

const mapDispatchToProps = (dispatch) => ({

  onCancel(order) {
    const cancelThunk = new CancelPurchaseThunk(dispatch, order);
    cancelThunk.invoke();
  },

});

export const PurchaseSucceedConnect = connect(null, mapDispatchToProps)(PurchaseSucceed);

export default PurchaseSucceedConnect;
