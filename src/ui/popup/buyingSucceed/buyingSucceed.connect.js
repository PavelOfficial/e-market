import { connect } from 'react-redux';

import { BuyingSucceed } from './buyingSucceed';
import { CancelThunk } from '../../redux/buying/cancel.thunk';

const mapDispatchToProps = (dispatch) => ({

  onCancel(order) {
    const cancelThunk = new CancelThunk(dispatch, order);
    cancelThunk.invoke();
  },

});

export const BuyingSucceedConnect = connect(null, mapDispatchToProps)(BuyingSucceed);

export default BuyingSucceedConnect;
