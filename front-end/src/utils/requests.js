const contentType = 'application/json; charset=utf-8';

const requestUser = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify({ email, password }),
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

const createUser = async (name, email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify({ name, password, email }),
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/register`, options)
    .then((response) => response.json())
    .then((data) => data);
};

const requestProducts = () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': contentType },
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
