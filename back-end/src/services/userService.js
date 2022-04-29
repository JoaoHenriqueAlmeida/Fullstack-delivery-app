const Users = require('../database/models/Users');

const login = async (email, password) => {
  const result = Users.findOne({ where: { email, password } });

  return result;
};

module.exports = {
  login,
};