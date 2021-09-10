import React from 'react';
import PropTypes from 'prop-types';

import { style } from '../buyingSucceed/buyingSucceed.style';
import { popupManager } from '../popupManager';

function OrderCanceled(props) {
  return (
    <style.Root>
      <style.Header>
        {`Заказ №${props.order} отменен`}
      </style.Header>
      <style.ButtonGroup>
        <style.ButtonSucceed onClick={() => popupManager.emitPopup(null)}>
          Продолжить покупки
        </style.ButtonSucceed>
      </style.ButtonGroup>
    </style.Root>
  );
}

OrderCanceled.propTypes = {
  order: PropTypes.number.isRequired,
};

export { OrderCanceled };

export default OrderCanceled;
