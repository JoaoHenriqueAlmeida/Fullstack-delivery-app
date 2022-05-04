import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { username } = props;
  return (
    <nav>
      <a
        href="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </a>

      <a
        href="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </a>

      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { username }
      </span>

      <a
        href="/"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.removeItem('user') }
      >
        Sair
      </a>
    </nav>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
