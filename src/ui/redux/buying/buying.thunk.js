import { http } from '../../../http';

import { clearArticles } from '../articles/clearArticles';
import { clearCart } from '../cart/clearCart';

import { POPUP_TYPE, popupManager } from '../../popup/popupManager';

export class BuyingThunk {

  constructor(dispatch) {
    this.dispatch = dispatch;
    this.setState = this.dispatch((_, getState) => { this.getState = getState; });
    this.cart = this.getState().cart;
  }

  async invoke() {
    const response = await http.post('/buying/create', this.cart);

    if (response.succeed) {
      this.dispatch(clearArticles.createAction());
      this.dispatch(clearCart.createAction());

      popupManager.emitPopup(POPUP_TYPE.BUYING_SUCCEED, { order: response.order });
    }
  }

}

export default BuyingThunk;
