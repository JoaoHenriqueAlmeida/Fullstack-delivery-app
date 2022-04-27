import React from 'react';

function Login() {
  return (
    <div>
      <span className="logo">CETABOM ENTREGAS!</span>

      <label htmlFor="email">
        Login
        <input id="email" type="text" placeholder="email@trybeer.com.br" />
      </label>

      <label htmlFor="password">
        Senha
        <input id="password" type="password" placeholder="*******" />
      </label>
    </div>
  );
}

export default Login;
