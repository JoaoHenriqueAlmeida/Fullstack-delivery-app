import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import ProductRow from '../components/ProductRow';
import DeliveryDetails from '../components/DeliveryDetails';
import { MyContext } from '../context/Provider';

function Checkout() {
  const { cart, username } = useContext(MyContext);
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
      >
        Finalizar Pedido
      </button>
    </main>
  );
}

export default Checkout;
