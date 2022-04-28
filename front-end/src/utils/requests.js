const requestUser = (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  fetch('https://login.com/validate', options)
    .then((response) => response.json())
    .then((data) => data);
};

export default requestUser;
