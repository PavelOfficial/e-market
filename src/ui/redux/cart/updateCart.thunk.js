import { axios } from '../../../axios';

import { updateCart } from './updateCart';

export class UpdateCartThunk {

  constructor(dispatch, id, value) {
    this.dispatch = dispatch;
    this.id = id;
    this.value = value;
  }

  async invoke() {
    if (this.value) {
      axios.put('/cart', { id: this.id, value: this.value });
    } else {
      axios.delete('/cart', { data: { id: this.id } });
    }

    this.dispatch(updateCart.createAction(this.id, this.value));
  }

}

export default UpdateCartThunk;
