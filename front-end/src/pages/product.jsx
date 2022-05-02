import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { requestProducts } from '../utils/requests';
import { MyContext } from '../context/Provider';

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { username } = useContext(MyContext);

  useEffect(() => {
    const fetch = async () => {
      const results = await requestProducts();
      if (results) setProducts(results);
    };
    fetch();
  }, []);

  return (
    <>
      <Navbar username={ username } />
      <h1>Produtos</h1>
      { products.map((e) => ProductCard(e)) }
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/checkout', { replace: true }) }
      >
        Ver Carrinho:
        <span data-testid="customer_products__checkout-bottom-value"> R$ 0,00</span>
      </button>
    </>
  );
}

export default Product;
