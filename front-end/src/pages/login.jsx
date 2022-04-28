import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../context/Provider';
import '../styles/login.css';
import requestUser from '../utils/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logged, setLogged] = useState(false);

  const {
    setUserEmail,
    setUserPassword,
  } = useContext(MyContext);

  const validateValues = async () => {
    const regex = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const emailValidation = regex.test(email);

    const SIX = 6;
    const passwordValidation = password.length >= SIX;

    if (!emailValidation) setError('Email inválido.');
    if (!passwordValidation) setError('Senha inválida ou muito curta.');
    if (emailValidation && passwordValidation) {
      setError('');
      try {
        const user = await requestUser(email, password);
        if (!user) throw new Error('Usuário não encontrado');
        setUserEmail(email);
        setUserPassword(password);
        setLogged(true);
      } catch (err) {
        setError('Usuário inválido');
      }
    }
  };

  if (logged) return <Navigate to="/products" />;
  return (
    <div className="div-login">
      <h1 className="logo">CETABOM ENTREGAS!</h1>

      <div className="container-login">
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
            type="text"
            placeholder="email@trybeer.com.br"
            onChange={ (({ target }) => setEmail(target.value)) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            placeholder="*******"
            onChange={ (({ target }) => setPassword(target.value)) }
          />
        </label>
        <button
          data-testid="common_login__element-invalid-email"
          className="button-login"
          type="button"
          onClick={ (() => validateValues()) }
        >
          Login

        </button>
        <button
          data-testid="common_login__button-register"
          className="button-register"
          type="button"
        >
          Ainda nao tenho conta

        </button>
      </div>
      <footer>{`${error}`}</footer>
    </div>
  );
}

export default Login;
