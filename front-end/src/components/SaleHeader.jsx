import React from 'react';
import PropTypes from 'prop-types';

const prefix = 'customer_order_details__';

function SaleHeader(props) {
  const { id, sellerId, saleDate, status } = props;
  const formatNumber = (number, length) => String(number).padStart(length, '0');

  return (
    <thead>
      <tr>
        <th
          data-testid={ `${prefix}element-order-details-label-order-id` }
        >
          { `PEDIDO ${formatNumber(id)}` }
        </th>
        <th
          data-testid={ `${prefix}element-order-details-label-seller-name` }
        >
          { `P. Vend: ${sellerId}` }
        </th>
        <th
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { saleDate }
        </th>
        <th
          data-testid={ `${prefix}element-order-details-label-delivery-status` }
        >
          { status }
        </th>
        <th>
          <button
            type="button"
            data-testid={ `${prefix}button-delivery-check` }
          >
            MARCAR COMO ENTREGUE
          </button>
        </th>
      </tr>
    </thead>
  );
}

SaleHeader.propTypes = {
  id: PropTypes.number,
  sellerId: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default SaleHeader;
