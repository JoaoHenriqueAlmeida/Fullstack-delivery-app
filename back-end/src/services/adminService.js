const { Users } = require('../database/models');

const updateUserRole = async (id, role, data) => {
  if (role !== 'administrator') throw new Error('Usuário não autorizado para essa operação');

  const user = await Users.findByPk(id);
  user.set({ ...user, role: data });
  await user.save();

  return user;
};

const deleteUser = async (id, role) => {
  if (role !== 'administrator') throw new Error('Usuário não autorizado para essa operação');
  await Users.destroy({ where: { id } });
};

module.exports = {
  updateUserRole,
  deleteUser,
};