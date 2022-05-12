import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../context/Provider';

function SaleRow(props, index) {
  const { productId, quantity } = props;
  const { products } = useContext(MyContext);

  return (
    <tr key={ productId }>
      <td
        data-testid={
          `seller_order_details__element-order-table-item-number-${index}`
        }
      >
        { index + 1 }
      </td>
      <td data-testid={ `seller_order_details__element-order-table-name-${index}` }>
        { products[productId - 1].title }
      </td>
      <td data-testid={ `seller_order_details__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `seller_order_details__element-order-total-price-${index}` }>
        { products[productId - 1].price }
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-sub-total-${index}`
        }
      >
        { (products[productId - 1].price * quantity).toFixed(2) }
      </td>
    </tr>
  );
}

SaleRow.propTypes = {
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default SaleRow;
