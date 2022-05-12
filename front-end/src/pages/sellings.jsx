import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MyContext } from '../context/Provider';
import SellerCardSale from '../components/SellerCardSale';
import { sellerSales } from '../utils/requests';

function Sellings() {
  const navigate = useNavigate();
  const { username, token } = useContext(MyContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const results = await sellerSales(token);
      setSales(results);
    };
    fetch();
  }, [token]);

  return (
    <div>
      <Navbar username={ username } />
      { sales.map((e) => (
        <button
          key={ e.id }
          type="button"
          onClick={ () => navigate(`/seller/orders/${e.id}`, { replace: true }) }
        >
          {SellerCardSale(e)}
        </button>
      )) }
    </div>
  );
}

export default Sellings;
