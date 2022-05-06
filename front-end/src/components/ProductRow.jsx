import React from 'react';
import PropTypes from 'prop-types';

function ProductRow(props, index) {
  const { id, title, price, quantity } = props;
  return (
    <tr key={ id }>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { title }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { price }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        { (quantity * price).toFixed(2) }
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          aria-label="remove-product-button"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

ProductRow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductRow;
