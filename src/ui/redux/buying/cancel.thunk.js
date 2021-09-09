import { http } from '../../../http';
import { POPUP_TYPE, popupManager } from '../../popup/popupManager';

class CancelThunk {

  constructor(dispatch, order) {
    this.dispatch = dispatch;
    this.order = order;
  }

  async invoke() {
    const response = await http.post('/buying/cancel', { order: this.order });

    if (response.succeed) {
      popupManager.emitPopup(POPUP_TYPE.ORDER_CANCELED, { order: this.order });
    }
  }

}

export { CancelThunk };

export default CancelThunk;
