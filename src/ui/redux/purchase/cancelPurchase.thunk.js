import { axios } from '../../../axios';

import { POPUP_TYPE, popupManager } from '../../popup/popupManager';

class CancelPurchaseThunk {

  constructor(dispatch, order) {
    this.dispatch = dispatch;
    this.order = order;
  }

  async invoke() {
    const response = await axios.post('/purchase/cancel', { order: this.order });

    if (response.data.succeed) {
      popupManager.emitPopup(POPUP_TYPE.ORDER_CANCELED, { order: this.order });
    }
  }

}

export { CancelPurchaseThunk };

export default CancelPurchaseThunk;
