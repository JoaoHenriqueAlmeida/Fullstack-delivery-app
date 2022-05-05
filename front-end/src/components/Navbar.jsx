import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { username } = props;
  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Produtos

      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Meus Pedidos

      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { username }
      </span>

      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/"
        onClick={ () => localStorage.removeItem('user') }
      >
        Sair

      </Link>
    </nav>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
