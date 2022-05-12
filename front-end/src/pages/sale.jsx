import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../context/Provider';
import { getSale } from '../utils/requests';
import SellerHeader from '../components/SellerHeader';
import Navbar from '../components/Navbar';
import SaleRow from '../components/SaleRow';

function Sale() {
  const [sale, setSale] = useState([]);
  const [preparing, setPreparing] = useState(false);
  const { username, token } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSale = async () => {
      const results = await getSale(id, token);
      setSale(results);
      if (results[0].status === 'Pendente') setPreparing(true);
    };
    fetchSale();
  }, [id, token]);

  return (
    <main>
      <Navbar username={ username } />
      <table>
        { sale.length ? <SellerHeader
          preparing={ preparing }
          setPreparing={ setPreparing }
          id={ id }
          saleDate={ sale[0].saleDate }
          status={ sale[0].status }
          token={ token }
        /> : ''}
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { sale.length ? sale[0].slProducts.map((e, index) => SaleRow(e, index)) : '' }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="seller_order_details__element-order-total-price"
      >
        { `Total: R$ ${sale.length
          ? String(sale[0].totalPrice).replace('.', ',')
          : '0,00'}` }
      </button>
    </main>
  );
}

export default Sale;
