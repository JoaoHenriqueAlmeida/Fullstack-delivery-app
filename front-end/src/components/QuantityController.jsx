import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { MyContext } from '../context/Provider';

function QuantityController(props) {
  const { id } = props;
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const { removeProductFromCart, addProductToCart, products } = useContext(MyContext);

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
        disabled={ disabled }
        onClick={ (() => {
          removeProductFromCart(id);
          setQuantity(quantity - 1);
        }) }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        <FaMinusSquare />
      </button>

      <span data-testid={ `customer_products__input-card-quantity-${id}` }>
        { quantity }
      </span>

      <button
        type="button"
        aria-label="add-product"
        onClick={ (() => {
          addProductToCart(products[id - 1]);
          setQuantity(quantity + 1);
        }) }
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
