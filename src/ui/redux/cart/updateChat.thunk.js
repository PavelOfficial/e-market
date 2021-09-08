import { http } from '../../../http';
import { updateCart } from './updateCart';

export class UpdateChatThunk {

  constructor(dispatch, id, value) {
    this.dispatch = dispatch;
    this.id = id;
    this.value = value;
  }

  async invoke() {
    this.dispatch(updateCart.createAction(this.id, this.value));

    try {
      await http.put('/cart');
    } catch (error) {
      // continue
    }
  }

}

export default UpdateChatThunk;
