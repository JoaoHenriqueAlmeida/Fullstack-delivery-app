const md5 = require('md5');
const Users = require('../database/models/Users');

const login = async (email, password) => {
  const criptedPassword = md5(password);
  console.log(criptedPassword);
  const result = Users.findOne({ where: { email, password } });

  return result;
};

module.exports = {
  login,
};