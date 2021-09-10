import React from 'react';
import PropTypes from 'prop-types';

import { style } from './purchasePanel.style';

function PurchasePanel(props) {
  if (!props.count) {
    return null;
  }

  return (
    <style.Root>
      <style.Text>
        {`Всего товаров: ${props.count}. На сумму ${props.totalPrice} ${props.currency}`}
      </style.Text>
      <style.ButtonBox>
        <style.Button
          type="button"
          onClick={props.onBuy}
        >
          Купить
        </style.Button>
      </style.ButtonBox>
    </style.Root>
  );
}

PurchasePanel.propTypes = {
  count: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onBuy: PropTypes.func.isRequired,
};

export { PurchasePanel };

export default PurchasePanel;
