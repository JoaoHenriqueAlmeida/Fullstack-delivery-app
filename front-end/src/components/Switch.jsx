import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Checkout from '../pages/checkout';
import Login from '../pages/login';
import Pedidos from '../pages/pedidos';
import Product from '../pages/product';
import Register from '../pages/register';

export default function Switch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Product /> } />
        <Route path="/customer/orders" element={ <Pedidos /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
      </Routes>
    </BrowserRouter>
  );
}
