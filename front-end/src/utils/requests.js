require('dotenv').config();

const requestUser = (email, password) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  fetch(`http://localhost:${process.env.REACT_APP_BACKENDPORT || '3000'}/login/validate`, options)
    .then((response) => response.json())
    .then((data) => data);
};

export default requestUser;
