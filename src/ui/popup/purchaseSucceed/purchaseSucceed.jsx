import React from 'react';
import PropTypes from 'prop-types';

import { popupManager } from '../popupManager';

import { style } from './purchaseSucceed.style';

function PurchaseSucceed(props) {
  return (
    <style.Root>
      <style.Header>
        Поздравляем с покупкой.
      </style.Header>
      <style.Text>
        <style.Paragraph>
          Ваш заказ №
          {props.order}
        </style.Paragraph>
        <style.Paragraph>
          Заказ оплачен с вашей карты.
        </style.Paragraph>
        <style.Paragraph>
          Скоро курьер доставит заказ по вашему адресу.
        </style.Paragraph>
      </style.Text>
      <style.ButtonGroup>
        <style.ButtonCancel onClick={() => props.onCancel(props.order)}>
          Отменить заказ
        </style.ButtonCancel>
        <style.ButtonSucceed onClick={() => popupManager.emitPopup(null)}>
          Продолжить покупки
        </style.ButtonSucceed>
      </style.ButtonGroup>
    </style.Root>
  );
}

PurchaseSucceed.propTypes = {
  order: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export { PurchaseSucceed };

export default PurchaseSucceed;
