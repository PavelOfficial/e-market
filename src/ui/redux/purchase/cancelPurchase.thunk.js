import { http } from '../../../http';
import { POPUP_TYPE, popupManager } from '../../popup/popupManager';

class CancelPurchaseThunk {

  constructor(dispatch, order) {
    this.dispatch = dispatch;
    this.order = order;
  }

  async invoke() {
    const response = await http.post('/purchase/cancel', { order: this.order });

    if (response.succeed) {
      popupManager.emitPopup(POPUP_TYPE.ORDER_CANCELED, { order: this.order });
    }
  }

}

export { CancelPurchaseThunk };

export default CancelPurchaseThunk;
