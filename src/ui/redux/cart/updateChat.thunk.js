import { http } from '../../../http';
import { updateCart } from './updateCart';

export class UpdateChatThunk {

  constructor(dispatch, id, value) {
    this.dispatch = dispatch;
    this.id = id;
    this.value = value;
  }

  async invoke() {
    http.put('/cart', { id: this.id, value: this.value });

    this.dispatch(updateCart.createAction(this.id, this.value));
  }

}

export default UpdateChatThunk;
