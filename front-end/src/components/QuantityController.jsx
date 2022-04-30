import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

function QuantityController(props) {
  const { id } = props;
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (quantity < 0) setQuantity(0);
    if (quantity > 0) setDisabled(false);
    if (quantity === 0) setDisabled(true);
  }, [quantity]);

  return (
    <div>
      <button
        type="button"
        aria-label="subtract-product"
        onClick={ (() => setQuantity(quantity - 1)) }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        disabled={ disabled }
      >
        <FaMinusSquare />
      </button>

      <span data-testid={ `customer_products__input-card-quantity-${id}` }>
        { quantity }
      </span>

      <button
        type="button"
        aria-label="add-product"
        onClick={ (() => setQuantity(quantity + 1)) }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        <FaPlusSquare />
      </button>
    </div>
  );
}

QuantityController.propTypes = {
  id: PropTypes.number.isRequired,
};

export default QuantityController;
