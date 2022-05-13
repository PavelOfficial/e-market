import { clearArticles } from '../articles/clearArticles';
import { clearCart } from '../cart/clearCart';

import { POPUP_TYPE, popupManager } from '../../popup/popupManager';
import { axios } from '../../../axios';

export class CreatePurchaseThunk {

  constructor(dispatch) {
    this.dispatch = dispatch;
    this.setState = this.dispatch((_, getState) => { this.getState = getState; });
    this.cart = this.getState().cart;
  }

  async invoke() {
    const response = await axios.post('/purchase/create', { data: this.cart });

    if (response.data.succeed) {
      this.dispatch(clearArticles.createAction());
      this.dispatch(clearCart.createAction());

      popupManager.emitPopup(POPUP_TYPE.BUYING_SUCCEED, { order: response.data.order });
    }
  }

}

export default CreatePurchaseThunk;
