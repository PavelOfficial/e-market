import ee from 'event-emitter';

export const POPUP_TYPE = {
  BUYING_SUCCEED: 'BUYING_SUCCEED',
  ORDER_CANCELED: 'ORDER_CANCELED',
};

class PopupManager {

  onPopup(listener) {
    this.on('popup', listener);
  }

  emitPopup(name, props) {
    this.emit('popup', name, props);
  }

}

ee(PopupManager.prototype);

export const popupManager = new PopupManager();

export default popupManager;
