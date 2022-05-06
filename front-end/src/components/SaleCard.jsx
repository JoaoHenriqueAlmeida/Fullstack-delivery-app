import React from 'react';
import PropTypes from 'prop-types';

const FOUR = 4;

function SaleCard(props) {
  const { id, status, date, price } = props;

  const formatNumber = (number, length) => String(number).padStart(length, '0');

  return (
    <div key={ id } style={ { display: 'flex', flexDirection: 'row' } }>
      <div>
        <p>Pedido</p>
        <p data-testid={ `customer_orders__element-order-${id}` }>
          { formatNumber(id, FOUR) }
        </p>
      </div>
      <button
        type="button"
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status.toUpperCase() }
      </button>
      <div>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          { date }
        </p>
        <p data-testid={ `customer_orders__element-card-price-${id}` }>
          { `R$ ${String(price.toFixed(2).replace('.', ','))}` }
        </p>
      </div>
    </div>
  );
}

SaleCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default SaleCard;
