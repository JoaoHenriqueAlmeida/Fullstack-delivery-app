import PropTypes from 'prop-types';
import React, { createContext, useState, useReducer } from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, MANUAL_INPUT } from './reducers';

export const MyContext = createContext();

export function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const products = [
    { id: 1, title: 'Skol Lata 250ml', price: 2.20 },
    { id: 2, title: 'Heineken 600ml', price: 7.50 },
    { id: 3, title: 'Antarctica Pilsen 300ml', price: 2.49 },
    { id: 4, title: 'Brahma 600ml', price: 7.50 },
    { id: 5, title: 'Skol 269ml', price: 2.19 },
    { id: 6, title: 'Skol Beat Senses 313ml', price: 4.49 },
    { id: 7, title: 'Becks 330ml', price: 4.49 },
    { id: 8, title: 'Brahma Duplo Malte 350ml', price: 2.79 },
    { id: 9, title: 'Becks 600ml', price: 8.89 },
    { id: 10, title: 'Skol Beats Senses 260ml', price: 3.57 },
    { id: 11, title: 'Stella Artois 275ml', price: 3.49 },
  ];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  const manualInput = (inputProduct) => {
    dispatch({ type: MANUAL_INPUT, inputProduct });
  };

  const context = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    username,
    setUsername,
    token,
    setToken,
    products,
    cart: cartState.cart,
    addProductToCart,
    removeProductFromCart,
    manualInput,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
