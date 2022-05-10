import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Provider';
import '../styles/login.css';
import { requestUser } from '../utils/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logged, setLogged] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const regex = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const emailValidation = regex.test(email);

    const SIX = 6;
    const passwordValidation = password.length >= SIX;

    if (emailValidation && passwordValidation) setDisabled(false);
    if (!emailValidation || !passwordValidation) setDisabled(true);
  }, [email, password]);

  const {
    setUserEmail,
    setUserPassword,
    setUsername,
    setToken,
    setUserId,
  } = useContext(MyContext);

  const validateUser = async () => {
    setError('');
    const user = await requestUser(email, password);
    if (!user.message) {
      setUserEmail(email);
      setUserPassword(password);
      setUsername(user.name);
      setToken(user.token);
      setUserId(user.id);
      const userToSave = JSON
        .stringify({
          name: user.name, email: user.email, role: user.role, token: user.token,
        });
      localStorage.setItem('user', userToSave);
      setLogged(true);
    } else {
      setError('Usuário inválido');
    }
  };

  if (logged) return <Navigate to="/customer/products" />;
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
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            type="password"
            placeholder="*******"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          className="button-login"
          type="button"
          disabled={ disabled }
          onClick={ () => validateUser() }
        >
          LOGIN

        </button>
        <button
          data-testid="common_login__button-register"
          className="button-register"
          type="button"
          onClick={ () => navigate('/register', { replace: true }) }
        >
          Ainda nao tenho conta

        </button>
      </div>
      <footer
        hidden={ error === '' }
        data-testid="common_login__element-invalid-email"
      >
        {error}
      </footer>
    </div>
  );
}

export default Login;
