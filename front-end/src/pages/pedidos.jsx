import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { MyContext } from '../context/Provider';

function Pedidos() {
  const { username } = useContext(MyContext);

  return (
    <div>
      <Navbar username={ username } />
      <h1>Pedidos</h1>
    </div>
  );
}

export default Pedidos;
