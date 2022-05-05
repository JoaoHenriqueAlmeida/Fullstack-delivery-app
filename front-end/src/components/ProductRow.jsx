import React from 'react';
import PropTypes from 'prop-types';

function ProductRow(props, index) {
  const { id, title, price, quantity } = props;
  return (
    <tr key={ id }>
      <td>
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${id}` }>
        { title }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${id}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }>
        { price }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }>
        { (quantity * price).toFixed(2) }
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${id}` }
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
