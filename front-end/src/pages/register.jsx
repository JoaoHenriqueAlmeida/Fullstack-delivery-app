import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../utils/requests';
import { MyContext } from '../context/Provider';

const SIX = 6;
const TWELVE = 12;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const { setUsername, setToken } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const regex = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const emailValidation = regex.test(email);
    const nameValidation = name.length >= TWELVE;
    const passwordValidation = password.length >= SIX;

    if (nameValidation && emailValidation && passwordValidation) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  const submitValues = async (event) => {
    event.preventDefault();
    setError('');
    const newUser = await createUser(name, email, password);
    if (!newUser.message) {
      console.log(newUser);
      setUsername(newUser.name);
      setToken(newUser.token);
      const userToSave = JSON
        .stringify({
          name, email, role: newUser.role, token: newUser.token,
        });
      localStorage.setItem('user', userToSave);
      navigate('/customer/products', { replace: true });
    } else {
      setError('Dados inválidos');
    }
  };

  return (
    <form className="div-login">
      <h1>Cadastro</h1>
      <fieldset className="container-login">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            onChange={ (({ target }) => setName(target.value)) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
            onChange={ (({ target }) => setEmail(target.value)) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            placeholder="**********"
            data-testid="common_register__input-password"
            onChange={ (({ target }) => setPassword(target.value)) }

          />
        </label>

        <button
          type="submit"
          disabled={ disabled }
          data-testid="common_register__button-register"
          onClick={ ((event) => submitValues(event)) }
          className="button-login"
        >
          CADASTRAR
        </button>
      </fieldset>
      <footer
        hidden={ error === '' }
        date-testid="common_register__element-invalid_register"
      >
        {error}

      </footer>
    </form>
  );
}

export default Register;
