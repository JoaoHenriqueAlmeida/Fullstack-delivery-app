const JSON = 'application/json';

const requestUser = (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': JSON },
    body: { email, password },
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`, options)
    .then((response) => response.json())
    .then((data) => data);
};

const createUser = (name, email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': JSON },
    body: { name, password, email },
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/register`, options)
    .then((response) => response.json())
    .then((data) => data);
};

const requestProducts = () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': JSON },
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/products`, options)
    .then((response) => response.json())
    .then((data) => data);
};

export {
  requestUser,
  createUser,
  requestProducts,
};
