import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSale } from '../utils/requests';
import { MyContext } from '../context/Provider';
import Navbar from '../components/Navbar';
import SaleHeader from '../components/SaleHeader';
import DetailRow from '../components/DetailRow';

function Details() {
  const [sale, setSale] = useState([]);
  const { token, username } = useContext(MyContext);
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
      <Navbar username={ username } />
      <table>
        <SaleHeader />
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
          { sale ? sale.map((e, index) => DetailRow(e, index)) : '' }
        </tbody>
      </table>
    </main>
  );
}

export default Details;