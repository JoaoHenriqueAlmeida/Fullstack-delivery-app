import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MyContext } from '../context/Provider';
import '../styles/navbar.css';

function Navbar(props) {
  const { username } = props;
  const { setLogged } = useContext(MyContext);

  // const handleChange = (number) => {
  //   setSelected(number);
  //   navigate(`/customer/orders/${sale.id}`, { replace: true });
  // };

  return (
    <nav>
      <div className="nav-esquerda">
        <Link
          data-testid="customer_products__element-navbar-link-products"
          className="link"
          to="/customer/products"
        >
          Produtos

        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          className="link"
          to="/customer/orders"
        >
          Meus Pedidos

        </Link>
      </div>
      <div className="user-logout">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { username }
        </span>

        <Link
          data-testid="customer_products__element-navbar-link-logout"
          className="link logout"
          to="/"
          onClick={ () => {
            localStorage.removeItem('user');
            setLogged(false);
          } }
        >
          Sair

        </Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
