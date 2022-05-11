import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SaleCard from '../components/SaleCard';
import { requestSales } from '../utils/requests';
import { MyContext } from '../context/Provider';

function Orders() {
  const { username, token } = useContext(MyContext);
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSales = async () => {
      const results = await requestSales(token);
      setSales(results);
    };
    fetchSales();
  }, [token]);

  return (
    <div>
      <Navbar username={ username } />
      <h1>Pedidos</h1>
      { sales.map((sale) => (
        <button
          key={ sale.id }
          type="button"
          onClick={ (() => navigate(`/customer/orders/${sale.id}`, { replace: true })) }
        >
          {SaleCard(sale)}
        </button>)) }
    </div>
  );
}

export default Orders;
