import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductRow from '../components/ProductRow';
import DeliveryDetails from '../components/DeliveryDetails';
import { createSale } from '../utils/requests';
import { MyContext } from '../context/Provider';

function Checkout() {
  const { cart, userId, token } = useContext(MyContext);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState(Number());
  const [sellerId, setSellerId] = useState(2);
  const navigate = useNavigate();
  const sumCart = cart
    .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    .toFixed(2);

  const newSale = {
    userId,
    sellerId,
    totalPrice: sumCart,
    deliveryAddress: address,
    deliveryNumber: addressNumber,
    saleDate: new Date(),
    status: 'Pendente',
    cart,
  };

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
      <DeliveryDetails
        setAddress={ setAddress }
        setAddressNumber={ setAddressNumber }
        setSellerId={ setSellerId }
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ (async () => {
          const results = await createSale(token, newSale);
          navigate(`/customer/orders/${results.id}`, { replace: true });
        }) }
      >
        Finalizar Pedido
      </button>
    </main>
  );
}

export default Checkout;
