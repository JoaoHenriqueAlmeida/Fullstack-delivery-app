const contentType = 'application/json; charset=utf-8';

const requestUser = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify({ email, password }),
  };
  const user = fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`, options)
    .then((response) => response.json())
    .then((data) => data);

  return user;
};

const requestSellers = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': contentType },
  };
  const results = fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/sellers`, options)
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
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/register`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

const requestProducts = async (token) => {
  const reqHeaders = new Headers();
  reqHeaders.append('Authorization', token);
  reqHeaders.append('Content-Type', contentType);
  const options = {
    method: 'GET',
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/products`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

const createSale = async (token, sale) => {
  const reqHeaders = new Headers();
  reqHeaders.append('Authorization', token);
  reqHeaders.append('Content-Type', contentType);
  const options = {
    method: 'POST',
    body: JSON.stringify(sale),
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/customer/orders`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

export {
  requestUser,
  createUser,
  requestSellers,
  requestProducts,
  createSale,
};
