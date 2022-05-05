import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { requestProducts } from '../utils/requests';
import { MyContext } from '../context/Provider';
import '../styles/products.css';

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { username, token, cart } = useContext(MyContext);

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const results = await requestProducts(token);
      if (results) setProducts(results);
    };
    fetch();
  }, [token]);

  return (
    <div>
      <Navbar username={ username } />
      <h1>Produtos</h1>
      <div className="vitrine">
        { products.map((e) => ProductCard(e)) }
      </div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/checkout', { replace: true }) }
      >
        Ver Carrinho:
        <span data-testid="customer_products__checkout-bottom-value">
          { ` R$ ${cart
            .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
            .toFixed(2)}` }
        </span>
      </button>
    </div>
  );
}

export default Product;
