import React from 'react';
import PropTypes from 'prop-types';
import { updateSale } from '../utils/requests';

const prefix = 'seller_order_details__';
const FOUR = 4;

function SellerHeader(props) {
  const {
    id,
    saleDate,
    status,
    preparing,
    setPreparing,
    token,
    inTransit,
    setInTransit,
  } = props;

  const formatNumber = (number, length) => String(number).padStart(length, '0');
  const formatDate = (value) => {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const enableButton = () => {
    if (inTransit) return true;
    if (!preparing && !inTransit) return true;
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
            data-testid={ `${prefix}button-preparing-check` }
            disabled={ preparing }
            onClick={ async () => {
              setPreparing(!preparing);
              await updateSale(id, token, { status: 'Preparando' });
            } }
          >
            PREPARAR PEDIDO
          </button>
        </th>
        <th>
          <button
            type="button"
            data-testid={ `${prefix}button-dispatch-check` }
            disabled={ enableButton() }
            onClick={ async () => {
              setInTransit(!inTransit);
              await updateSale(id, token, { status: 'Em Trânsito' });
            } }
          >
            SAIU PARA ENTREGA
          </button>
        </th>
      </tr>
    </thead>
  );
}

SellerHeader.propTypes = {
  id: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
  preparing: PropTypes.bool,
  setPreparing: PropTypes.func,
  inTransit: PropTypes.bool,
  setInTransit: PropTypes.func,
  token: PropTypes.string,
}.isRequired;

export default SellerHeader;
