import React from 'react';
import PropTypes from 'prop-types';

const FOUR = 4;

function SellerCardSale(props) {
  const {
    id,
    status,
    saleDate,
    deliveryAddress,
    deliveryNumber,
    totalPrice,
  } = props;

  const formatNumber = (number, length) => String(number).padStart(length, '0');
  const formatDate = (value) => {
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div key={ id }>
      <div>
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>
          { formatNumber(id, FOUR) }
        </p>
      </div>
      <div
        type="button"
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        { status }
      </div>
      <div>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>
          { formatDate(saleDate) }
        </p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>
          { `R$ ${totalPrice.replace('.', ',')}` }
        </p>
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        { deliveryAddress.concat(', ', deliveryNumber) }
      </div>
    </div>
  );
}

SellerCardSale.propTypes = {
  id: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTpyes.string,
  deliveryAdress: PropTypes.string,
  deliveryNumber: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;

export default SellerCardSale;
