const { Users } = require('../database/models');
const userService = require('./userService');

const updateUserRole = async (id, data, token) => {
  const results = await userService.auth(token);

  if (results.role !== 'administrator') throw new Error('Usuário não autorizado para essa operação');

  const user = await Users.findByPk(id);

  if (!user) throw new Error('Usuário não encontrado');

  user.set({ ...user, role: data });

  await user.save();

  return user;
};

const deleteUser = async (id, role) => {
  const results = await userService.auth(token);

  if (results.role !== 'administrator') throw new Error('Usuário não autorizado para essa operação');

  await Users.destroy({ where: { id } });
};

module.exports = {
  updateUserRole,
  deleteUser,
};