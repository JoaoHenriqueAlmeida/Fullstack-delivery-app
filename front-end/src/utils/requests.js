const requestUser = (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKENDPORT || '3000'}/login`, options)
    .then((response) => response.json())
    .then((data) => data);
};

const createUser = (name, email, password) => {
  const options = {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, password, email }),
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKENDPORT || '3000'}/register`, options)
    .then((response) => response.json())
    .then((data) => data);
};

export {
  requestUser,
  createUser,
};
