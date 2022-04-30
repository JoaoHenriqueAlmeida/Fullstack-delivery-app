const md5 = require('md5');
const { Users } = require('../database/models');
const genericService = require('./basicService');

const login = async (email, password) => {
  const criptedPassword = md5(password);

  const result = await Users.findOne({ where: { email, password: criptedPassword } });

  return result;
};

const newUser = async (data) => {
  const user = await genericService.create(Users, data);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

const findUsers = async () => genericService.read(Users);

const findUser = async (id) => genericService.readOne(Users, id);

const updateUser = async (id, data) => genericService.update(Users, id, data);

const deleteUser = async (id) => genericService.delete(Users, id);

module.exports = {
  login,
  newUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
};