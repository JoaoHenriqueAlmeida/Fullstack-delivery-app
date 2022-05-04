import React from 'react';
import PropTypes from 'prop-types';
import QuantityController from './QuantityController';
import '../styles/productCard.css';

function ProductCard(props) {
  const {
    id,
    name,
    price,
    url_image: urlImage,
  } = props;

  return (
    <div className="card" key={ id }>
      <h3
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price.replace('.', ',')}`}
      </h3>
      <img
        data-testid={ `customer_products__element-card-img-${id}` }
        src={ urlImage }
        alt={ `${name}-thumbnail` }
      />
      <div className="card-info">
        <h1 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h1>
        <QuantityController id={ id } />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url_image: PropTypes.string.isRequired,
};

export default ProductCard;
