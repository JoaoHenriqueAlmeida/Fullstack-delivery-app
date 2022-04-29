const md5 = require('md5');
const { Users } = require('../database/models');

const login = async (email, password) => {
  const criptedPassword = md5(password);

  const result = await Users.findOne({ where: { email, password: criptedPassword } });

  return result;
};

module.exports = {
  login,
};