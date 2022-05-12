import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../context/Provider';
import '../styles/checkout.css';

function ProductRow(props, index) {
  const { removeItem } = useContext(MyContext);
  const { id, title, price, quantity } = props;

  return (
    <tr key={ id }>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        className="item"
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        className="description"
      >
        { title }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { String(price.toFixed(2)).replace('.', ',') }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        { String((quantity * price).toFixed(2)).replace('.', ',') }
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          aria-label="remove-product-button"
          onClick={ (() => removeItem(id)) }
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
