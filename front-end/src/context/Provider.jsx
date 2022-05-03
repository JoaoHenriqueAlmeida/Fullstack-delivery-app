import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const context = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    username,
    setUsername,
    token,
    setToken,
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
