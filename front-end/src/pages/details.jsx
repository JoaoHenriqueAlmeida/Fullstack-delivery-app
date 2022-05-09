import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailRow from '../components/DetailRow';
import SaleHeader from '../components/SaleHeader';
import { MyContext } from '../context/Provider';
import { getSale } from '../utils/requests';

function Details() {
  const [sale, setSale] = useState([]);
  const { token } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSale = async () => {
      const results = await getSale(id, token);
      setSale(results);
    };
    fetchSale();
  }, [id, token]);

  return (
    <main>
      <table>
        { sale.length ? SaleHeader(sale[0]) : ''}
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
          { sale.length ? sale[0].slProducts.map((e, index) => DetailRow(e, index)) : '' }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="customer_order_details__element-order-total-price"
      >
        { `Total: R$ ${sale.length
          ? String(sale[0].totalPrice).replace('.', ',')
          : '0,00'}` }
      </button>
    </main>
  );
}

export default Details;
