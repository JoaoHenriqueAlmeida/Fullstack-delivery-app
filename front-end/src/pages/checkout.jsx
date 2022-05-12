import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductRow from '../components/ProductRow';
import DeliveryDetails from '../components/DeliveryDetails';
import { createSale } from '../utils/requests';
import { MyContext } from '../context/Provider';
import '../styles/checkout.css';
import ProductColumn from '../components/ProductColumn';

function Checkout() {
  const { cart, userId, token, username, resetCart } = useContext(MyContext);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState(Number());
  const [sellerId, setSellerId] = useState(2);
  const navigate = useNavigate();
  const sumCart = cart
    .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    .toFixed(2);

  const newSale = {
    user_id: userId,
    seller_id: sellerId,
    totalPrice: Number(sumCart),
    deliveryAddress: address,
    deliveryNumber: addressNumber,
    saleDate: new Date(),
    status: 'Pendente',
    cart,
  };

  const submitSale = async () => {
    const results = await createSale(token, newSale);
    if (results.id) {
      navigate(`/customer/orders/${results.id}`, { replace: true });
      resetCart([]);
    }
  };

  return (
    <main>
      <Navbar username={ username } />
      <div className="vitrine-checkout">
        <h2 className="title">Finalizar Pedido</h2>
        <div className="finalizar-pedido">
          <table className="table">
            <ProductColumn />
            <tbody>
              { cart
                .map((e, index) => ProductRow(e, index)) }
            </tbody>
          </table>
          <button
            type="button"
            data-testid="customer_checkout__element-order-total-price"
            className="total-price"
          >
            { `Total: R$ ${String(sumCart).replace('.', ',')}` }
          </button>
        </div>
        <h2 className="title">Detalhes e Endereco para Entrega</h2>
        <div className="detalhes-entrega">
          <DeliveryDetails
            setAddress={ setAddress }
            setAddressNumber={ setAddressNumber }
            setSellerId={ setSellerId }
          />
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            className="finalize-button"
            onClick={ () => submitSale() }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
