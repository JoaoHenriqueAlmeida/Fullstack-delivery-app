import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Checkout from '../pages/checkout';
import Login from '../pages/login';
import Orders from '../pages/orders';
import Product from '../pages/product';
import Register from '../pages/register';
import Details from '../pages/details';
import Sellings from '../pages/sellings';

export default function Switch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Product /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders/:id" element={ <Details /> } />
        <Route path="/customer/orders/" element={ <Orders /> } />
        <Route path="/seller/orders" element={ <Sellings /> } />
      </Routes>
    </BrowserRouter>
  );
}
