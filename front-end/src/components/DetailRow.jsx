import React from 'react';
import PropTypes from 'prop-types';

function DetailRow(props, index) {
  const { id, title, price, quantity } = props;

  return (
    <tr key={ id }>
      <td
        data-testid={
          `customer_order_details__element-order-table-item-number-${index}`
        }
      >
        { index + 1 }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-name-${index}` }>
        { title }
      </td>
      <td data-testid={ `customer_order_details__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_order_details__element-order-total-price-${index}` }>
        { String(price.toFixed(2)).replace('.', ',') }
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-sub-total-${index}`
        }
      >
        { String((quantity * price).toFixed(2)).replace('.', ',') }
      </td>
    </tr>
  );
}

DetailRow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default DetailRow;