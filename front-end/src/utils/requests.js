const CONTENT_TYPE = 'Content-Type';
const CHARSET = 'application/json; charset=utf-8';

const requestUser = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': CHARSET },
    body: JSON.stringify({ email, password }),
  };
  const user = fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`, options)
    .then((response) => response.json())
    .then((data) => data);

  return user;
};

const createUser = async (name, email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': CHARSET },
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
  reqHeaders.append(CONTENT_TYPE, CHARSET);
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
  reqHeaders.append(CONTENT_TYPE, CHARSET);
  const options = {
    method: 'POST',
    body: JSON.stringify(sale),
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/sales`, options)
    .then((response) => response.json())
    .then((data) => data);
  console.log(results);
  return results;
};

const requestSales = async (token) => {
  const reqHeaders = new Headers();
  reqHeaders.append('Authorization', token);
  reqHeaders.append(CONTENT_TYPE, CHARSET);
  const options = {
    method: 'GET',
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/orders`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

const getSale = async (id, token) => {
  const reqHeaders = new Headers();
  reqHeaders.append('Authorization', token);
  reqHeaders.append(CONTENT_TYPE, CHARSET);
  const options = {
    method: 'GET',
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/orders/${id}`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

const sellerSales = async (token) => {
  const reqHeaders = new Headers();
  reqHeaders.append('Authorization', token);
  reqHeaders.append(CONTENT_TYPE, CHARSET);
  const options = {
    method: 'GET',
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/orders/seller`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

export {
  requestUser,
  createUser,
  requestProducts,
  createSale,
  requestSales,
  getSale,
  sellerSales,
};
