import React, { useEffect, useState } from 'react';

import { style } from './popupContainer.style';
import { popupManager, POPUP_TYPE } from './popupManager';

import { PurchaseSucceedConnect } from './purchaseSucceed/purchaseSucceed.connect';
import { OrderCanceled } from './orderCanceled/orderCanceled';

const popupMap = {
  [POPUP_TYPE.ORDER_CANCELED]: OrderCanceled,
  [POPUP_TYPE.BUYING_SUCCEED]: PurchaseSucceedConnect,
};

export function PopupContainer() {
  const [popup, setPopup] = useState({});

  useEffect(() => {
    popupManager.onPopup((name, props) => {
      setPopup({ name, props });
    });
  }, []);

  const Popup = popupMap[popup.name];
  if (!Popup) {
    return null;
  }

  return (
    <style.Root>
      <style.Backdrop />
      <Popup
        {...popup.props}
      />
    </style.Root>
  );
}

export default PopupContainer;
