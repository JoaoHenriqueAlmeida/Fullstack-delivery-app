import React from 'react';
import '../styles/login.css';

function Login() {
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
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            placeholder="*******"
          />
        </label>
        <button
          data-testid="common_login__button-login"
          className="button-login"
          type="button"
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
      <footer>Erro</footer>
    </div>
  );
}

export default Login;
