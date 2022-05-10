import React from 'react';
import PropTypes from 'prop-types';

const prefix = 'customer_order_details__';
const FOUR = 4;

function SaleHeader(props) {
  const { id, sellerId, saleDate, status } = props;
  const formatNumber = (number, length) => String(number).padStart(length, '0');
  const formatDate = (value) => {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <thead>
      <tr>
        <th
          data-testid={ `${prefix}element-order-details-label-order-id` }
        >
          { `PEDIDO ${formatNumber(id, FOUR)}` }
        </th>
        <th
          data-testid={ `${prefix}element-order-details-label-seller-name` }
        >
          { sellerId === 2 ? 'Fulana Pereira' : ''}
        </th>
        <th
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { formatDate(saleDate) }
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
            disabled
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
