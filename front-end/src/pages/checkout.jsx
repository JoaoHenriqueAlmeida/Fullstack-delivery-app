import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductRow from '../components/ProductRow';
import DeliveryDetails from '../components/DeliveryDetails';
import { createSale } from '../utils/requests';
import { MyContext } from '../context/Provider';

function Checkout() {
  const { cart, username, token } = useContext(MyContext);
  const navigate = useNavigate();
  const sumCart = cart
    .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    .toFixed(2);

  return (
    <main>
      <Navbar username={ username } />
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart
            .map((e, index) => ProductRow(e, index)) }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: R$ ${String(sumCart).replace('.', ',')}` }
      </button>
      <DeliveryDetails />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ (async () => {
          const results = await createSale(token, cart);
          navigate(`/customer/orders/${!results ? 1 : results.id}`, { replace: true });
        }) }
      >
        Finalizar Pedido
      </button>
    </main>
  );
}

export default Checkout;
