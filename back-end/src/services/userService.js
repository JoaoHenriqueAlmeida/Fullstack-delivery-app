const md5 = require('md5');
const readFile = require('fs').promises;
const jwt = require('jsonwebtoken');
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

const auth = async (token) => {
  const secret = await readFile('jwt.evaluation.key', 'utf8');
  const decoded = jwt.verify(token, secret);
  if (!decoded) return null;
  const findUser = await Users.findOne({ where: { email: decoded.data.email } });
  if (!findUser) return null;
  return findUser;
};

const findUsers = async () => genericService.read(Users);

const findUser = async (id) => genericService.readOne(Users, id);

const updateUser = async (id, data) => genericService.update(Users, id, data);

const deleteUser = async (id) => genericService.delete(Users, id);

module.exports = {
  auth,
  deleteUser,
  findUsers,
  findUser,
  login,
  newUser,
  updateUser,
};